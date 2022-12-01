const Cryptr = require('cryptr');
const cryptr = new Cryptr(process.env.SECRET_KEY);

const generator = require('generate-password');

function generatePassword(){
    const randomGenratedPassword = generator.generate({
        length: 10,
        numbers: true
    })
    console.log(randomGenratedPassword)
    return randomGenratedPassword;
}

function encryptPassword(plainPassword){
    return cryptr.encrypt(plainPassword);
}

function decryptPassword(encryptedPassword){
    return cryptr.decrypt(encryptedPassword)
}


module.exports = { generatePassword, encryptPassword, decryptPassword }