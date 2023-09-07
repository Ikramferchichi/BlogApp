const express = require('express');

const router = express.Router();

const Detox = require('../models/detoxModel.js');

const multer = require('multer');

let filename = '';
const mystorage = multer.diskStorage(
    {
        destination: './upload',
        filename:( req , file , cb )=>{
            let date = Date.now();
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
    let detox = new Detox( dataFromPostman );
    detox.image = filename;
    detox.save()
          .then(
              (savedDetox)=>{
                  filename = '';
                  console.log(savedDetox);
                  res.send(savedDetox);
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
    let detox = new Detox( dataFromPostman );
  
    detox.save()
          .then(
              (savedDetox)=>{
                 
                  console.log(savedDetox);
                  res.send(savedDetox);
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
     
      Detox.find()
          .then(
              (allDetoxs)=>{
                  res.send(allDetoxs);
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
  
      Detox.findOne({ _id: myid })
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
       
       Detox.findByIdAndDelete( { _id: id } )
          .then(
              (deletedDetox)=>{
                  res.send(deletedDetox);
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
      Detox.findOneAndUpdate( 
          { _id: id },
          newData
      ) .then(
          (updatedDetox)=>{
              res.send(updatedDetox)
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
    const result= await Detox.findByIdAndUpdate(id,newData,options);
    res.status(200).json(result);
    }
    catch(err){
        res.status(500).json({msg:err})  
    }
})

module.exports = router;