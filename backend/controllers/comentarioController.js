const comentario= require("../models/comentario");

const createComentario =(req,res)=>{
    const {autor,fecha,descripcion}=req.body;

    const newComentario= new comentario({
        autor,
        fecha,
        descripcion,

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
const updateComentario = (req,res) => {
    const { id } = req.params;
    comentario.findByIdAndUpdate(id, req.body, (err, comentario) => {
         if(err) {
            return res.status(400).send({message: "Error, no se ha podido obtener el comentario"})
         }
         if(!comentario){
            return res.status(404).send({message: "ERROR, no se ha encontrado el comentario que desea editar"})
         }
         return res.status(200).send(comentario)
    })
}
const getActaComent = (req, res) => {
    const { id } =req.params;
    comentario.findById(id).populate({ path: 'acta' }).exec((err, comentario) =>
    {
        if(err){
            return res.status(400).send({message: "Error, no se ha podido obtener el comentario"})
        }
        if(!comentario){
            return res.status(404).send({message: "ERROR, no se ha encontrado el comentario"})
         }
         return res.status(200).send(comentario)
    }) 
}

const deleteComentario = (req,res) => {
    const { id } = req.params;
    comentario.findByIdAndDelete(id, (err, comentario) => {
         if(err) {
            return res.status(400).send({message: "Error, no se ha podido eliminar el comentario"})
         }
         if(!comentario){
            return res.status(404).send({message: "ERROR, no se ha encontrado el comentario que desea eliminar"})
         }
         return res.status(200).send(comentario)
    })
}

module.exports={
    createComentario,
    getComentario,
    updateComentario,
    deleteComentario,
    getActaComent
}