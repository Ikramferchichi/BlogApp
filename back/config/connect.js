// 1
const mongoose = require('mongoose');

// 2
mongoose.connect( 'mongodb+srv://ikramferchichi:ikram1234@ikramferchichi.nva05ks.mongodb.net/?retryWrites=true&w=majority' )
    .then(
        ()=>{
            console.log('connected to db !');
        }
    )
    .catch(
        ()=>{
            console.log('error in connection');
        }
    )

// 3
module.exports = mongoose;