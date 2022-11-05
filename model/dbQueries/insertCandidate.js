const candidate = require('../schema/candidateSchema')

const insertCandidate = async(details)=>{
    try{
        let data = new candidate(details);
        let result = await data.save()
        return result;
    }
    catch (e){
        console.log(e);
        if(e.name === "ValidationError"){
            throw e.message;
        }
        else if (e.name === "MongoServerError"){
            throw "Candidate has already registered using this creds. Please enter new Email ID and Mobile Number.";
        }
        else{
            throw e;
        }      
    }
}

module.exports = insertCandidate;


