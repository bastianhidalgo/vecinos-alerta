import * as yup from 'yup';

 const vecinoValidation = yup.object({

    nombre: yup.string().min(3,"Debe contener mínimo 3 caracteres ").max(50,"Debe contener máximo 50 caracteres ").required("El nombre es obligatorio")
    .matches(/^[a-zA-Z]+$/,"El nombre no debe tener caracteres especiales "),

    apellido: yup.string().min(3,"Debe contener mínimo 3 caracteres ").max(50,"Debe contener máximo 50 caracteres ").required("El apellido es obligatorio")
    .matches(/^[a-zA-Z]+$/,"El apellido no debe tener caracteres especiales "),

    fechaNacimiento: yup.date().required("La fecha de nacimiento es obligatoria"),

    direccion: yup.string().min(5,"Debe contener mínimo 3 caracteres ").max(100,"Debe contener máximo 100 caracteres ").required("La dirección es obligatoria"),

    telefono: yup.string().required("El teléfono es obligatorio")
    .matches(/^(\+?56)?(\s?)(0?9)(\s?)[98765432]\d{7}$/,"El teléfono debe comenzar con +569 y un largo de 12 "),

    correo: yup.string().min(3,"Debe contener mínimo 3 caracteres ").max(50,"Debe contener máximo 50 caracteres ").required("El correo es obligatorio")
    .matches(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,"El correo debe tener formato valido "),
    
    rol: yup.string().min(3,"Debe contener mínimo 3 caracteres ").max(50,"Debe contener máximo 50 caracteres ").required("El rol es obligatorio")
    .matches(/^[a-zA-Z]+$/,"El rol no debe tener caracteres especiales "),

    fecha_inicio_rol: yup.date().required("La fecha de inicio es obligatoria"),

    fecha_termino_rol: yup.date().required("La fecha de termino es obligatoria")
 })

export default vecinoValidation

 /*    nombre:{
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
})*/