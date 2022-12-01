const pattern = require('../schema/patternSchema')

const insertPattern = async(patternDetails)=>{
    try{
        let data = new pattern(patternDetails);
        let result = await data.save()
        return result;
    }
    catch (e){
        if (e.name === "MongoServerError"){
            throw Error("Pattern has already been set for the candidate.");
        }
        else{
            throw e;
        }      
    }
}

module.exports = insertPattern;