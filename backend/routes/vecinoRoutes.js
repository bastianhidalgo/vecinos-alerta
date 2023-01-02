const comentarioController = require('../controllers/comentarioController');
const vecinoController = require('../controllers/vecinoController');
const pdfController = require('../controllers/pdfController');
const asignarRolController = require('../controllers/asignarRolController');
const asambleaController = require('../controllers/asambleaController');
const express = require('express');

const api= express.Router();

//rutas bastian
api.post('/vecino',vecinoController.createVecino);
api.get('/vecinos', vecinoController.getVecinos);
api.get('/vecinos/search/:id', vecinoController.getVecino);
api.put('/vecino/update/:id',vecinoController.updateVecino);
api.delete('/vecinos/delete/:id', vecinoController.deleteVecino);
api.put('/asignarRol/:id', asignarRolController.asignarRol);
//rutas camilo
api.post('/comentario',comentarioController.createComentario);
api.get('/comentarios', comentarioController.getComentario);
api.delete('/comentario/delete/:id', comentarioController.deleteComentario);
api.put('/comentario/update/:id', comentarioController.updateComentario);
api.get('/comentario/fin/:id', comentarioController.getActaComent);
//rutas andres
api.post('/acta',pdfController.create);
api.get('/actas', pdfController.get);
api.put('/acta/update/:id', pdfController.update);
api.delete('/acta/delete/:id', pdfController.remove);
//rutas alexander
api.post('/asamblea',asambleaController.createAsamblea);
api.get('/asambleas', asambleaController.getAsambleas);
api.put("/asamblea/update/:id",asambleaController.updateAsamblea);
api.delete('/asamblea/delete/:id',asambleaController.deleteAsamblea);
module.exports=api;