const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/nodeJsProject")
.then(() => console.log("Successfully connected to MongoDB DataBase"))
.catch(() => console.log("Failed to connect with MongoDB DataBase"))