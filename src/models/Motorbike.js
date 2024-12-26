const mongoose = require('mongoose');

const motorbikeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        index: true
    },
    brand: {
        type: String,
        required: true,
        index: true
    },
    cc: {
        type: Number,
        required: true,
        index: true
    },
    price: {
        type: Number,
        required: true,
        index: true
    },
    transmission: {
        type: String,
        required: false
    },
    fuelCapacity: {
        type: Number,
        required: false
    },
    year: {
        type: Number,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    imageUrl: String
});

module.exports = mongoose.model('Motorbike', motorbikeSchema);