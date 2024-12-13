const express = require('express');
const {getMotorbike, createMotorbike, updateMotorbike} = require('../controller/motorbikeController');
const router = express.Router();

router.get('/:name', getMotorbike);
router.post('/', createMotorbike);
router.put('/:name', updateMotorbike);

module.exports = router;

