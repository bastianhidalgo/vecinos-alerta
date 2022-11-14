const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ActaSchema = new Schema({
    tema:{
        type:String,
        required:true,

    },
    descripcion:{
        type:String,
        required:true,
    },
    fecha:{
        type:Date,
        required:true,
    },
    hora_inicio:{
        type: Date,
        required:true,
    },
    hora_termino:{
        type:Date,
        required:true,
    }



})
module.exports=mongoose.model('acta', ActaSchema);