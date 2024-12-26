const mongoose = require('mongoose');
const Motorbike = require('./src/models/Motorbike');

mongoose.connect('mongodb+srv://phatluong2509:Cs1024@cluster0.jvafc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB Atlas');
    insertSampleData();
}).catch((error) => {
    console.error('Error connecting to MongoDB Atlas', error);
});

async function insertSampleData() {
    const sampleMotorbikes = [
        { name: 'Yamaha NVX', brand: 'Yamaha', cc: 155, price: 3000, description: 'A great motorbike', imageUrl: '/uploads/nvx.png' },
        { name: 'Honda SH', brand: 'Honda', cc: 160, price: 3500, description: 'A stylish motorbike', imageUrl: '/uploads/sh160.png' },
        { name: 'Suzuki GSX-R150', brand: 'Suzuki', cc: 150, price: 3200, description: 'A sporty motorbike', imageUrl: '/uploads/gsx-r150.png' },
        { name: 'Kawasaki Ninja 250', brand: 'Kawasaki', cc: 250, price: 5000, description: 'A powerful motorbike', imageUrl: '/uploads/ninja250.png' },
        { name: 'Ducati Panigale V4', brand: 'Ducati', cc: 1103, price: 20000, description: 'A high-performance motorbike', imageUrl: '/uploads/panigalev4.png' },
        { name: 'BMW S1000RR', brand: 'BMW', cc: 999, price: 19000, description: 'A superbike', imageUrl: '/uploads/s1000rr.png' }
    ];

    try {
        await Motorbike.insertMany(sampleMotorbikes);
        console.log('Sample data inserted successfully');
        mongoose.connection.close();
    } catch (error) {
        console.error('Error inserting sample data:', error);
        mongoose.connection.close();
    }
}