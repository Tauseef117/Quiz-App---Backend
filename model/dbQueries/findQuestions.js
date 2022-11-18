const question = require('../schema/questionSchema')

const findQuestions = async(technology)=>{
    let data = await question.find(technology);
    if(data.length === 0){
        throw Error("Admin has not entered questions on this technology.");
    }
    else{
        return data;
    }   
}

module.exports = findQuestions;