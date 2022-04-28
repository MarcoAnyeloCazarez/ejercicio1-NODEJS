const express = require('express');
const router = express.Router();    //Se usa router para vincular los routes a la app principal

//Controler
const { getAllUsers, createUser } = require('../controlers/usersControler') 

//Endpoints
router.get('/', getAllUsers);

router.post('/', createUser);

module.exports = { usersRouter: router };