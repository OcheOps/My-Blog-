const mongoose = require('mongoose');
const CONNECTION_STRING = process.env.CONNECTION_STRING;

// setup connection to mongo
mongoose.connect(CONNECTION_STRING);
const db = mongoose.connection;

// recover from errors
db.on('error', console.error.bind(console, 'connection error:'));