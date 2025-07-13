import 'dotenv/config';
import path from 'path';

export const ENCRYPTION_KEY = (() => {
    const key = process.env.ENCRYPTION_KEY
    if (!key) throw new Error('Missing ENCRYPTION_KEY in .env')

    const buf = Buffer.from(key, 'hex')
    if (buf.length !== 32) throw new Error('ENCRYPTION_KEY must be 32 bytes')
    return buf
})()