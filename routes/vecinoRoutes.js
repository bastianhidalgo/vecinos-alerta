const vecinoController = require('../controllers/vecinoController');
const express = require('express');
const api= express.Router();


api.post('/vecino',vecinoController.createVecino);
api.get('/vecinos', vecinoController.getVecinos);
api.put('/vecino/update/:id',vecinoController.updateVecinos);
api.delete('/vecinos/delete/:id', vecinoController.deleteVecino);
module.exports=api;