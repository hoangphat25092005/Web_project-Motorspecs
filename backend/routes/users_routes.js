const express = require('express');
const {User_register, User_login} = require(`../controller/user_controller`);

const router = express.Router();

router.post('/register', User_register);
router.post('/login', User_login);

module.exports = router;
