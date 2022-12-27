const vecino=require('../models/vecino');


const asignarRol = async (req, res) => {
    try {
      
      
      if ((req.body.fecha_inicio_rol) > (req.body.fecha_termino_rol)) {
        return res.status(406).json({
          message: 'fecha de termino no puede ser antes de la fecha de inicio'
        });
      }
    
      if (!asignarRol) {
        return res.status(404).json({
          message: 'vecino no existe'
        });
      }
      
      if (req.body.rol=="administrador"
      ||req.body.rol=="secretario"||
      req.body.rol=="vecino") {
        const asignarRol = await vecino.findByIdAndUpdate(req.params.id, {
          rol: req.body.rol,
          fecha_inicio_rol: req.body.fecha_inicio_rol,
          fecha_termino_rol: req.body.fecha_termino_rol
          
        }, {
          new: true
        });
        return res.json({
        message: 'La asignacion rol del vecino se ha realizado correctamente'

      });
    }else{
        return res.status(406).json({
        message: 'rol invalido'
        });
    }
        
    } catch (error) {
      return res.status(500).json({
        message: 'no se pudo modificar el rol del vecino'
      });
    }
  };
  
module.exports={
    asignarRol
}