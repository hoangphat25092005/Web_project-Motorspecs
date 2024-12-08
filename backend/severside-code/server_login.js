const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();

//Writing middleware
app.use(bodyParser.json());
app.use(cors());

//Connect to MonGo DB Atlas
const MONGO_URI = 'mongodb+srv://phatluong2509:25092005Cs@cluster0.jvafc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(MONGO_URI, {})
.then(() => console.log(`Connected Mongo DB Atlas successfully!`))
.catch((error) => console.log(`Error occur, can't connect to MonGo DB Atlas!`, error));

//Schemal Model
const userSchema = new mongoose.Schema({
   username: {
     type: String, 
     required: true, 
     unique: true
   },

   password: {
     type: String, 
     required: true
   },
});

const user = mongoose.model('User', userSchema);

//Routing
//Not sign up yet

app.post('/signup', async (req, res) => {
  const {username, password} = req.body;

  try {
    const hashed_pass = await bcrypt.hash(password, 10);
    const new_user = new User({username, password: hashed_pass});
    await new_user.save();
    res.status(201).json({message: `User created successfully`});
  } catch (error) {
    req.status(501).json({error: `Error for creating user`});
  }

});

//Login when already sign up
app.post('/login', async (req, res) => {
    const {username, password} = req.body;

    try {
      const user = await User.findOne({username});
      if(!user) {
        res.status(404).json({error: `User not found`});
      }

      const matching = await bcrypt.compare(password, user.password);
      if(!matching) {
        return res.status(400).json({error: `Invalid password`});
      }

      const token_time = jwt.sign(
        {id: user._id},
        'secretkey',
        {expiredIn: '1h'}
      );

    } catch (error) {
        res.status(501).json({error: 'Error, Login fail!'});
    }
});

//start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on https://localhost:${PORT}`));