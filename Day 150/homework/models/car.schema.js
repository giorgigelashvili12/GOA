const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
    model: String,
    year: Number,
    price: String,
    fuel_type: {
        type: String,
        enum: ['petrol', 'diesel', 'hybrid', 'electric'],
        required: true 
    },
    color: {
        type: String,
        trim: true 
    },
    status: {
        type: String,
        enum: ['available', 'reserved', 'sold'],
        default: 'available'
    },
    imgs: [{type: String}],
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Car', carSchema);