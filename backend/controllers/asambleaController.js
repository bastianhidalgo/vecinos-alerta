const asamblea=require('../models/asamblea');

const createAsamblea =(req,res) =>{
    const {sede,direccion,tema,descripcion,fecha,hora_inicio}=req.body;

    if(sede && direccion && tema && descripcion && fecha && hora_inicio ){
        
        const newAsamblea = new asamblea({
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
    }else{
        return res.status(400).json({
            mensaje:"Por favor llene todos los campos"
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
const updateAsamblea = (req,res)=>{
    const {id} = req.params;
    asamblea.findByIdAndUpdate(id,req.body,(err,asamblea)=>{
        if (!asamblea) {
            return res.status(404).send({ message: "No se ha encontrado la asamblea" })
        }
        if (err) {
            return res.status(400).send({ message: "No se ha podido modificar la asamblea" })
        }
        asamblea.save();
        return res.status(200).send({message:"Datos de asamblea modificados correctamente"});
    });
}
const deleteAsamblea = (req,res)=>{
    const {id} = req.params;
    asamblea.findByIdAndDelete(id,(err,asamblea)=>{
        if (err) {
            return res.status(400).send({ message: "No se ha podido eliminar la asamblea" })
        }
        if (!asamblea) {
            return res.status(404).send({ message: "No se ha encontrado la asamblea" })
        }
        return res.status(200).send({message:"Asamblea eliminada correctamente",asamblea:asamblea});
    })
}

module.exports={
    createAsamblea,
    getAsambleas,
    updateAsamblea,
    deleteAsamblea
}

