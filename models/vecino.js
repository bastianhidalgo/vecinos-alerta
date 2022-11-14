const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const VecinoSchema = new Schema({
    nombre:{
        type: String,
        required:true
    },
    apellido:{
        type: String,
        required:true
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
        type: Number,
        required:true
    },
    correo:{
        type: String,
        required:true
    }
})

module.exports=mongoose.model('vecino', VecinoSchema);