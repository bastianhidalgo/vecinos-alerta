const comentarioController = require('../controllers/comentarioController');
const vecinoController = require('../controllers/vecinoController');
const actaController = require('../controllers/actaController');
const asignarRolController = require('../controllers/asignarRolController');
const express = require('express');

const api= express.Router();


api.post('/vecino',vecinoController.createVecino);
api.get('/vecinos', vecinoController.getVecinos);
api.put('/vecino/update/:id',vecinoController.updateVecinos);
api.delete('/vecinos/delete/:id', vecinoController.deleteVecino);
api.put('/asignarRol/:id', asignarRolController.asignarRol);
api.post('/comentario',comentarioController.createComentario);
api.get('/comentarios', comentarioController.getComentario);
api.delete('/comentario/delete/:id', comentarioController.deleteComentario);
api.put('/comentario/update/:id', comentarioController.updateComentario);
api.get('/comentario/fin/:id', comentarioController.getActaComent);
api.post('/acta',actaController.createActa);
api.get('/actas', actaController.getActas);
api.put('/acta/update/:id', actaController.updateActa);
api.delete('/acta/delete/:id', actaController.deleteActa);

module.exports=api;