import mongoose, { Schema, Model, Document, Types } from 'mongoose';

interface IMerchant extends Document {
    _id: Types.ObjectId;
    name: string;
}

interface IUser extends Document {
    _id: Types.ObjectId;
    email: string;
}

interface IPaymentMethod extends Document {
    _id: Types.ObjectId;
    type: string;
}

export interface ITransaction extends Document {
    merchant: Types.ObjectId | IMerchant;
    customer: Types.ObjectId | IUser;
    paymentMethod: Types.ObjectId | IPaymentMethod;
    amount: number;
    currency: string;
    status: 'pending' | 'completed' | 'failed' | 'refunded' | 'disputed' | 'charged_back';
    paymentGateway: 'stripe' | 'paypal' | 'custom';
    gatewayTransactionId?: string;
    metadata?: Record<string, any>;
    fraudScore?: number;
    ipAddress?: string;
    deviceFingerprint?: string;
    threeDSecureVerified?: boolean;
    refunds: {
        amount: number;
        reason: 'duplicate' | 'fraudulent' | 'requested_by_customer' | 'other';
        processedAt: Date;
    }[];
    history: {
        status: string;
        changedAt: Date;
        changedBy: string;
        note?: string;
    }[];
    createdAt: Date;
    updatedAt: Date;
    amountInCents: number;
}

const TransactionSchema: Schema<ITransaction> = new Schema(
    {
        merchant: {
            type: Schema.Types.ObjectId,
            ref: 'Merchant',
            required: true,
            index: true,
        },
        customer: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
            index: true,
        },
        paymentMethod: {
            type: Schema.Types.ObjectId,
            ref: 'PaymentMethod',
            required: true,
        },
        amount: {
            type: Number,
            required: true,
            min: 0.01,
            set: (v: number) => Math.round(v * 100) / 100,
        },
        currency: {
            type: String,
            default: 'USD',
            uppercase: true,
            trim: true,
            enum: ['USD', 'EUR', 'GEL'],
        },
        status: {
            type: String,
            enum: ['pending', 'completed', 'failed', 'refunded', 'disputed', 'charged_back'],
            default: 'pending',
            index: true,
        },
        paymentGateway: {
            type: String,
            enum: ['stripe', 'paypal', 'custom'],
            required: true,
        },
        gatewayTransactionId: {
            type: String,
            index: true,
            sparse: true,
        },
        metadata: {
            type: Schema.Types.Mixed,
            default: {},
        },
        fraudScore: {
            type: Number,
            min: 0,
            max: 100,
        },
        ipAddress: {
            type: String,
            validate: {
                validator: (v: string) => /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(v),
                message: 'Invalid IP address format',
            },
        },
        deviceFingerprint: String,
        threeDSecureVerified: Boolean,
        refunds: [
            {
                amount: { type: Number, required: true },
                reason: {
                    type: String,
                    enum: ['duplicate', 'fraudulent', 'requested_by_customer', 'other'],
                    required: true,
                },
                processedAt: { type: Date, default: Date.now },
            },
        ],
        history: [
            {
                status: { type: String, required: true },
                changedAt: { type: Date, default: Date.now },
                changedBy: { type: String, required: true },
                note: String,
            },
        ],
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);

TransactionSchema.index({ merchant: 1, status: 1, createdAt: -1 });
TransactionSchema.index({ customer: 1, createdAt: -1 });
TransactionSchema.index({ gatewayTransactionId: 1 }, { unique: true, sparse: true });

TransactionSchema.virtual('amountInCents').get(function (this: ITransaction) {
    return Math.round(this.amount * 100);
});

TransactionSchema.pre<ITransaction>('save', function (next) {
    if (this.isModified('status')) {
        this.history.push({
            status: this.status,
            changedAt: new Date(),      // <--- this is key!
            changedBy: 'system',
            note: 'Status updated automatically',
        });
    }
    next();
});

TransactionSchema.statics.findByMerchant = function (merchantId: string) {
    return this.find({ merchant: merchantId }).exec();
};

interface TransactionModel extends Model<ITransaction> {
    findByMerchant(merchantId: string): Promise<ITransaction[]>;
}

export const Transaction: TransactionModel = mongoose.model<ITransaction, TransactionModel>(
    'Transaction',
    TransactionSchema
);