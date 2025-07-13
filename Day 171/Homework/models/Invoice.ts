import {Schema, model, Document} from 'mongoose';
import PDFDocument from 'pdfkit';
import { Buffer } from 'buffer';

interface ILineItem {
    description: string;
    quantity: number;
    unitPrice: number;
    taxRate?: number;
}

export interface IInvoice extends Document {
    invoiceNumber: string;
    invoiceDate: Date;
    dueDate: Date;
    sellerInfo: {
        company: string;
        taxId?: string;
        email: string;
        phone: string;
        address: {
            street: string;
            city: string;
            state: string;
            zip: string;
            country?: string;
        };
    };
    buyerInfo: {
        name: string;
        email: string;
        address: {
            street: string;
            city: string;
            state: string;
            zip: string;
        };
    };
    lineItems: {
        description: string;
        quantity: number;
        unitPrice: number;
        taxRate?: number;
    }[];
    subtotal: number;
    taxes: number;
    total: number;
    paymentMethod: 'card' | 'bank_transfer' | 'crypto';
    status: 'paid' | 'pending' | 'overdue';
    note?: string;
}

const InvoiceSchema = new Schema<IInvoice>({
    invoiceNumber: { type: String, required: true, unique: true },
    invoiceDate: { type: Date, default: Date.now },
    dueDate: { type: Date, required: true },
    sellerInfo: {
        company: { type: String, required: true },
        taxId: String,
        email: { type: String, required: true },
        phone: String,
        address: {
            street: { type: String, required: true },
            city: { type: String, required: true },
            state: { type: String, required: true },
            zip: { type: String, required: true },
            country: String
        }
    },
    buyerInfo: {
        name: { type: String, required: true },
        email: { type: String, required: true },
        address: {
            street: { type: String, required: true },
            city: { type: String, required: true },
            state: { type: String, required: true },
            zip: { type: String, required: true }
        }
    },
    lineItems: [{
        description: { type: String, required: true },
        quantity: { type: Number, required: true, min: 1 },
        unitPrice: { type: Number, required: true, min: 0 },
        taxRate: { type: Number, min: 0, max: 100 }
    }],
    subtotal: { type: Number, required: true },
    taxes: { type: Number, default: 0 },
    total: { type: Number, required: true },
    paymentMethod: {
        type: String,
        enum: ['card', 'bank_transfer', 'crypto'],
        required: true
    },
    status: {
        type: String,
        enum: ['paid', 'pending', 'overdue'],
        default: 'pending'
    },
    note: String
}, { timestamps: true });

InvoiceSchema.methods.generatePDF = function(): Promise<Buffer> {
    return new Promise((resolve, reject) => {
        const doc: PDFKit.PDFDocument = new PDFDocument({ size: 'A4', margin: 50 });
        const chunks: Uint8Array[] = [];

        // Type-safe event handlers
        doc.on('data', (chunk: Uint8Array) => chunks.push(chunk));
        doc.on('end', () => resolve(Buffer.concat(chunks)));
        doc.on('error', (err: Error) => reject(err));

        // Invoice Header
        doc
            .fillColor('#333333')
            .fontSize(20)
            .text('INVOICE', { align: 'right' })
            .fontSize(10)
            .text(`Invoice #: ${this.invoiceNumber}`, { align: 'right' })
            .text(`Date: ${this.invoiceDate.toLocaleDateString()}`, { align: 'right' })
            .moveDown();

        // Seller/Buyer Information
        doc
            .text(this.sellerInfo.company, { continued: true })
            .text(`Invoice To: ${this.buyerInfo.name}`, { align: 'right' })
            .fontSize(10)
            .text(this.sellerInfo.address.street, { continued: true })
            .text(this.buyerInfo.address.street, { align: 'right' })
            .text(`${this.sellerInfo.address.city}, ${this.sellerInfo.address.state} ${this.sellerInfo.address.zip}`,
                { continued: true })
            .text(`${this.buyerInfo.address.city}, ${this.buyerInfo.address.state} ${this.buyerInfo.address.zip}`,
                { align: 'right' })
            .moveDown(2);

        // Line Items Table Header
        doc
            .fillColor('#444444')
            .fontSize(12)
            .text('Description', 50, 200)
            .text('Qty', 300, 200)
            .text('Price', 350, 200)
            .text('Amount', 450, 200)
            .moveTo(50, 220)
            .lineTo(550, 220)
            .stroke();

        // Line Items
        let y: number = 230;
        this.lineItems.forEach((item: {
            description: string;
            quantity: number;
            unitPrice: number;
        }) => {
            const amount: number = item.quantity * item.unitPrice;
            doc
                .fontSize(10)
                .fillColor('#333333')
                .text(item.description, 50, y)
                .text(item.quantity.toString(), 300, y)
                .text(`$${item.unitPrice.toFixed(2)}`, 350, y)
                .text(`$${amount.toFixed(2)}`, 450, y);
            y += 25;
        });

        // Totals Section
        doc
            .moveTo(350, y + 20)
            .lineTo(550, y + 20)
            .stroke()
            .fontSize(12)
            .text('Subtotal:', 350, y + 30)
            .text(`$${this.subtotal.toFixed(2)}`, 450, y + 30)
            .text('Tax:', 350, y + 50)
            .text(`$${this.taxes.toFixed(2)}`, 450, y + 50)
            .fontSize(14)
            .text('Total:', 350, y + 80)
            .text(`$${this.total.toFixed(2)}`, 450, y + 80)
            .moveDown(3);

        // Footer
        doc
            .fontSize(10)
            .text(`Payment Method: ${this.paymentMethod.toUpperCase()}`, 50)
            .text(`Status: ${this.status.toUpperCase()}`, { align: 'right' })
            .moveDown()
            .text(this.note || 'Thank you for your business!', 50);

        doc.end();
    });
};