import { useState } from 'react'
import { Button,Container,Heading,HStack, Stack} from '@chakra-ui/react'
import { asignarRol, getVecino } from '../../../data/vecinos'
import InputForm from '../../../components/InputForm'
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'

export const getServerSideProps = async (context)=>{
        const response = await getVecino(context.query.vecino)
        return{
            props: {
                data: response.data
            }
        }
    }

const CambiarRol = ({ data }) =>{
    const [vecino, setVecino] = useState(data)
    const router = useRouter()
    const { vecinos } = router.query

    const handleChange=(e) =>{
        setVecino({
            ... vecino,
            [e.target.name]: e.target.value
        })
    }
    const submitVecino = async(e) =>{
        e.preventDefault()
        const response = await asignarRol(vecino._id,vecino)
            Swal.fire({
                icon:'success',
                title:'Vecino modificado',
                showConfirmButton: true,
                text: 'Se modificó el rol del vecino correctamente'
            })
            router.push('/')

    }


    return (
        <Container maxW="container.xl" mt={10}>
        <Heading as={"h1"} size={"2xl"} className="header" textAlign="center">Asignar rol al Vecino: {vecino.nombre} {vecino.apellido}</Heading>
        <Stack spacing={4} mt={10}>
            <HStack>
            <InputForm label="Rol" handleChange={handleChange} name="rol" placeholder="Rol" type="text" />
            </HStack>
            <InputForm label="Fecha inicio rol" handleChange={handleChange} name="fecha_inicio_rol" placeholder="Fecha inicio rol" type="date" />
            <InputForm label="Fecha termino rol" handleChange={handleChange} name="fecha_termino_rol" placeholder="Fecha termino rol" type="date" />
        </Stack>
        <HStack>
            <Button colorScheme="blue" mt={10} mb={10} onClick={submitVecino}>Asignar Rol</Button>
            <Button colorScheme="red" mt={10} mb={10} onClick={()=> router.push('/')}>Volver</Button>
        </HStack>
        </Container>
    )}

    export default CambiarRol