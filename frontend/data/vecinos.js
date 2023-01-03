import axios from 'axios';

const getVecinos = async () => {
    const response = await axios.get (`${process.env.SERVIDOR}/vecinos`);
    return response
}
const createVecino =  (vecino) => {

    const response =  axios.post (`${process.env.SERVIDOR}/vecino`,vecino);
    return response
}
const getVecino= async (id) => {
    const response = await axios.get(`${process.env.SERVIDOR}/vecinos/search/${id}`)
    return response
}

const updateVecino = (id, vecino) => {
    const response =  axios.put(`${process.env.SERVIDOR}/vecino/update/${id}`,vecino)
    return response
}
const deleteVecino = (id, vecino) => {
    const response =  axios.delete(`${process.env.SERVIDOR}/vecinos/delete/${id}`,vecino)
    return response
}

const asignarRol = (id, vecino) => {
    const response =  axios.put(`${process.env.SERVIDOR}/asignarRol/${id}`,vecino)
    return response
}

module.exports = {
    getVecinos,
    createVecino,
    getVecino,
    updateVecino,
    deleteVecino,
    asignarRol
}