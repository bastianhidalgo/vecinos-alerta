import React from "react";
import Header from "../../../components/header/header.component";
import RegistrarForm from "../../../components/registrarForm";
import { Button,Container,Heading,HStack, Stack} from '@chakra-ui/react'

const Registrar = ()=>{
    return(
        <div className="w-100 d-flex flex-column">
            <Header/>
            <div className="col-12">
                <Heading textAlign={"center"} className="text-center h2">Agendar Asamblea</Heading>
            </div>
            <RegistrarForm/>
        </div>
    )
}

export default Registrar;