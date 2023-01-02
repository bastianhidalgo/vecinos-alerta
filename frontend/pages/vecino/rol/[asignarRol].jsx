import {useState} from 'react'
import {getVecino, AsignarRol} from '../../../data/vecinos'
import InputForm from '../../../components/InputForm'
import {Button, Container, Heading, HStack, Stack} from '@chakra-ui/react'
import { useRouter} from 'next/router'
import Swal from 'sweetalert2'

export const getServerSideProps = async (context)=>{
    const response = await getVecino(context.query.vecino)
    return{
        props: {
            data: response.data
        }
    }
}

const editar =({ data }) => {
    const [vecino, setVecino] = useState(data)
    const router = useRouter()
    const {id} = router.query

    const handleChange=(e) =>{
        setVecino({
            ...vecino,
            [e.target.name]: e.target.value
        })
    }
    const submitVecino = async(e) =>{
        e.preventDefault()
        const response = await updateVecino(id,vecino)
            Swal.fire({
                icon:'success',
                title:'Rol Asignado',
                showConfirmButton: true,
                text: 'El rol se asignó correctamente'


            })
            router.push('/')
        }

    return (
    <Container maxW="container.xl" mt={10}>
    <Heading as={"h1"} size={"2xl"} textAlign="center">Asignar rol al Vecino: {vecino.nombre}</Heading>
    <Stack spacing={4} mt={10}>
        <HStack>
        <InputForm label="Rol" handleChange={handleChange} name="rol" placeholder="Rol" type="text" value={vecino.rol}/>
        </HStack>
        <InputForm label="Fecha inicio rol" handleChange={handleChange} name="fecha_inicio_rol" placeholder="Fecha inicio rol" type="date" value={vecino.fecha_inicio_rol}/>
        <InputForm label="Fecha termino rol" handleChange={handleChange} name="fecha_termino_rol" placeholder="Fecha termino rol" type="date" value={vecino.fecha_termino_rol}/>
    </Stack>
    <HStack>
        <Button colorScheme="blue" mt={10} mb={10} onClick={submitVecino}>Asignar Rol</Button>
        <Button colorScheme="red" mt={10} mb={10} onClick={()=> router.push('/')}>Volver</Button>
    </HStack>
    </Container>
)}


export default editar