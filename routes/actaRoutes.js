const actaController = require('../controllers/actaController');
const express = require('express');
const api= express.Router();


api.post('/acta',actaController.createActa);
api.get('/acta', actaController.getActas);
api.put('/acta', actaController.updateActa);
api.delete('/acta', actaController.deleteActa);
module.exports=api;