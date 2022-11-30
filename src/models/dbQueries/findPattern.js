const pattern = require('../schema/patternSchema')

const findPattern = async(email)=>{
    let data = await pattern.find(email,{_id:0,__v:0});
    if(data.length === 0){
        throw Error("Pattern is not yet set for this email.");
    }
    else{
        return data;
    }   
}

module.exports = findPattern;