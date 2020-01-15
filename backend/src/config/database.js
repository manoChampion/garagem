// Import the mongoose module
const mongoose = require('mongoose');

// Set up default mongoose connection
const mongoDB = 'mongodb://127.0.0.1/garagem';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

// Configuring Indexes
mongoose.set('useCreateIndex', true);

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connecion errors)
db.on('error', console.error.bind(console, 'MongoDB connection error: '));