const express = require('express');
const router = express.Router();
const multer = require('multer');
const motorbikeController = require('../controllers/motorbikeController');

const storage = multer.diskStorage({
    destination: 'public/uploads/',
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

const { authenticateToken, isAdmin } = require('../middleware/authMiddleware');

// Public routes
router.get('/', motorbikeController.getMotorbikes);
router.get('/:id', motorbikeController.getMotorbikeById);

// Admin only routes
router.post('/', authenticateToken, isAdmin, upload.single('image'), motorbikeController.createMotorbike);
router.put('/:id', authenticateToken, isAdmin, upload.single('image'), motorbikeController.updateMotorbike);
router.delete('/:id', authenticateToken, isAdmin, motorbikeController.deleteMotorbike);
module.exports = router;