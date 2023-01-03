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

            <Td>
              <HStack>
            <Button colorScheme="green" onClick={()=>router.push(`./vecino/actualizar/${vecino._id}`)} >Modificar</Button>
            <Button colorScheme="orange" onClick={()=>router.push(`./vecino/ver/${vecino._id}`)}>Ver</Button>
            </HStack>
            </Td>


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
        <Heading as="h1" size="2xl" className="header" textAlign="center" mt="10">Listado de vecinos</Heading>
        <Button colorScheme="blue" mt="10" onClick={() => router.push('./crearVecino')}>Agregar Vecino</Button>
        <Stack spacing={4} mt="10">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Td fontWeight={"bold"}>Nombre</Td>
                <Td fontWeight={"bold"}>Apellido</Td>
                <Td fontWeight={"bold"}>Fecha Nacimiento</Td>
                <Td fontWeight={"bold"}>Dirección</Td>
                <Td fontWeight={"bold"}>Teléfono</Td>
                <Td fontWeight={"bold"}>Correo</Td>
                <Td fontWeight={"bold"}>Rol</Td>
                <Td fontWeight={"bold"}>Modificar/Eliminar</Td>

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