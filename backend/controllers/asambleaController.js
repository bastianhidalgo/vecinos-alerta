const asamblea=require('../models/asamblea');

const createAsamblea =(req,res) =>{
    const {sede,direccion,tema,descripcion,fecha,hora_inicio}=req.body;


    const newAsamblea =new asamblea({
        sede,
        direccion,
        tema,
        descripcion,
        fecha,
        hora_inicio
    });
    try {
        newAsamblea.save();
        res.status(202).json({
            message: "asamblea creada correctamente"
        })
    }
    catch (error) {
        res.status(400).json({
            message: 'No se pudo registrar la asamblea'
        })
    }
}

const getAsambleas = (req, res) => {
    asamblea.find({}, (err, asambleas) => {
        if (err) {
            return res.status(400).send({ message: "No se han podido obtener las asambleas" })
        }
        return res.status(200).send(asambleas)
    })
}

module.exports={
    createAsamblea,
    getAsambleas
}
