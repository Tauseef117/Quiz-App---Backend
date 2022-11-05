const report = require('../schema/reportSchema')

const findReport = async(params)=>{
    let data = await report.find(params);
    if(data.length === 0){
        throw "Candidate using this Email ID hasn't given any Test on mentioned Technology.";
    } 
    else{
        return data;
    }   
}

module.exports = findReport;