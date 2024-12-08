const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

//Connect MongoDB
const MONGO_URI = 'mongodb+srv://phatluong2509:25092005Cs@cluster0.jvafc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(MONGO_URI, {})
.then(() => console.log(`Connected Mongo DB Atlas successfully!`))
.catch((error) => console.log(`Error occur, can't connect to MonGo DB Atlas!`, error));

//Motorbike Schema
const motor_schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },

    brand: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    description: {
        type: String,
        required: false
    },
});

const Motor = mongoose.model('Motorcycle', motor_schema);

//Controller to get motorbike by its name
app.get('/motor/:name', async (req, res) => {
    const {name} = req.params;

    try {
        const motorcycle = await Motor.findOne({name});

        if(!motorcycle) {
            return res.status(404).json({error: 'Motorcycle not found'});
        }

        res.status(200).json(motorcycle);
    } catch (error) {
        console.error(`Error with motor name!`, error);
        res.status(501).json({error: `Error occur, please try again!`});
    }

});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running at https://localhost:${PORT}`));