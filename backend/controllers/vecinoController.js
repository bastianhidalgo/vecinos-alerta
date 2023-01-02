const vecino=require('../models/vecino');
const { useRegexCorreo,useRegexNombre,useRegexTelefono } = require('../utils/util');

const createVecino =(req,res) =>{
    const {nombre,apellido,fechaNacimiento,direccion,telefono,correo,fecha_inicio_rol,fecha_termino_rol}=req.body;

    const newVecino =new vecino({
        nombre,
        apellido,
        fechaNacimiento,
        direccion,
        telefono,
        correo,
        rol:'vecino',
        fecha_inicio_rol,
        fecha_termino_rol
    });
    try {
        if ((req.body.fecha_inicio_rol) > (req.body.fecha_termino_rol)) {
            return res.status(406).json({
              message: 'fecha de termino no puede ser antes de la fecha de inicio'
            });
          }
          if(!useRegexCorreo(req.body.correo)){
            return res.status(406).json({
                message: 'Correo invalido'
          });
        }
        if(!useRegexNombre(req.body.nombre)){
            return res.status(406).json({
                message: 'nombre invalido'
          });
        }
        if(!useRegexNombre(req.body.apellido)){
            return res.status(406).json({
                message: 'apellido invalido'
          });
        }
        if(!useRegexTelefono(req.body.telefono)){
            return res.status(406).json({
                message: 'telefono invalido'
          });
        }
        newVecino.save();
        res.status(202).json({
            message: "Vecino creado correctamente", vecino:newVecino,status:200

        })


    }
    catch (error) {
        res.status(400).json({
            message: 'No se pudo registrar el vecino'
        })
    }
}

const getVecinos = (req, res) => {
    vecino.find({}, (err, vecinos) => {
        if (err) {
            return res.status(400).send({ message: "No se han podido obtener los vecinos" })
        }
        return res.status(200).send(vecinos)
    })
}
const updateVecino = (req, res) => {
    const { id } = req.params;
    vecino.findByIdAndUpdate(id, req.body, (err, vecinos) => {
        if (err) {
            return res.status(400).send({ message: "No se ha podido modificar el vecino" })
        }
        if (!vecino) {
            return res.status(404).send({ message: "No se ha encontrado el vecino" })
        }
        return res.status(200).send(vecinos)
    })
}

const deleteVecino = (req, res) => {
    const { id } = req.params;
    vecino.findByIdAndDelete(id, (err, vecinos) => {
        if (err) {
            return res.status(400).send({ message: "No se ha podido eliminar el vecino" })
        }
        if (!vecino) {
            return res.status(404).send({ message: "No se ha encontrado el vecino" })
        }
        return res.status(200).send(vecinos)
    })
}
const getVecino = (req, res) => {
    const { id } = req.params;
    vecino.findById(id, (err, vecinos) => {
        if (err) {
            return res.status(400).send({ message: 'Error al obtener el vecino' });
        }
        if (!vecino) {
            return res.status(404).send({ message: 'No se encontró el vecino' });
        }
        return res.status(200).send(vecinos);
    })
}

module.exports={
    createVecino,
    getVecinos,
    updateVecino,
    deleteVecino,
    getVecino
}