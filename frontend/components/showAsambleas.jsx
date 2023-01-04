import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Button,Container,Heading,HStack,Input,Stack,Table,Th,Tr,Td,Thead,Tbody, Box } from '@chakra-ui/react'

const ShowAsambleas = () => {
  const router = useRouter();
  const [asambleas, setAsambleas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getAsambleas = async () => {
    const response = await axios.get(`${process.env.SERVIDOR}/asambleas`);
    setAsambleas(response.data);
    setIsLoading(true);
    console.log(response.data);
  };
  useEffect(() => {
    getAsambleas();
  }, []);

  const deleteAsamblea = async (id) => {
    console.log(id);
    await axios.delete(`${process.env.SERVIDOR}/asamblea/delete/${id}`);
    getAsambleas();
  };

  if (isLoading) {
    return (
      <Box className="w-75 m-auto">
        <Box className="w-75 d-flex justify-content-center align-items-center">
          <Heading marginTop={"30px"} textAlign={"center"} className="text-center mt-3 h2">
            Listado de Asambleas registradas
          </Heading>
          
          <Button marginLeft={"150px"} marginTop={"30px"} marginBottom={"30px"}
            className="btn btn-primary ms-3 mt-2"
            onClick={() => {
              router.push("./registrar");
            }}
          >
            Agendar Asamblea
          </Button>
        </Box>
        <Container textAlign="center" maxW="container.xl">
        <Table className="table table-hover">
          <Thead>
            <Tr>
              <Th>Sede</Th>
              <Th>Tema</Th>
              <Th>Descripción</Th>
              <Th>Dirección</Th>
              <Th>Fecha</Th>
              <Th>Hora Inicio</Th>
              <Th>Comentarios</Th>
              <Th>Acciones</Th>
            </Tr>
          </Thead>
          <Tbody>
            {asambleas.map((asamblea, idx) => {
              return (
                <Tr key={idx}>
                  <Td>{asamblea.sede}</Td>
                  <Td>{asamblea.tema}</Td>
                  <Td>{asamblea.descripcion}</Td>
                  <Td>{asamblea.direccion}</Td>
                  <Td>{asamblea.fecha}</Td>
                  <Td>{asamblea.hora_inicio}</Td>
                  <Td>
                    <Button
                      className="btn btn-success"
                      onClick={() => {
                        router.push(`../comentarios/ver/${asamblea._id}`);
                      }}
                    >
                      Comentarios
                    </Button>
                  </Td>
                  <Td className="">
                    <Button
                      className="btn btn-success"
                      onClick={() => {
                        router.push(`asamblea/modificar`);
                      }}
                    >
                      Modificar
                    </Button>
                    <Button
                      onClick={() => {
                        deleteAsamblea(asamblea._id);
                      }}
                      className="btn btn-danger mt-2"
                    >
                      Eliminar
                    </Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
         </Container>
      </Box>
     
    );
  }
  return <Box>Sin resultados de asambleas</Box>;
};

export default ShowAsambleas;
