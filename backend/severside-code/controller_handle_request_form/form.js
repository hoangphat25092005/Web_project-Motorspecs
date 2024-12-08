const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

//Connect MongoDB Atlas
const MONGO_URI = 'mongodb+srv://phatluong2509:25092005Cs@cluster0.jvafc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(MONGO_URI, {})
.then(() => console.log(`Connected Mongo DB Atlas successfully!`))
.catch((error) => console.log(`Error occur, can't connect to MonGo DB Atlas!`, error));

// Motorbike Schema
const motorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    brand: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
});

const Motor = mongoose.model('Motorcycle', motorSchema);

//controller to handle motorbike creation
app.post('/motor', async(req, res) => {
    const {name, brand, price, description} = req.body;

    try {
        //check if the name brand already exist
        const existMotor = await Motor.findOne({name});
        if(existMotor) {
            return res.status(400).json({error: `Motorcycle with this name already exists`});
        }

        //Create newones
        const newMotor = new Motor({name, brand, price, description});
        await newMotor.save();

        res.status(201).json({
            message: 'New motorcycle created successfully!',
            motorbike: newMotor,
        });
    } catch (error) {
        console.error(`Error creating motorbike!`, error);
        res.status(501).json({error: 'An error occured, pleas try again!'});
    }
});

//get motorbike
app.get('/motor/:name', async (req, res) => {
    const {name} = req.params;

    try {
        const motorcycle = await Motor.findOne({name});

        if(!motorcycle) {
            return res.status(404).json({error: `Motorcycle not found!`});
        }

        res.status(200).json(motorcycle);
    } catch (error) {
        console.error(`Error with motor name!`, error);
        res.status(501).json({error: `Error occured, please try again!`});
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running at http://localhost${PORT}`));

