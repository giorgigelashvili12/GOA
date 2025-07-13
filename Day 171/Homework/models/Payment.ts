import mongoose, {Schema, model, Document} from 'mongoose';
import {encrypt, decrypt} from '../utils/cryptography';

export interface IPayment extends Document {
    userId: mongoose.Types.ObjectId;
    type: 'card' | 'bank_account';
    token: string; // ENCRYPTED!!!!
    last4?: string;
    brand?: string;
    expiryMonth?: number;
    expiryYear?: number;
    isDefault: boolean;
    metadata?: Record<string, any>;
    createdAt: Date;
    updateDate: Date;
}

const paymentSchema = new Schema<IPayment>({
    userId: {
        type:Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        immutable: true,
    },
    type: {
        type: String,
        enum: ['card', 'bank_account'],
        required: true
    },
    token: {
        type: String,
        required: true,
        select: false,
        set: (plainText: string) => encrypt(plainText),
        get: (cipherText: string) => decrypt(cipherText),
    },
    last4: {
        type: String,
        validate: /^\d{4}$/, // 4 digit
    },
    brand: {
        type: String,
        enum: ['credo', 'visa', 'mastercard', 'other']
    },
    expiryMonth: {
        type: Number,
        min: 1,
        max: 12,
    },
    expiryYear: {
        type: Number,
        min: new Date().getFullYear(),
    },
    isDefault: {
        type: Boolean,
        default: false,
    },
    metadata: {
        type: Schema.Types.Mixed,
        default: {},
    },
}, {timestamps: true, toJSON: {getters: true}});

paymentSchema.index({userId: 1, isDefault: 1});
paymentSchema.index({token: 1}, {unique: true});

paymentSchema.pre('save', function(next) {
    if(this.isDefault) {
        this.model('Payment').updateMany(
            {userId: this.userId, isDefault: true},
            {$set: {isDefault: false}}
        );
    }
    next();
});

export const Payment = model<IPayment>('Payment', paymentSchema);