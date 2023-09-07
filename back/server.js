const express = require('express');
const mongoose = require('./config/connect.js');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const recetteRoute = require('./routes/recette.js');
const signRoute=require('./routes/sign.js');
const detoxRoute=require('./routes/detox.js');
const sweetRoute=require('./routes/sweet.js');


const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
//http://127.0.0.1:3000

app.use( '/recette' , recetteRoute );
app.use( '/detox' , detoxRoute );
app.use( '/sweet' , sweetRoute );
app.use( '/sign' , signRoute );


app.use( '/getimage' , express.static('./upload')  );


app.listen(  
    4000 
    ,
    ()=>{
        console.log('server work !!!!');
    }
    
);