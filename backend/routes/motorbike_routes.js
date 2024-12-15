const express = require('express');
const {getMotorbike, createMotorBike, updateMotorbike} = require('../controller/motorbikeController');

const router = express.Router();

router.get('/:name', getMotorbike);
router.post('/', createMotorBike);
router.put('/:name', updateMotorbike);

module.exports = router;

