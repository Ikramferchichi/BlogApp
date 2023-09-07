const mongoose = require('mongoose');
const Sweet = mongoose.model( ' Sweet' , {

   Name: String,
   Categ: String,
   Recette: String,
   Img: String


} );

module.exports =Sweet;