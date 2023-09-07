const express = require('express');

const router = express.Router();

const Recette = require('../models/recetteModel.js');

const multer = require('multer');

let filename = '';
const mystorage = multer.diskStorage(
    {
        destination: './upload',
        filename:( req , file , cb )=>{
            let date = Date.now();
            //53453535345.jpg
            // image/png
            // [ 'image', 'png' ]
            let fl = date + '.' + file.mimetype.split('/')[1];
            cb(null, fl);
            filename = fl;
        } 
    }
);

const upload = multer({ storage: mystorage })

// ajout avec upload
router.post( '/create' , upload.any('image') , ( req , res )=>{
    let dataFromPostman = req.body;
    let recette = new Recette( dataFromPostman );
    recette.image = filename;
    recette.save()
          .then(
              (savedrecette)=>{
                  filename = '';
                  console.log(savedrecette);
                  res.send(savedrecette);
              }
          )
          .catch(
              (error)=>{
                  console.log(error);
                  res.send(error)
              }
          )
  } );
  
  //ajout sans upload
  

router.post( '/ajout'  , ( req , res )=>{
    let dataFromPostman = req.body;
    let recette = new Recette( dataFromPostman );
  
    recette.save()
          .then(
              (savedrecette)=>{
                 
                  console.log(savedrecette);
                  res.send(savedrecette);
              }
          )
          .catch(
              (error)=>{
                  console.log(error);
                  res.send(error)
              }
          )
  } );
  
  
  router.get( '/all' , (req, res)=>{
     
      Recette.find()
          .then(
              (allrecettes)=>{
                  res.send(allrecettes);
              }
          )
          .catch(
              (error)=>{
                  res.send(error);
              }
          )
  
  } )
  

  
  router.get('/getbyid/:id' , (req, res)=>{
  
      let myid = req.params.id;
  
      Recette.findOne({ _id: myid })
                  .then(
                      (art)=>{
                          res.send(art);
                      }
                  )
                  .catch(
                      (err)=>{
                          res.send(err)
                      }
                  )
  
  })
  
  
  router.delete( '/supprimer/:id' , (req , res)=>{
  
       let id = req.params.id;
       
       Recette.findByIdAndDelete( { _id: id } )
          .then(
              (deletedrecette)=>{
                  res.send(deletedrecette);
              }
          )
          .catch(
              (err)=>{
                  res.send(err);
              }
          )
  
  } )
  
  router.put( '/updat/:id' , (req , res)=>{
      let id = req.params.id;
      let newData = req.body;
      Recette.findOneAndUpdate( 
          { _id: id },
          newData
      ) .then(
          (updatedrecette)=>{
              res.send(updatedrecette)
          }
      )
      .catch(
          (err)=>{
              res.send(err)
          }
  
      )
  } )
  router.put("/update/:id",async (req,res)=>{
    try{
    const id=req.params.id;
    const newData=req.body;
    const options={new :true}
    const result= await Recette.findByIdAndUpdate(id,newData,options);
    res.status(200).json(result);
    }
    catch(err){
        res.status(500).json({msg:err})  
    }
})

module.exports = router;