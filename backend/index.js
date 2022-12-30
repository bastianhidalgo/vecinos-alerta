const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const upload = require("./middlewares/upload");

const app=express();
const vecinoRoutes = require('./routes/vecinoRoutes');


app.use(cors())
app.use(express.json())
app.options('*',cors())
app.use('/api',vecinoRoutes)


app.listen(process.env.PORT,()=>
{
    console.log('el proyecto esta corriendo en el puerto',process.env.PORT);
});

mongoose.set('useFindAndModify',false),
mongoose.set('useNewUrlParser',true),
mongoose.set('useCreateIndex',true),
mongoose.set('useUnifiedTopology',true);

mongoose.connect(process.env.DB,(err)=>{

    if(err){
        return console.log('Error al conectar con la bd ->',err)
    }
    return console.log('conectado a la base de datos')
})
