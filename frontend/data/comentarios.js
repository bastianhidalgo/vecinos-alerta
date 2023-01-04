import axios from 'axios';

const getComentario= async (id) => {

    const response = await axios.get(`${process.env.SERVIDOR}/comentario/fin/${id}`)
    return response
}

module.exports = {
    getComentario,
}