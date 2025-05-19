import crypto from 'crypto';

function hasher() {
    const hash = crypto.randomBytes(32).toString('hex');
    console.log(hash);
}

hasher();