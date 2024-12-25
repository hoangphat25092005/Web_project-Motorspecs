const Motorbike = require('../models/Motorbike');

exports.getMotorbikes = async (req, res) => {
    try {
        const motorbikes = await Motorbike.find();
        res.status(200).json(motorbikes);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching motorbikes' });
    }
};

exports.getMotorbikeById = async (req, res) => {
    try {
        const motorbike = await Motorbike.findById(req.params.id);
        if (!motorbike) {
            return res.status(404).json({ error: 'Motorbike not found' });
        }
        res.status(200).json(motorbike);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching motorbike' });
    }
};

exports.createMotorbike = async (req, res) => {
    try {
        const imageUrl = req.file ? `/uploads/${req.file.filename}` : '';
        const motorbike = new Motorbike({
            ...req.body,
            imageUrl
        });
        await motorbike.save();
        res.status(201).json(motorbike);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateMotorbike = async (req, res) => {
    try {
        // Check if ID exists
        const existingMotorbike = await Motorbike.findById(req.params.id);
        if (!existingMotorbike) {
            return res.status(404).json({ error: 'Motorbike not found' });
        }

        // Prepare updates
        const updates = {
            name: req.body.name || existingMotorbike.name,
            brand: req.body.brand || existingMotorbike.brand,
            cc: req.body.cc || existingMotorbike.cc,
            price: req.body.price || existingMotorbike.price
        };

        // Handle image update
        if (req.file) {
            updates.imageUrl = `/uploads/${req.file.filename}`;
        }

        // Update motorbike
        const updatedMotorbike = await Motorbike.findByIdAndUpdate(
            req.params.id,
            updates,
            { new: true, runValidators: true }
        );

        res.status(200).json(updatedMotorbike);
    } catch (error) {
        console.error('Update error:', error);
        res.status(400).json({ 
            error: 'Failed to update motorbike',
            details: error.message 
        });
    }
};

exports.deleteMotorbike = async (req, res) => {
    try {
        await Motorbike.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Motorbike deleted' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};