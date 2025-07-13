import mongoose, { Schema, Model, Document, Types } from 'mongoose';
import { Buffer } from 'buffer';

export interface IVaultItem extends Document {
    ownerId: Types.ObjectId;
    encryptedValue: string;
    iv?: string;
    tag?: string;
    label?: string;
    createdAt: Date;
    updatedAt: Date;

    encryptValue(plaintext: string, encryptionKey: string): Promise<void>;
    decryptValue(encryptionKey: string): Promise<string>;
}

const VaultItemSchema = new Schema<IVaultItem>({
    ownerId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true
    },
    encryptedValue: {
        type: String,
        required: true,
        select: false
    },
    iv: {
        type: String,
        select: false
    },
    tag: {
        type: String,
        select: false
    },
    label: {
        type: String,
        trim: true,
        maxlength: 100
    }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
        transform: function(doc, ret) {
            delete ret.encryptedValue;
            delete ret.iv;
            delete ret.tag;
            return ret;
        }
    }
});

VaultItemSchema.methods.encryptValue = async function(plaintext: string, encryptionKey: string): Promise<void> {
    const crypto = await import('crypto');
    const iv = crypto.randomBytes(12);
    const cipher = crypto.createCipheriv('aes-256-gcm',
        Buffer.from(encryptionKey, 'hex'),
        iv
    );

    let encrypted = cipher.update(plaintext, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    const tag = cipher.getAuthTag();

    this.encryptedValue = encrypted;
    this.iv = iv.toString('hex');
    this.tag = tag.toString('hex');
};

VaultItemSchema.methods.decryptValue = async function(encryptionKey: string): Promise<string> {
    if (!this.iv || !this.tag) {
        throw new Error('Missing IV or authentication tag');
    }

    const crypto = await import('crypto');
    const decipher = crypto.createDecipheriv('aes-256-gcm',
        Buffer.from(encryptionKey, 'hex'),
        Buffer.from(this.iv, 'hex')
    );

    decipher.setAuthTag(Buffer.from(this.tag, 'hex'));

    let decrypted = decipher.update(this.encryptedValue, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
};

VaultItemSchema.index({ ownerId: 1, label: 1 }, { unique: false });

VaultItemSchema.pre<IVaultItem>('save', function(next) {
    if (this.isModified('encryptedValue') && !this.iv) {
        throw new Error('IV must be generated during encryption');
    }
    next();
});

interface VaultItemModel extends Model<IVaultItem> {
    findByOwner(ownerId: string): Promise<IVaultItem[]>;
}

VaultItemSchema.statics.findByOwner = function(ownerId: string) {
    return this.find({ ownerId }).select('-encryptedValue -iv -tag').exec();
};

export const VaultItem: VaultItemModel = mongoose.model<IVaultItem, VaultItemModel>(
    'VaultItem',
    VaultItemSchema
);