import { useState } from "react";
import { Button,Container,Heading,HStack, Stack} from '@chakra-ui/react'
import {createVecino} from '../data/vecinos'
import InputForm from '../components/InputForm'
import { useRouter } from "next/router";
import Swal from 'sweetalert2'

const Vecinos = () =>{

    const [vecino,setVecino]= useState({

      nombre:'',
      apellido: '',
      fechaNacimiento:'',
      direccion: '',
      telefono: '+569',
      correo: '',
      fecha_inicio_rol:'',
      fecha_termino_rol: ''
    })

    const handleChange=(e) =>{
        setVecino({
            ... vecino,
            [e.target.name]: e.target.value
        })
    }
    const submitVecino = async(e) =>{
        e.preventDefault()
        const response = await createVecino(vecino)
        
            Swal.fire({
                icon:'success',
                title:'Vecino agregado',
                showConfirmButton: true,
                text: 'El vecino se agregó correctamente'
            })
            router.push('/')
        

    }

    const router = useRouter()
    return (
        <Container maxW="container.xl" mt={10}>
            <Heading as={"h1"} className="header" size={"2xl"} textAlign="center">Registrar Vecino</Heading>
            <Stack spacing={4} mt={10}>
                <HStack>
                <InputForm label="Nombre" handleChange={handleChange} name="nombre" placeholder="Nombre" type="text" value={vecino.nombre}/>
                <InputForm label="Apellido" handleChange={handleChange} name="apellido" placeholder="Apellido" type="text"value={vecino.apellido} />
                </HStack>
                <InputForm label="Fecha Nacimiento" handleChange={handleChange} name="fechaNacimiento" placeholder="Fecha Nacimiento" type="date" value={vecino.fechaNacimiento}/>
                <InputForm label="Dirección" handleChange={handleChange} name="direccion" placeholder="Dirección" type="text" value={vecino.direccion}/>
                <HStack>
                <InputForm label="Teléfono" handleChange={handleChange} name="telefono" placeholder="Teléfono" type="text" value={vecino.telefono}/>
                <InputForm label="Correo" handleChange={handleChange} name="correo" placeholder="Correo" type="text" value={vecino.correo}/>
                </HStack>
                <HStack>
                <InputForm label="Fecha inicio rol" handleChange={handleChange} name="fecha_inicio_rol" placeholder="Fecha inicio rol" type="date" value={vecino.fecha_inicio_rol}/>
                <InputForm label="Fecha termino rol" handleChange={handleChange} name="fecha_termino_rol" placeholder="Fecha termino rol" type="date" value={vecino.fecha_termino_rol}/>
                </HStack>
            </Stack>
            <HStack>
        <Button colorScheme="blue" mt={10} mb={10} onClick={submitVecino}>Crear</Button>
        <Button colorScheme="red" mt={10} mb={10} onClick={()=> router.push('/')}>Volver</Button>
    </HStack>
        </Container>
    )
}
export default Vecinos