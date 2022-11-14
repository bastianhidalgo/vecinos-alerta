const actaController = require('../controllers/actaController');
const express = require('express');
const api= express.Router();


api.post('/acta',actaController.createActa);
api.get('/acta', actaController.getActas);
module.exports=api;