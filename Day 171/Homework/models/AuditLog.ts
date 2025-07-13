import mongoose, { Schema, Model, Document, Types } from 'mongoose';

export interface IAuditLog extends Document {
    actorId: Types.ObjectId;
    action: string;
    actionType: 'create' | 'read' | 'update' | 'delete' | 'login' | 'logout' | 'other';
    targetModel?: string;
    targetId?: Types.ObjectId;
    metadata?: Record<string, any>;
    ipAddress?: string;
    userAgent?: string;
    status: 'success' | 'failure';
    timestamp: Date;
}

const AuditLogSchema = new Schema<IAuditLog>({
    actorId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true
    },
    action: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
    actionType: {
        type: String,
        enum: ['create', 'read', 'update', 'delete', 'login', 'logout', 'other'],
        required: true
    },
    targetModel: {
        type: String,
        trim: true,
        maxlength: 50
    },
    targetId: {
        type: Schema.Types.ObjectId,
        index: true
    },
    metadata: {
        type: Schema.Types.Mixed,
        default: {}
    },
    ipAddress: {
        type: String,
        validate: {
            validator: (v: string) => /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(v),
            message: 'Invalid IP address format'
        }
    },
    userAgent: String,
    status: {
        type: String,
        enum: ['success', 'failure'],
        default: 'success'
    },
    timestamp: {
        type: Date,
        default: Date.now,
        index: true
    }
}, {
    bufferCommands: false,
    autoCreate: false
});

AuditLogSchema.index({ actorId: 1, timestamp: -1 });
AuditLogSchema.index({ targetId: 1, targetModel: 1 });
AuditLogSchema.index({ actionType: 1, status: 1 });

interface AuditLogModel extends Model<IAuditLog> {
    logEvent(params: {
        actorId: Types.ObjectId;
        action: string;
        actionType: IAuditLog['actionType'];
        targetModel?: string;
        targetId?: Types.ObjectId;
        metadata?: Record<string, any>;
        ipAddress?: string;
        userAgent?: string;
        status?: IAuditLog['status'];
    }): Promise<IAuditLog>;

    getRecentActivity(userId: Types.ObjectId, limit?: number): Promise<IAuditLog[]>;
}

AuditLogSchema.statics.logEvent = async function(params) {
    return this.create({
        actorId: params.actorId,
        action: params.action,
        actionType: params.actionType,
        targetModel: params.targetModel,
        targetId: params.targetId,
        metadata: params.metadata,
        ipAddress: params.ipAddress,
        userAgent: params.userAgent,
        status: params.status || 'success'
    });
};

AuditLogSchema.statics.getRecentActivity = function(userId, limit = 50) {
    return this.find({ actorId: userId })
        .sort({ timestamp: -1 })
        .limit(limit)
        .lean()
        .exec();
};

AuditLogSchema.pre<IAuditLog>('save', function(next) {
    if (this.action.length > 100) {
        this.action = this.action.substring(0, 97) + '...';
    }
    next();
});

export const AuditLog: AuditLogModel = mongoose.model<IAuditLog, AuditLogModel>(
    'AuditLog',
    AuditLogSchema
);