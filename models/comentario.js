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
<<<<<<< HEAD
            type: Schema.ObjectId,
=======
            type: Schema.ObjectID,
>>>>>>> fe2db6e8930ff1d0dfaff8830a99737230cfc159
            ref: 'acta'
        },
    }
})

module.exports=mongoose.model('comentario', ComentarioSchema);

