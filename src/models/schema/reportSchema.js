const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    email  : {type: String, unique: true, required : true },
    totalScore  : {type: Number, required : true },

    question1 : {type: String,required : true },
    selectedAns1  : {type: String, required : true },
    level1 : {type: String, required : true },
    correctAns1 : {type: String, required : true },

    question2 : {type: String,required : true },
    selectedAns2  : {type: String, required : true },
    level2 : {type: String, required : true },
    correctAns2 : {type: String, required : true },

    question3 : {type: String,required : true },
    selectedAns3  : {type: String, required : true },
    level3 : {type: String, required : true },
    correctAns3 : {type: String, required : true },

    question4 : {type: String,required : true },
    selectedAns4  : {type: String, required : true },
    level4 : {type: String, required : true },
    correctAns4 : {type: String, required : true },

    question5 : {type: String,required : true },
    selectedAns5  : {type: String, required : true },
    level5 : {type: String, required : true },
    correctAns5 : {type: String, required : true },

    question6 : {type: String,required : true },
    selectedAns6  : {type: String, required : true },
    level6 : {type: String, required : true },
    correctAns6 : {type: String, required : true },

    question7 : {type: String,required : true },
    selectedAns7  : {type: String, required : true },
    level7 : {type: String, required : true },
    correctAns7 : {type: String, required : true },

    question8 : {type: String,required : true },
    selectedAns8  : {type: String, required : true },
    level8 : {type: String, required : true },
    correctAns8 : {type: String, required : true },

    question9 : {type: String,required : true },
    selectedAns9  : {type: String, required : true },
    level9 : {type: String, required : true },
    correctAns9 : {type: String, required : true },

    question10 : {type: String,required : true },
    selectedAns10  : {type: String, required : true },
    level10 : {type: String, required : true },
    correctAns10 : {type: String, required : true },

    question11 : {type: String,required : true },
    selectedAns11  : {type: String, required : true },
    level11 : {type: String, required : true },
    correctAns11 : {type: String, required : true },

    question12 : {type: String,required : true },
    selectedAns12  : {type: String, required : true },
    level12 : {type: String, required : true },
    correctAns12 : {type: String, required : true },

    question13 : {type: String,required : true },
    selectedAns13  : {type: String, required : true },
    level13 : {type: String, required : true },
    correctAns13 : {type: String, required : true },

    question14 : {type: String,required : true },
    selectedAns14  : {type: String, required : true },
    level14 : {type: String, required : true },
    correctAns14 : {type: String, required : true },

    question15 : {type: String,required : true },
    selectedAns15  : {type: String, required : true },
    level15 : {type: String, required : true },
    correctAns15 : {type: String, required : true },
})

module.exports = mongoose.model('reports',reportSchema);