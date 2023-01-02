import { useState } from 'react'
import { getVecino } from '../../../data/vecinos'
import { Text, Button, Container, Heading, HStack, Stack } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export const getServerSideProps= async(context) => {
    const response = await getVecino(context.query.vecino)
    return {
        props: {
            data: response.data
        }
    }
}

const editar =  ({ data }) => {
    const [vecino]=useState(data)
    const route = useRouter()

    return(
        <Container maxW="container.xl" mt={10}>
            <Heading as={"h1"} size= {"2xl"} textAlign={"center"}>Vecino: </Heading>
            <Stack>
                <HStack>
                <Text fontWeight={"bold"}>Nombre: </Text>
                <Text>{vecino.nombre}</Text>
                <Text fontWeight={"bold"}>Apellido: </Text>
                <Text>{vecino.apellido}</Text>
                </HStack>
                <Text fontWeight={"bold"}>Fecha de Nacimiento: </Text>
                <Text>{vecino.fechaNacimiento}</Text>
                <Text fontWeight={"bold"}>Dirección: </Text>
                <Text>{vecino.direccion}</Text>
                <HStack>
                <Text fontWeight={"bold"}>Teléfono: </Text>
                <Text>{vecino.telefono}</Text>
                <Text fontWeight={"bold"}>Correo: </Text>
                <Text>{vecino.correo}</Text>
                </HStack>
                <HStack>
                <Text fontWeight={"bold"}>Rol: </Text>
                <Text>{vecino.rol}</Text>
                <Text fontWeight={"bold"}>Fecha inicio rol: </Text>
                <Text>{vecino.fecha_inicio_rol}</Text>
                <Text fontWeight={"bold"}>Fecha termino rol: </Text>
                <Text>{vecino.fecha_termino_rol}</Text>
                </HStack>
                <HStack>
                    <Button w={"full"} colorScheme="blue" mt={10} mb={10} onClick={()=>route.push(`../actualizar/asignarRol/${vecino._id}`)}>Editar</Button>
                    <Button w={"full"} colorScheme="red" mt={10} mb={10}>Eliminar</Button>
                    <Button w={"full"} colorScheme="purple" mt={10} mb={10} onClick={()=>route.push(`../rol/${vecino._id}`)}>Cambiar Rol</Button>
                    <Button w={"full"} colorScheme="green" mt={10} mb={10} onClick={()=>route.push('/')}>Volver</Button>
                </HStack>
            </Stack>
        </Container>
    )




}
export default editar