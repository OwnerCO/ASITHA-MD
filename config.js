const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "l3lBXT5C#ewgsWiRiy6p475xNt6mCvf1Kx03rRNTHTlv27sqsmA4",
MONGODB: process.env.MONGODB || "mongodb+srv://ownerco:ownerco@gifted.h5i4ndp.mongodb.net/?retryWrites=true&w=majority",//enter mongo db url
};
