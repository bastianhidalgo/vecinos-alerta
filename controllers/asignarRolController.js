const vecino=require('../models/vecino');


const asignarRol = (req, res) => {
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
}

module.exports={
    asignarRol
}