const candidate = require('../schema/candidateSchema')

const updateCandidate = async(email, detailsToUpdate)=>{
    try{
        let data = await candidate.updateOne(email,{ $set: detailsToUpdate});
        console.log(data)
        if(data.matchedCount === 0){
            throw Error("Details using this email doesn't exist. Please connect with Support Team.");
        }
        else if(data.modifiedCount === 0 ){
            throw Error("Update Failed. Attribute contains same value in DataBase.");
        }
        else{
            return data;
        } 
    }
    catch(e){
        throw e;
    }
      
}

module.exports = updateCandidate;
