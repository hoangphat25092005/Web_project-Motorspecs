const user = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.User_register = async (req, res) => {
    try {
        const {username, password} = req.body;
        const hashed_pass = await bcrypt.hash(password, 8);
        const newuser = new user({username, password: hashed_pass});
        await newuser.save();
        res.status(201).send(`User has registered successfully!`);
    } catch (error) {
        res.status(500).send(`Server error!`);
    }
};

exports.User_login = async (req, res) => {
    try {
        const {username, password} = req.body;
        const User = await user.findOne({username});
        if(!User) {
            return res.status(404).send(`User not found!`);
        }

        const isMatched = await bcrypt.compare(password, User.password);
        if(!isMatched) {
            return res.status(404).send(`Invalid credentials!`);
        }

        const token= jwt.sign({id: User._id}, process.env.JWT_SECRET, {expiresIn: '1h'});
        res.json({token});
    } catch (error) {
        res.status(500).send(`Server error`);
    }
};

