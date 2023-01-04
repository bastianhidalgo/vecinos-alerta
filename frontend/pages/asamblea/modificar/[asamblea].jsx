import axios from "axios";
import { useRouter } from "next/router";
import React,{useEffect, useState} from "react";
import Header from "../../../components/header/header.component"

const Modificar = ()=>{
    const router = useRouter();
    const id = router.query.asamblea;
    const [asamblea,setAsamblea] = useState({
        'sede': '',
        'tema': '',
        'direccion':'',
        'hora_inicio':'',
        'fecha':'',
        'descripcion':''
    });
    const [sede,setSede]= useState("");
    const [tema,setTema] = useState("");
    const [direccion,setDireccion] = useState("");
    const [fecha,setFecha] = useState("");
    const [hora,setHora] = useState("");
    const [descripcion,setDescripcion] = useState("");

    const getAsamblea = async()=>{
        const response = await axios.get(`${process.env.SERVIDOR}/asamblea/show/${id}`);
        console.log(response.data);
        setAsamblea(response.data);
    };
    const onSubmit = async (e)=>{
        e.preventDefault();
       
        const data = {
            "sede":asamblea.sede,
            "tema":asamblea.tema,
            "direccion":asamblea.direccion,
            "fecha":asamblea.fecha,
            "hora_inicio":asamblea.hora_inicio,
            "descripcion":asamblea.descripcion
        }
        console.log(data);
        const response =await axios.put(`${process.env.SERVIDOR}/asamblea/update/${id}`,data);
        console.log(response.data);
        router.push("/asamblea");
    }
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setAsamblea({ ...asamblea, [name]: value });
      };
    useEffect(()=>{
        getAsamblea();
        
    },[])
    return(
        <div className="w-100">
            <Header/>
            <h1 className="text-center h2 mt-2 mb-2">Modificar datos asamblea</h1>
            <form  className="w-75 p-3 border rounded d-flex justify-content-center m-auto row">
            
            <div className="col-5">
                <label >Sede</label>
                <input value={asamblea.sede} name="sede"  type="text" onChange={handleInputChange} className="form-control" placeholder="" />
                
            </div>
            <div className="col-5">
                <label>Tema</label>
                <input type="text" value={asamblea.tema} onChange={handleInputChange} name="tema"  className="form-control" placeholder="" />
                
            </div>
           
            <div className="col-5">
                <label>Dirección</label>
                <input type="text" value={asamblea.direccion} className="form-control" name="direccion" onChange={handleInputChange}  placeholder="" />
                
            </div>
            <div className="col-5">
                <label>Fecha</label>
                <input type="date" name="fecha" className="form-control" value={asamblea.fecha}  onChange={handleInputChange} placeholder="" />
                
            </div>
            <div className="col-5">
                <label>Hora</label>
                <input type="time" name="hora_inicio" value={asamblea.hora_inicio} onChange={handleInputChange} className="form-control" placeholder="" />
                
            </div>
            <div className="col-5">
                <label>Descripción</label>
                <textarea name="descripcion" className="form-control"  onChange={handleInputChange} id="" cols="20" rows="5"></textarea>
                
            </div> 
            <div className="col-10 d-flex justify-content-center mt-4">
                <button onClick={(e)=>onSubmit(e)} className="btn btn-primary w-50" type="submit">Enviar datos</button>
            </div>
            
        </form>
        </div>
    )
}

export default Modificar;