const mongoose = require('mongoose')

function ConnectToDB(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log('Connected To DB');
    })
    .catch(err=>{
        console.log('Error Connecting To DB', err);
    })
}

module.exports = ConnectToDB;