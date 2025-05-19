import {Schema, model, Document} from 'mongoose';

export interface IMer extends Document {
    id: string,
    business: string,
    website: string,
    legalName: string,
    businessType: string,
    email: string,
    phone: string,
    password: string,
    address: {
        street: string,
        city: string,
        state: string,
        zip: string,
        country: string,
    },
    identityDocumentUrl: string,
    proofOfAddressUrl: string,
    isVerified: boolean,
    verificationStatus: string,
    payoutAcc: string,
    payoutSchedule: {
        interval: string,
        delayDays: number
    },
    isEmailVerified: boolean,
    emailVerificationToken?: string | null,
    createdAt: Date,
}

const merchantSchema = new Schema<IMer>({
    id: {type: String, required: true, unique: true},
    business: {type: String, required: true},
    website: {type: String},
    legalName: {type: String, required: true},
    businessType: {type: String, enum: ['company', 'individual'], required: true},
    email: {type: String, required: true},
    phone: {type: String},
    password: {type: String, required: true},
    address: {
        street: String,
        city: String,
        state: String,
        postalCode: String,
        country: String,
    },
    identityDocumentUrl: {type: String},
    proofOfAddressUrl: {type: String},
    isVerified: {type: Boolean, default: false},
    verificationStatus: { type: String, enum: ['pending', 'verified', 'rejected'], default: 'pending' },
    payoutAcc: { type: String },
    payoutSchedule: {
        interval: { type: String, enum: ['daily', 'weekly', 'monthly'], default: 'weekly' },
        delayDays: { type: Number, default: 2 },
    },
    emailVerificationToken: { type: String, default: null },
    isEmailVerified: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
});

export const Merchant = model<IMer>('Merchant', merchantSchema);