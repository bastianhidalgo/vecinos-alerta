const vecinoController = require('../controllers/vecinoController');
const express = require('express');
const api= express.Router();


api.post('/vecino',vecinoController.createVecino);
api.get('/vecinos', vecinoController.getVecinos);
module.exports=api;