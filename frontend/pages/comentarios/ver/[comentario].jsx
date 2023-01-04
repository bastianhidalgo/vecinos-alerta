import { React, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getComentario } from "../../../data/comentarios";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  StackDivider,
  Box,
} from "@chakra-ui/react";

import {
  Text,
  Button,
  Container,
  Heading,
  HStack,
  Stack,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const Comentario = ({ data }) => {
  const [date, setDate] = useState(new Date());
  const [comentarios, setComentarios] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // Variables
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const getComentario = async () => {
    const response = await axios.get(`${process.env.SERVIDOR}/comentarios`);
    setComentarios(response.data);
    setIsLoading(true);
    console.log(response.data);
  };

  useEffect(() => {
    getComentario();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const fecha_nueva = Date;
    console.log(fecha_nueva);

    const data = {
      nombre: nombre,
      descripcion: descripcion,
      fecha: fecha_nueva,
    };
    const response = await axios.post("/comentario", data);
    console.log(response);
  };

  return (
    <Container maxW="container.xl" mt={10}>
      <Heading as={"h1"} className="header" size={"2xl"} textAlign={"center"}>
        Comentario{" "}
      </Heading>
      <HStack>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            flexDirection: "column",
          }}
        >
          <FormControl isInvalid={errors.name} style={{ marginRight: "10px" }}>
            <FormLabel htmlFor="name">Nombre</FormLabel>
            <Input
              id="name"
              placeholder="Nombre"
              {...register("name", {
                required: "Es requerido",
                minLength: { value: 4, message: "Minimo 4 caracteres." },
              })}
              onChange={(e) => {
                setNombre(e.target.value);
              }}
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.description}>
            <FormLabel htmlFor="description">Descripción</FormLabel>
            <Input
              id="description"
              placeholder="Descripción..."
              {...register("description", {
                required: "Es requerido",
                minLength: { value: 4, message: "Minimo 4 caracteres." },
              })}
              onChange={(e) => {
                setDescripcion(e.target.value);
              }}
            />
            <FormErrorMessage>
              {errors.description && errors.description.message}
            </FormErrorMessage>
          </FormControl>
          <Button
            mt={4}
            colorScheme="teal"
            isLoading={isSubmitting}
            onClick={(e) => onSubmit(e)}
          >
            Submit
          </Button>
        </form>
      </HStack>
      <hr />
      <HStack sx={{ padding: "20px 10px" }}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "5",
          }}
        >
          {comentarios.map((comentario, idx) => {
            return (
              <CardBody
                sx={{ minWidth: "300px", boxShadow: "1px 2px 9px #F4AAB9" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Heading size="xs" textTransform="uppercase">
                    {comentario.autor}
                  </Heading>
                  <Text fontSize="sm">{comentario.fecha}</Text>
                </Box>
                <Text pt="2" fontSize="sm">
                  {comentario.descripcion}
                </Text>
              </CardBody>
            );
          })}
        </Card>
      </HStack>
    </Container>
  );
};
export default Comentario;
