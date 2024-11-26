require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const protectedRoutes = require('./routes/protected');


const app = express();
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use('/auth', authRoutes);
app.use('/api', protectedRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

console.log('Mongo URI:', process.env.MONGO_URI);
console.log('JWT Secret:', process.env.JWT_SECRET);
console.log('Port:', process.env.PORT);

