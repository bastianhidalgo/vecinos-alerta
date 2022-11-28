const acta= require("../models/acta");
const vecino= require("../models/vecino");

const createActa =(req,res)=>{
    const {tema,descripcion,fecha,fecha_termino}=req.body;
    if(!rol == "secretario"){
        return res.status(400).send({ message: "Permiso denegado"})
    }
    const newActa= new acta({
        tema,
        descripcion,
        fecha,
        fecha_termino


    });
    try {
        newActa.save();
        res.status(202).json({
            message: "acta creada correctamente"
        })
    }
    catch (error) {
        res.status(400).json({
            message: 'No se pudo crear el acta'
        })
    }
}
const getActas = (req, res) => {
    acta.find({}, (err, acta) => {
        if (err) {
            return res.status(400).send({ message: "No se han podido obtener las actas" })
        }
        return res.status(200).send(acta)
    })
}
const updateActa = (req, res) => {
    const { id } = req.params;
    acta.findByIdAndUpdate(id, req.body,(err, acta) =>{
        if(err){
            return res.status(400).send({ message: "No se ha podido modificar la acta"})
        }
        if(!acta){
            return res.status(404).send({ message: "No se encontro esa acta"})
        }
        return res.status(201).send(acta)
    })
}

const deleteActa = (req, res) => {
    const { id } = req.params;
    acta.findByIdAndDelete(id, (err, acta) =>{
        if(err){
            return res.status(400).send({ message: "No se ha podido eliminar el acta"})
        }
        if(!acta){
            return res.status(404).send({ message: "No se encontro esa acta"})
        }
        return res.status(201).send(acta)
    })
}
module.exports={
    createActa,
    getActas,
    updateActa,
    deleteActa
}