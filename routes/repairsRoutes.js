const express = require('express');
const router = express.Router();

//Controler
const { getAllRepairs, createRepair } = require('../controlers/repairsControler');


//endpoints
router.get('/', getAllRepairs);

router.post('/', createRepair);

module.exports = {repairsRouter: router};