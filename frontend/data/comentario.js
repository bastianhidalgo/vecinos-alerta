import axios from 'axios';

const createComentario =  (comentario) => {
    console.log("Nuevo com: " + Object.values(comentario));
    const response =  axios.post (`${process.env.SERVIDOR}/comentario`,comentario);
    return response
}

module.exports = {
    createComentario
}