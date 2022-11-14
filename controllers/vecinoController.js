const vecino=require('../models/vecino');

const createVecino =(req,res) =>{
    const {nombre,apellido,fechaNacimiento,direccion,telefono,correo}=req.body;

    const newVecino =new vecino({
        nombre,
        apellido,
        fechaNacimiento,
        direccion,
        telefono,
        correo
    });
    try {
        newVecino.save();
        res.status(202).json({
            message: "vecino creado correctamente"
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

module.exports={
    createVecino,
    getVecinos
}