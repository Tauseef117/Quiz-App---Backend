const report = require('../schema/reportSchema')

const insertReport = async(details)=>{
    try{
        let data = new report(details);
        let result = await data.save()
        return result;
    }
    catch (e){
        console.log(e);
        if(e.name === "ValidationError"){
            throw e.message;
        }
        else if (e.name === "MongoServerError"){
            throw "Candidate has already given the test on this technology. One can take test on same technology only once.";
        }
        else{
            throw e;
        }      
    }
}

module.exports = insertReport;