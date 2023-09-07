const mongoose = require('mongoose');
const Detox = mongoose.model( ' Detox' , {

   Name: String,
   Categ: String,
   Recette: String,
   Img: String


} );

module.exports = Detox;