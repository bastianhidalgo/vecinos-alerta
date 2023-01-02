import { useState, useEffect } from 'react'
import { Button,Container,Heading,HStack,Input,Stack,Table,Th,Tr,Td,Thead,Tbody } from '@chakra-ui/react'
import axios from 'axios'
import {getVecinos} from '../data/vecinos'
import { useRouter } from 'next/router'


const index = () => {
  console.log(process.env.SERVIDOR)
    const [vecinos, setVecinos]= useState([{
      id:'',
      nombre:'',
      apellido: '',
      fechaNacimiento:'',
      direccion: '',
      telefono: '',
      correo: '',
      rol: '',
      fecha_inicio_rol:'',
      fecha_termino_rol: ''
    }])

      const router = useRouter()

    const contentTable = () =>{
      return vecinos.map(vecino =>{
        return (
          <Tr key={vecino.id}>
            <Td>{vecino.nombre}</Td>
            <Td>{vecino.apellido}</Td>
            <Td>{vecino.fechaNacimiento}</Td>
            <Td>{vecino.direccion}</Td>
            <Td>{vecino.telefono}</Td>
            <Td>{vecino.correo}</Td>
            <Td>{vecino.rol}</Td>
            <Td><Button colorScheme="green" onClick={()=>router.push(`./vecino/${vecino._id}`)} mt="4" >Modificar</Button></Td>
            <Td><Button colorScheme="red" mt="4" >Eliminar</Button></Td>


          </Tr>
        )
      })
    }
    useEffect(() => {
      getVecinos().then(res => {
        setVecinos(res.data)
      })
    },[])


    return (
    <>
      <Container maxW="container.xl">
        <Heading as="h1" size="2xl" textAlign="center" mt="10">Listado de vecinos</Heading>
        <Button colorScheme="blue" mt="10" onClick={() => router.push('./crearVecino')}>Agregar Vecino</Button>
        <Stack spacing={4} mt="10">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Td>Nombre</Td>
                <Td>Apellido</Td>
                <Td>Fecha Nacimiento</Td>
                <Td>Dirección</Td>
                <Td>Teléfono</Td>
                <Td>Correo</Td>
                <Td>Rol</Td>
                <Td>Modificar/Eliminar</Td>
  
              </Tr>
            </Thead>
            <Tbody>{contentTable()}</Tbody>
          </Table>
        </Stack>
      </Container>
    </>
    )
    }
export default index