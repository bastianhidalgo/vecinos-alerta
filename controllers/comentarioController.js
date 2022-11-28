const comentario= require("../models/comentario");

const createComentario =(req,res)=>{
    const {autor,fecha,descripcion}=req.body;

    const newComentario= new comentario({
        autor,
        fecha,
        descripcion


    });
    try {
        newComentario.save();
        res.status(202).json({
            message: "comentario registrado correctamente"
        })
    }
    catch (error) {
        res.status(400).json({
            message: 'No se pudo registrar comentario'
        })
    }
}
const getComentario = (req, res) => {
    comentario.find({}, (err, comentario) => {
        if (err) {
            return res.status(400).send({ message: "No se han podido obtener comentario" })
        }
        return res.status(200).send(comentario)
    })
}
module.exports={
    createComentario,
    getComentario
}
