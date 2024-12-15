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
    engineType: String,
    maxPower: String,
    tranmission: String,
    fuelCapacity: String,
    wetWeight: String,
    year: Number,

});

module.exports = mongoose.model(`Motorbike`, MotorShema);