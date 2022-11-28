const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ActaSchema = new Schema({
    tema:{
        type:String,
        required:true,
        match: /^[a-zA-Z0-9]+$/,

    },
    descripcion:{
        type:String,
        required:true,
        match: /^[a-zA-Z0-9]+$/,
    },
    fecha:{
        type:Date,
        required:true,
    },
    fecha_termino:{
        type:Date,
        required:true
    }
})
module.exports=mongoose.model('acta', ActaSchema);