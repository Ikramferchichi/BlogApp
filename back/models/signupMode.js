const mongoose = require('mongoose');
const User = mongoose.model( 'user' , {

   Name: String,
   Email: String,
   Password: String,
   RepeatP: String


} );

module.exports = User;