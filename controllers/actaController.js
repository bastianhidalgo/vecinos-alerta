const acta= require("../models/acta");

const createActa =(req,res)=>{
    const {tema,descripcion,fecha,hora_inicio,hora_termino}=req.body;

    const newActa= new acta({
        tema,
        descripcion,
        fecha,
        hora_inicio,
        hora_termino


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
module.exports={
    createActa,
    getActas
}