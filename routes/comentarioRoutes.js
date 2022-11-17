const comentarioController = require('../controllers/comentarioController');
const express = require('express');
const api= express.Router();


api.post('/comentario',comentarioController.createComentario);
api.get('/comentario', comentarioController.getComentario);
module.exports=api;