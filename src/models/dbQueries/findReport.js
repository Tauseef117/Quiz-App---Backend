const report = require('../schema/reportSchema')

const findReport = async(params)=>{
    let data = await report.find(params,{_id:0,__v:0});
    if(data.length === 0){
        throw Error("Candidate using this Email ID hasn't given any Test.");
    } 
    else{
        return data;
    }   
}

module.exports = findReport;