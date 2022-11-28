const mongoose = require('mongoose');
const acta = require('./acta');
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
        },
        origen:{
            type: Schema.ObjectId,
            ref: 'acta'
        },
    }
})

module.exports=mongoose.model('comentario', ComentarioSchema);

