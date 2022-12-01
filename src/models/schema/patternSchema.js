const mongoose = require('mongoose');

// For Nested Object Schema
const levelSchema =  new mongoose.Schema({
    total: {type: Number, required : true },
    basic  : {type: Number, required : true },
    intermediate  : {type: Number, required : true },
    advanced  : {type: Number, required : true },
})

const quizPatternSchema = new mongoose.Schema({
    email : {type: String, unique: true, required : true },
    javaScript : {type: levelSchema, required : true },
    java : {type: levelSchema, required : true },
    android : {type: levelSchema,required : true },
    python : {type: levelSchema,required : true }
})

module.exports = mongoose.model('quizPatterns',quizPatternSchema);