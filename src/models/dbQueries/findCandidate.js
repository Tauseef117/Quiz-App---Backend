const candidate = require('../schema/candidateSchema')

const findCandidate = async(email)=>{
    let data = await candidate.find(email,{_id:0,__v:0});
    if(data.length === 0){
        throw Error("Details using this email doesn't exist. Please connect with Support Team.");
    }
    else{
        return data;
    }   
}

module.exports = findCandidate;