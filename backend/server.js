const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
require('dotenv').config();

const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Sample Route
app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server started on port ${PORT}`));
const collectionRoutes = require('./routes/collections');
const userRoutes = require('./routes/users');
// Use the routes (Add this after your middleware)
app.use('/api/collections', collectionRoutes);
app.use('/api/users', userRoutes);
app.use('/api/users', require('./routes/users'));