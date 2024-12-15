const MotorBike = require('../models/motorbikes');

const getMotorbike = async (req, res) => {
    try {
        const motorBike = await MotorBike.findOne({name: req.params.name});
        if(!motorBike) {
            return res.status(404).send(`Motorbike not found`);
        }
        res.json(motorBike);
    } catch (error) {
        res.status(500).send(`Server error!`);
    }
};

const createMotorBike = async(req, res) => {
    try {
        const {name, brand, price, description, engineType, maxPower, transmission, fuelCapacity, wetWeight, year} = req.body;
        const newMotorbike = new MotorBike({name, brand, price, description, engineType, maxPower, transmission, fuelCapacity, wetWeight, year});
        await newMotorbike.save();
    } catch (error) {
        res.status(500).send(`Server error!`);
    }
};

const updateMotorbike = async (req, res) => {
    try {
        const update = req.body;
        const motor = await MotorBike.findOneAndUpdate({name: req.params.name}, update, {new: true});
        if(!motor) {
            return res.status(404).send(`Motorbike not found!`);
        }
        res.json(motor);
    } catch (error) {
        res.status(500).send(`Server error!`);
    }
}; 

module.exports = {getMotorbike, createMotorBike, updateMotorbike};
