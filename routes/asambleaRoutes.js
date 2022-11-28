const asambleaController = require('../controllers/asambleaController');
const express = require('express');
const api= express.Router();


api.post('/asamblea',asambleaController.createAsamblea);
api.get('/asamblea', asambleaController.getAsambleas);
module.exports=api;
