import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button,Container,Heading,HStack,Input,Stack,Table,Th,Tr,Td,Thead,Tbody, Box, FormControl, FormLabel, Textarea } from '@chakra-ui/react'

const RegistrarForm = () => {
  const [sede, setSede] = useState("");
  const [tema, setTema] = useState("");
  const [direccion, setDireccion] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const fecha_nueva = Date;
    console.log(fecha_nueva);

    const data = {
      sede: sede,
      tema: tema,
      direccion: direccion,
      fecha: fecha_nueva,
      hora_inicio: hora,
      descripcion: descripcion,
    };
    const response = await axios.post("/asamblea", data);
    console.log(response);
  };
  return (

    <Container maxW="container.xl">
    <FormControl className="w-75 p-3 border rounded was-validated d-flex justify-content-center m-auto row">
      <Box className="col-5">
        <FormLabel>Sede</FormLabel>
        <Input
          required
          type="text"
          onChange={(e) => {
            setSede(e.target.value);
          }}
          className="form-control"
          placeholder=""
        />
       
      </Box>
      <Box className="col-5">
        <FormLabel>Tema</FormLabel>
        <Input
          required
          type="text"
          onChange={(e) => {
            setTema(e.target.value);
          }}
          className="form-control"
          placeholder=""
        />
       
      </Box>

      <Box className="col-5">
        <FormLabel>Dirección</FormLabel>
        <Input
          required
          type="text"
          className="form-control"
          onChange={(e) => setDireccion(e.target.value)}
          placeholder=""
        />
      
      </Box>
      <Box className="col-5">
        <FormLabel>Fecha</FormLabel>
        <Input
          required
          type="date"
          className="form-control"
          onChange={(e) => setFecha(e.target.value)}
          placeholder=""
        />
      
      </Box>
      <Box className="col-5">
        <FormLabel>Hora</FormLabel>
        <Input
          required
          type="time"
          onChange={(e) => setHora(e.target.value)}
          className="form-control"
          placeholder=""
        />
       
      </Box>
      <Box className="col-5">
        <FormLabel>Descripción</FormLabel>
        <Textarea
          required
          className="form-control"
          onChange={(e) => setDescripcion(e.target.value)}
          id=""
          cols="20"
          rows="5"
        ></Textarea>
      </Box>
      <Box className="col-10 d-flex justify-content-center mt-4">
        <Button
          onClick={(e) => onSubmit(e)}
          className="btn btn-primary w-50"
          type="submit"
        >
          Enviar datos
        </Button>
      </Box>
    </FormControl>
    </Container>
  )
}


export default RegistrarForm
