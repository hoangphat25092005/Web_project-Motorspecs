const mongoose = require('mongoose');

const MotorShema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    brand: String,
    price: Number,
    description: String,
});

module.exports = mongoose.model(`Motorbike`, MotorShema);