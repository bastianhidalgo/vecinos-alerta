const mongoose = require('mongoose');
const acta = require('./acta');
const Schema = mongoose.Schema;
const ComentarioSchema = new Schema({
    
comentario:{
        autor:{
            type:String,
            required:false
        },
        fecha:{
            type: Date,
            require: false   
        },
        descripcion:{
            type: String,
            require:false
        }
    }
})

module.exports=mongoose.model('comentario', ComentarioSchema);

