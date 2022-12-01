const report = require('../schema/reportSchema')

const insertReport = async(details)=>{
    try{
        let data = new report(details);
        let result = await data.save()
        return result;
    }
    catch (e){
        if (e.name === "MongoServerError"){
            throw Error("Candidate has already given the test.");
        }
        else{
            throw e;
        }      
    }
}

module.exports = insertReport;