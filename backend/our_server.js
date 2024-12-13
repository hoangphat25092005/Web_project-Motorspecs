const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config_db');
const bodyparser = require('body-parser');

//Routes
const motorbike = require("./routes/motorbike_routes");
const user = require('./routes/users_routes');

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

//My_middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

//Roues
app.use('/api/motorbikes', motorbike);
app.use('/api/users', user);

//Starting my server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

