import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

const RegistrarForm = ()=>{
    const [sede,setSede]= useState("");
    const [tema,setTema] = useState("");
    const [direccion,setDireccion] = useState("");
    const [fecha,setFecha] = useState("");
    const [hora,setHora] = useState("");
    const [descripcion,setDescripcion] = useState("");

    const router = useRouter();

    const onSubmit = async (e)=>{
        e.preventDefault();
        const fecha_nueva = new Date(fecha);
        console.log(fecha_nueva);
        const data = {
            "sede":sede,
            "tema":tema,
            "direccion":direccion,
            "fecha":fecha,
            "hora_inicio":hora,
            "descripcion":descripcion
        }
        console.log(data);
        const response =await axios.post(`${process.env.SERVIDOR}/asamblea`,data);
        router.push("/asamblea");
    }
    return(
        <form  className="w-75 p-3 border rounded was-validated d-flex justify-content-center m-auto row">
            
            <div className="col-5">
                <label >Sede</label>
                <input required type="text" onChange={(e)=>{setSede(e.target.value)}} className="form-control" placeholder="" />
                <div className="invalid-feedback">Por favor llene el campo</div>
            </div>
            <div className="col-5">
                <label>Tema</label>
                <input required type="text" onChange={(e)=>{setTema(e.target.value)}} className="form-control" placeholder="" />
                <div className="invalid-feedback">Por favor llene el campo</div>
            </div>
           
            <div className="col-5">
                <label>Dirección</label>
                <input required type="text" className="form-control" onChange={(e)=>setDireccion(e.target.value)}  placeholder="" />
                <div className="invalid-feedback">Por favor llene el campo</div>
            </div>
            <div className="col-5">
                <label>Fecha</label>
                <input required type="date" className="form-control" onChange={(e)=>setFecha(e.target.value)} placeholder="" />
                <div className="invalid-feedback">Por favor llene el campo</div>
            </div>
            <div className="col-5">
                <label>Hora</label>
                <input required type="time" onChange={(e)=>setHora(e.target.value)} className="form-control" placeholder="" />
                <div className="invalid-feedback">Por favor llene el campo</div>
            </div>
            <div className="col-5">
                <label>Descripción</label>
                <textarea required className="form-control" onChange={(e)=>setDescripcion(e.target.value)} id="" cols="20" rows="5"></textarea>
                <div className="invalid-feedback">Por favor llene el campo</div>
            </div> 
            <div className="col-10 d-flex justify-content-center mt-4">
                <button onClick={(e)=>onSubmit(e)} className="btn btn-primary w-50" type="submit">Enviar datos</button>
            </div>
            
        </form>
    )
}

export default RegistrarForm;