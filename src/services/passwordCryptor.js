const Cryptr = require('cryptr');
const cryptr = new Cryptr(process.env.SECRET_KEY);

module.exports = cryptr