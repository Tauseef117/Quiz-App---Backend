const question = require('../schema/questionSchema')

const deleteQuestion = async(questionToDelete)=>{
    let data = await question.deleteOne(questionToDelete);

    if(data.deletedCount === 1){
        return data;
    }
    else{
        throw "The Question doesn't exist in DataBase. Please enter valid question to delete.";
    }   
}

module.exports = deleteQuestion;