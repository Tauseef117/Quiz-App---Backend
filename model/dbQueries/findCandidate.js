const candidate = require('../schema/candidateSchema')

const findCandidate = async(email)=>{
    let data = await candidate.find(email);
    if(data.length === 0){
        throw "Details using this email doesn't exist. Please register and visit Login Page.";
    }
    else{
        return data;
    }   
}

module.exports = findCandidate;