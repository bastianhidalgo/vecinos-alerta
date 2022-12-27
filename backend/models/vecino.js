const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const VecinoSchema = new Schema({
    nombre:{
        type: String,
        required:true,
        //match: /^[a-zA-Z]+$/,
        minLenght:1,
        maxLenght: 100
    },
    apellido:{
        type: String,
        required:true,
        //match: /^[a-zA-Z]+$/,
        minLenght:1,
        maxLenght: 100
    },
    fechaNacimiento:{
        type: Date,
        required:true
    },
    direccion:{
        type: String,
        required:true
    },
    telefono:{
        type: String,
        required:true,
        //match: /^[0-9-+]+$/
    },
    correo:{
        type: String,
        required:true,
       match: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    },
    rol:{
        type: String,
        required: true
    },
    fecha_inicio_rol:{
        type: Date,
        required:true
    },
    fecha_termino_rol:{
        type: Date,
        required:true
    }
})

module.exports=mongoose.model('vecino', VecinoSchema);