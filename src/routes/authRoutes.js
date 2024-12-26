const express = require('express');
const router = express.Router();
const { registerUser, loginUser, logoutUser } = require('../controllers/authController');
const { authenticateToken, isAdmin } = require('../middleware/authMiddleware');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', authenticateToken, logoutUser);
router.get('/check-admin', authenticateToken, isAdmin, (req, res) => {
    res.status(200).json({ message: 'Admin access granted' });
});

module.exports = router;