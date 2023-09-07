
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const express = require('express');

const router = express.Router();

const User = require('../models/signupMode.js');

const multer = require('multer');

// Importer le modèle User


router.get('/user' , (req, res)=>{
     
  User.find()
      .then(
          (allusers)=>{
              res.send(allusers);
          }
      )
      .catch(
          (error)=>{
              res.send(error);
          }
      )

} )

// Route pour l'inscription (sign up)
router.post('/signup', async (req, res) => {
  try {
    const { Email, Password } = req.body;

    // Vérifier si l'utilisateur existe déjà
    const existingUser = await User.findOne({ Email });

    if (existingUser) {
      return res.status(400).json({ message: 'L\'utilisateur existe déjà.' });
    }

    // Hacher le mot de passe
    const hashedPassword = await bcrypt.hash(Password, 10);

    // Créer un nouvel utilisateur
    const newUser = new User({
      Email,
      Password: hashedPassword,
    });

    await newUser.save();
  
    res.status(201).json({ message: 'Inscription réussie.'});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur serveur.' });
  }
});

// Route pour la connexion (sign in)
router.post('/signin', async (req, res) => {
  try {
    const { Email, Password } = req.body;

    // Vérifier si l'utilisateur existe
    const user = await User.findOne({ Email });

    if (!user) {
      return res.status(401).json({ message: 'L\'utilisateur n\'existe pas.' });
    }

    // Vérifier le mot de passe
    const isPasswordValid = await bcrypt.compare(Password, user.Password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Mot de passe incorrect.' });
    }

    // Créer un jeton d'authentification
    const token = jwt.sign({ userId: user._id }, 'votre_secret_key_secrete', { expiresIn: '1h' });

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur serveur.' });
  }
});

module.exports=router;
