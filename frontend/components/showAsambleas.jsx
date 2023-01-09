import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
const ShowAsambleas = ()=>{
    const router = useRouter();
    const [asambleas, setAsambleas] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const getAsambleas = async ()=>{
            const response = await axios.get(`${process.env.SERVIDOR}/asambleas`);
            setAsambleas(response.data);
            setIsLoading(true);
            console.log(response.data);
    }
        useEffect(()=>{
        getAsambleas()
       
    },[]);

    const deleteAsamblea= async (id)=>{
        console.log(id);
        await axios.delete(`${process.env.SERVIDOR}/asamblea/delete/${id}`);
        getAsambleas();
    }

    if(isLoading){
        return (
            <div className="w-75 m-auto">
                <div className="w-75 d-flex justify-content-center align-items-center">
                    <h1 className="text-center mt-3 h2">Listado de Asambleas registradas</h1>
                    <button className="btn btn-primary ms-3 mt-2" onClick={()=>{router.push("asamblea/registrar")}} >Agendar Asamblea</button>
                </div>
                
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Sede</th>
                            <th>Tema</th>
                            <th>Descripción</th>
                            <th>Dirección</th>
                            <th>Fecha</th>
                            <th>Hora Inicio</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                        
                        {
                            asambleas.map((asamblea,idx)=>{
                                return(
                                    <tr key={idx}>
                                        <td>{asamblea.sede}</td>
                                        <td>{asamblea.tema}</td>
                                        <td>{asamblea.descripcion}</td>
                                        <td>{asamblea.direccion}</td>
                                        <td>{asamblea.fecha}</td>
                                        <td>{asamblea.hora_inicio}</td>
                                        <td className="">
                                                <button className="btn btn-success" onClick={()=>{router.push(`asamblea/modificar/${asamblea._id}`)}} >Modificar</button>
                                                <button onClick={()=>{deleteAsamblea(asamblea._id)}} className="btn btn-danger ms-2">Eliminar</button>
                                            </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
    return <div>Sin resultados de asambleas</div>
 
}

export default ShowAsambleas;
