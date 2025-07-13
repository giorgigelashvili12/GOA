import { Schema, model, Document } from 'mongoose';

export interface ILoginEvent extends Document {
    merchantId: string;
    ip: string;
    location: string;
    userAgent: string;
    deviceFingerprint: string;
    createdAt: Date;
}

const loginEventSchema = new Schema<ILoginEvent>({
    merchantId: { type: String, required: true },
    ip: { type: String, required: true },
    location: { type: String, required: true },
    userAgent: { type: String },
    deviceFingerprint: { type: String },
    createdAt: { type: Date, default: Date.now },
});

export const LoginEvent = model<ILoginEvent>('LoginEvent', loginEventSchema);