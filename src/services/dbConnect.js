const mongoose = require('mongoose');

const config = require('../config/config')
const mongoUrl = `mongodb://${config.database.host}:${config.database.port}/${config.database.db}`;

mongoose.connect(mongoUrl)
.then(() => console.log("Successfully connected to MongoDB DataBase"))
.catch(() => console.log("Failed to connect with MongoDB DataBase"))