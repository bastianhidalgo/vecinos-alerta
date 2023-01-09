import React from "react";
import Header from "../../../components/header/header.component";
import RegistrarForm from "../../../components/registrarForm";


const Registrar = ()=>{
    return(
        <div className="w-100 d-flex flex-column">
            <Header/>
            <div className="col-12">
                <h1 className="text-center h2">Agendar Asamblea</h1>
            </div>
            <RegistrarForm/>
        </div>
    )
}

export default Registrar;