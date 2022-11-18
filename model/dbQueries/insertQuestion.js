const question = require('../schema/questionSchema')

const insertQuestion = async(details)=>{
    try{
        let data = new question(details);
        let result = await data.save()
        return result;
    }
    catch (e){
        if (e.name === "MongoServerError"){
            throw Error("This Question has been already entered before.");
        }
        else{
            throw e;
        }      
    }
}

module.exports = insertQuestion;