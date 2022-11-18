const report = require('../schema/reportSchema')

const findAllTestees = async()=>{
    let data = await report.find({},{"email":1,"technology":1,"totalScore":1, _id:0});
    if(data.length === 0){
        throw Error("No Candidate has taken the test yet.");
    } 
    else{
        return data;
    }   
}

module.exports = findAllTestees;