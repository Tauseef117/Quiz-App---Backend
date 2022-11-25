const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    technology  : {type: String, required : true },
    difficulty  : {type: String, required : true },
    question : {type: String, unique: true, required : true },
    option1  : {type: String, required : true },
    option2 : {type: String, required : true },
    option3  : {type: String, required : true },
    option4 : {type: String, required : true },
    answer  : {type: String, required : true },
})

module.exports = mongoose.model('questions',questionSchema);