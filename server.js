const express = require('express');
const app = express();
const mongoose = require('mongoose');

const cors=require("cors");
const generator = require('generate-password');

require('dotenv').config()
const port = process.env.PORT || 5555;


// Importing local modules:
require('./src/services/dbConnect');
const cryptr = require('./src/services/passwordCryptor');

const insertCandidate = require('./src/models/dbQueries/insertCandidate')
const findCandidate = require('./src/models/dbQueries/findCandidate')
const findAllCandidates = require('./src/models/dbQueries/findAllCandidates')
const updateCandidate = require('./src/models/dbQueries/updateCandidate')

const insertQuestion = require('./src/models/dbQueries/insertQuestion')
const findAllQuestions = require('./src/models/dbQueries/findAllQuestions')
const deleteQuestion = require('./src/models/dbQueries/deleteQuestion')

const insertReport = require('./src/models/dbQueries/insertReport')
const findReport = require('./src/models/dbQueries/findReport')

const findAllTestees = require('./src/models/dbQueries/findAllTestees')

const sendMail = require('./src/services/sendMail')

const insertPattern= require('./src/models/dbQueries/insertPattern')
const findPattern= require('./src/models/dbQueries/findPattern')

// Middleware CORS Config:
const corsOptions ={
   origin:'*', 
   credentials:true,           
   optionSuccessStatus:200,
}


// Middlewares:
app.use(cors(corsOptions))
app.use(express.json());


// ROUTING: Endpoint is http://localhost:5555

// Used in registration Page
app.post("/insertCandidate", async (req, resp) => {
    try{
        const randomPass = generator.generate({
            length: 10,
            numbers: true
        })
        console.log(randomPass)
        const decryptedPass = cryptr.encrypt(randomPass);
        req.body.password = decryptedPass;

        console.log(req.body)
        const result = await insertCandidate(req.body);
        resp.send({success: true, document : result});
        console.log("Candidate successfully Registered and added to DataBase.")
    }
    catch(e){
        resp.status(400);
        resp.send({success: false, errorMsg: e.message});
        console.log(e.message)
    }
});


// Used in Login Page
app.get("/findCandidate/:email", async (req, resp) => {
    try{
        console.log(req.params)
        const result = await findCandidate(req.params);
        resp.send({success: true, document : result});
        console.log("Candidate details found in DataBase.")
    }
    catch(e){
        resp.status(400);
        resp.send({success: false, errorMsg: e.message});
        console.log(e.message)
    }  
});


// Used in Login Page
app.get("/findAllCandidates", async (req, resp) => {
    try{
        const result = await findAllCandidates();
        resp.send({success: true, document : result});
        console.log("Showing all the Candidates details from the DataBase.")
    }
    catch(e){
        resp.status(400);
        resp.send({success: false, errorMsg: e.message});
        console.log(e.message)
    }  
});


// Used in Login Page
app.patch("/updateCandidate/:email", async (req, resp) => {
    try{
        console.log(req.params)
        console.log(req.body)
        const result = await updateCandidate(req.params,req.body);
        resp.send({success: true, document : result});
        console.log("Candidate details successfully updated in DataBase.")
    }
    catch(e){
        resp.status(400);
        resp.send({success: false, errorMsg: e.message});
        console.log(e.message)
    }  
});


// Used in Admin Question Entering Page
app.post("/insertQuestion", async (req, resp) => {
    try{
        console.log(req.body)
        const result = await insertQuestion(req.body);
        resp.send({success: true, document : result});
        console.log("Question successfully added to DataBase.")
    }
    catch(e){
        resp.status(400);
        resp.send({success: false, errorMsg: e.message});
        console.log(e.message)
    }  
});


// Used in Candidate Assessment Page and in Admin Question Viewing Page
app.get("/findAllQuestions", async (req, resp) => {
    try{
        const result = await findAllQuestions();
        resp.send({success: true, document : result});
        console.log("Showing all the Questions details from the DataBase.")
    }
    catch(e){
        resp.status(400);
        resp.send({success: false, errorMsg: e.message});
        console.log(e.message)
    }
});


// Used in Admin Question Viewing Page for admin to delete questions
app.delete("/deleteQuestion/:questionID", async (req, resp) => {
    try{
        console.log(req.params)
        const result = await deleteQuestion({"_id": mongoose.Types.ObjectId(req.params.questionID)});
        resp.send({success: true, document : result});
        console.log("Questions successfully deleted from DataBase.")
    }
    catch(e){
        resp.status(400);
        resp.send({success: false, errorMsg: e.message});
        console.log(e.message)
    }
})


// Used in Candidate Assessment Page 
app.post("/insertReport", async (req, resp) => {
    try{
        console.log(req.body)
        const result = await insertReport(req.body);
        resp.send({success: true, document : result});
        console.log("Report of candidate successfully added to DataBase.")
    }
    catch(e){
        resp.status(400);
        resp.send({success: false, errorMsg: e.message});
        console.log(e.message)
    }
});


// Used in Admin Report Second Page
app.get("/findReport/:email", async (req, resp) => {
    try{
        console.log(req.params)
        const result = await findReport(req.params);
        resp.send({success: true, document : result});
        console.log("Candidate Test report found in Database.")
    }
    catch(e){
        resp.status(400);
        resp.send({success: false, errorMsg: e.message});
        console.log(e.message)
    }
});


// Used in Admin Report First Page
app.get("/findAllTestees", async (req, resp) => {
    try{
        const result = await findAllTestees();
        resp.send({success: true, document : result});
        console.log("Testees details found in database.")
    }
    catch(e){
        resp.status(400);
        resp.send({success: false, errorMsg: e.message})
        console.log(e.message)
    }
});


// Used To Send the Test Link via E-Mail 
app.post("/sendMail", async (req, resp) => {
    try{
        console.log(req.body)
        await sendMail(req.body.email)
        const msg = "Successfully sent Email with Test link and Password to the candidate.";
        resp.send({success: true, message : msg});
        console.log(msg)
    }
    catch(e){
        console.log(e.message)
        const msg = "Unable to send Test Link Email to the candidate.";
        resp.status(400);
        resp.send({success: false, errorMsg: msg});
        console.log(msg)
    }
});


// Used To Send the Test Link via E-Mail 
app.post("/insertPattern", async (req, resp) => {
    try{
        console.log(req.body)
        const result = await insertPattern(req.body);
        resp.send({success: true, document : result});
        console.log("Pattern successfully set and added to DataBase.")
    }
    catch(e){
        resp.status(400);
        resp.send({success: false, errorMsg: e.message});
        console.log(e.message)
    }   
});


// Used in Login Page
app.get("/findPattern/:email", async (req, resp) => {
    try{
        console.log(req.params)
        const result = await findPattern(req.params);
        resp.send({success: true, document : result});
        console.log("Pattern found in database.")
    }
    catch(e){
        resp.status(400);
        resp.send({success: false, errorMsg: e.message});
        console.log(e.message)
    }
});


// Used in Login Page
app.post("/authenticateCandidate", async (req, resp) => {
    try{
        console.log(req.body)
        const result = await findCandidate({email : req.body.email});
        if(!(req.body.password === cryptr.decrypt(result[0].password))){
            throw Error("Password Doesn't Match")
        }
        resp.send({success: true, document : result});
        console.log("Candidate is successfully authenticated and can go to next page.")
    }
    catch(e){
        resp.status(400);
        resp.send({success: false, errorMsg: e.message});
        console.log(e.message)
    }  
});


// Start the server at port 5555
app.listen(port, () => {
    console.log('Listening on port ' + port);
});