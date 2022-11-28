const vecino=require('../models/vecino');


const asignarRol = async (req, res) => {
    try {
      const asignarRol = await vecino.findByIdAndUpdate(req.params.id, {
        rol: req.body.rol,
        fecha_inicio_rol: req.body.fecha_inicio_rol,
        fecha_termino_rol: req.body.fecha_termino_rol
      }, {
        new: true
      });

      if (!asignarRol) {
        return res.status(404).json({
          message: 'vecino no existe'
        });
      }

      return res.json({
        message: 'La asignacion rol del vecino se ha realizado correctamente'

      });
    } catch (error) {
      return res.status(500).json({
        message: error.message
      });
    }
  };

 /* const asignarRol = (req, res) => {
    const { id } = req.params;
    vecino.findByIdAndUpdate(id, req.body, (err, vecinos) => {
        if (err) {
            return res.status(400).send({ message: "No se ha podido asignar un nuevo rol a el vecino" })
        }
        if (!vecino) {
            return res.status(404).send({ message: "No se ha encontrado el vecino" })
        }
        return res.status(200).send(vecinos)
    })
}*/
  
module.exports={
    asignarRol
}