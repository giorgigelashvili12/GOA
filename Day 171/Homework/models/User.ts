import {Schema, model, Document} from 'mongoose';

export interface IUser extends Document {
    email: string,
    password: string,
    role: 'customer' | 'merchant' | 'admin';
    createdAt: Date;
    updatedAt: Date;
}

const userSchema = new Schema<IUser>({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, unique: true},
    role: {
        type: String,
        enum: ['customer', 'merchant', 'admin'],
        default: 'customer',
        createdAt: { type: Date, default: () => new Date() },
        updatedAt: { type: Date, default: () => new Date() }
    },
});

const User = model<IUser>('User', userSchema);
export default User;