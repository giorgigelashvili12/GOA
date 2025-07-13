import { Schema, model, Document } from 'mongoose';

export interface IMerchant extends Document {
    id: string;
    email: string;
    password: string;
    legalName: string;

    // Initially optional, filled after signup during verification/onboarding
    business?: string;
    website?: string;
    businessType?: 'company' | 'individual';
    phone?: string;
    address?: {
        street?: string;
        city?: string;
        state?: string;
        postalCode?: string;
        country?: string;
    };
    identityDocumentUrl?: string;
    proofOfAddressUrl?: string;

    // Status & verification flow
    isVerified: boolean; // means fully verified, able to make payments
    verificationStatus: 'unverified' | 'pending' | 'verified' | 'rejected'; // added 'unverified' for the initial test mode

    // Subscription & trial system
    subscriptionTier: 'free' | 'starter' | 'pro';  // tiers with increasing access
    freeTrialUsed: boolean; // to limit free trial usage

    payoutAcc?: string;
    payoutSchedule: {
        interval: 'daily' | 'weekly' | 'monthly';
        delayDays: number;
    };

    emailVerificationToken?: string | null;
    isEmailVerified: boolean;
    createdAt: Date;
}

const merchantSchema = new Schema<IMerchant>({
    id: { type: String, required: true, unique: true },

    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    legalName: { type: String, required: true },

    business: { type: String }, // optional at signup, filled later
    website: { type: String },
    businessType: {
        type: String,
        enum: ['company', 'individual'],
        required: false
    },
    phone: { type: String },
    address: {
        street: { type: String },
        city: { type: String },
        state: { type: String },
        postalCode: { type: String },
        country: { type: String },
    },
    identityDocumentUrl: { type: String },
    proofOfAddressUrl: { type: String },

    isVerified: { type: Boolean, default: false },

    verificationStatus: {
        type: String,
        enum: ['unverified', 'pending', 'verified', 'rejected'],
        default: 'unverified', // start as unverified on signup
        required: false,
    },

    subscriptionTier: {
        type: String,
        enum: ['free', 'starter', 'pro'],
        default: 'free', // start with free tier (testing mode)
        required: false
    },
    freeTrialUsed: { type: Boolean, default: false },

    payoutAcc: { type: String },
    payoutSchedule: {
        interval: {
            type: String,
            enum: ['daily', 'weekly', 'monthly'],
            default: 'weekly',
            required: false
        },
        delayDays: { type: Number, default: 2 },
    },

    emailVerificationToken: { type: String, default: null },
    isEmailVerified: { type: Boolean, default: false },

    createdAt: { type: Date, default: Date.now },
});

export const Merchant = model<IMerchant>('Merchant', merchantSchema);