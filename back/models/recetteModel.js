const mongoose = require('mongoose');
const Recette = mongoose.model( 'recette' , {

   Name: String,
   Categ: String,
   Recette: String,
   Img: String


} );

module.exports = Recette;
