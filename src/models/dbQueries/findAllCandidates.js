const candidate = require('../schema/candidateSchema')

const findAllCandidates = async()=>{
    let data = await candidate.find({},{_id:0,__v:0});
    if(data.length === 0){
        throw Error("No Candidate has registered for the test yet.");
    }
    else{
        return data;
    }   
}

module.exports = findAllCandidates;