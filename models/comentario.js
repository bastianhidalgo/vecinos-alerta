const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ComentarioSchema = new Schema({
    
comentario:{
        autor:{
            type:String,
            required:true
        },
        fecha:{
            type: Date,
            require: true
        },
        descripcion:{
            type: String,
            require:true
        }


    }
})

module.exports=mongoose.model('comentario', ComentarioSchema);
