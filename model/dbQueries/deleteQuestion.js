const question = require('../schema/questionSchema')

const deleteQuestion = async(questionID)=>{
    let data = await question.deleteOne(questionID);

    if(data.deletedCount === 1){
        return data;
    }
    else{
        throw "The Question doesn't exist in DataBase. Please enter valid question to delete.";
    }   
}

module.exports = deleteQuestion;