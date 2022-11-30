const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
    name  : {type: String, required : true },
    email : {type: String, unique: true, required : true },
    phone : {type: Number, unique: true, required : true },
    status  : {type: String, default : 'pending' },
    patternSet  : {type: Boolean, default : false },
    password : {type: String, required : true },
})

module.exports = mongoose.model('candidates',candidateSchema);