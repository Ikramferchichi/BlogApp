const express = require('express');

const router = express.Router();

const Sweet = require('../models/sweetModel.js');

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
    let sweet = new Sweet( dataFromPostman );
    sweet.image = filename;
    sweet.save()
          .then(
              (savedSweet)=>{
                  filename = '';
                  console.log(savedSweet);
                  res.send(savedSweet);
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
    let sweet = new Sweet( dataFromPostman );
  
    sweet.save()
          .then(
              (savedSweet)=>{
                 
                  console.log(savedSweet);
                  res.send(savedSweet);
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
     
      Sweet.find()
          .then(
              (allSweets)=>{
                  res.send(allSweets);
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
  
      Sweet.findOne({ _id: myid })
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
       
       Sweet.findByIdAndDelete( { _id: id } )
          .then(
              (deletedSweet)=>{
                  res.send(deletedSweet);
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
      Sweet.findOneAndUpdate( 
          { _id: id },
          newData
      ) .then(
          (updatedSweet)=>{
              res.send(updatedSweet)
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
    const result= await Sweet.findByIdAndUpdate(id,newData,options);
    res.status(200).json(result);
    }
    catch(err){
        res.status(500).json({msg:err})  
    }
})

module.exports = router;