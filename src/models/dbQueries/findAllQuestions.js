const question = require('../schema/questionSchema')

const findAllQuestions = async()=>{
    let data = await question.find();
    if(data.length === 0){
        throw Error("Admin has not entered any questions.");
    }
    else{
        return data;
    }   
}

module.exports = findAllQuestions;