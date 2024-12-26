const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const motorbikeRoutes = require('./routes/motorbikeRoutes');
const { authenticateToken, isAdmin } = require('./middleware/authMiddleware');

const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect('mongodb+srv://24560010:200624@clusterweb.j0f9p.mongodb.net/?retryWrites=true&w=majority&appName=ClusterWeb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB Atlas');
}).catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));

// Mount routes
app.use('/api/auth', authRoutes);
app.use('/api/motorbikes', motorbikeRoutes);

// Main page routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/signup.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/login2.html'));
});

app.get('/homepage', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/homepage6.html'));
});

// Add isAdmin middleware to admin route
app.get('/admin', authenticateToken, isAdmin, (req, res) => {
    res.sendFile(path.join(__dirname, '../public/admin.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// 404 handler
app.use((req, res) => {
    res.status(404).send('Page not found');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;