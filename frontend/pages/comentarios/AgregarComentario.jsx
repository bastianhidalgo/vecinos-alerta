import { useState } from "react";
import { Button, Container, Heading, HStack, Stack } from "@chakra-ui/react";
import { createComentario } from "../../data/comentario";
import InputForm from "../../components/InputForm";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

const AgregarComentarios = () => {
  const [comentario, setComentario] = useState({
    autor: "",
    descripcion: "",
    fecha: "",
  });

  const handleChange = (e) => {
    setComentario({
      ...comentario,
      [e.target.name]: e.target.value,
    });
  };
  const submitcomentario = async (e) => {
    e.preventDefault();
    console.log(comentario);
    const response = await createComentario(comentario);

    Swal.fire({
      icon: "success",
      title: "comentario agregado",
      showConfirmButton: true,
      text: "El comentario se agregó correctamente",
    });
  };

  const router = useRouter();
  return (
    <Container maxW="container.xl" mt={10}>
      <Stack spacing={4} mt={10}>
        <HStack>
          <InputForm
            label="Autor"
            handleChange={handleChange}
            name="autor"
            placeholder="Autor"
            type="text"
            value={comentario.autor}
          />
          <InputForm
            label="Fecha"
            handleChange={handleChange}
            name="fecha"
            placeholder="Fecha"
            type="date"
            value={comentario.fecha}
          />
          <InputForm
            label="Descripcion"
            handleChange={handleChange}
            name="descripcion"
            placeholder="Descripcion"
            type="text"
            value={comentario.descripcion}
          />
        </HStack>
      </Stack>
      <HStack>
        <Button colorScheme="blue" mt={10} mb={10} onClick={submitcomentario}>
          Crear
        </Button>
      </HStack>
    </Container>
  );
};
export default AgregarComentarios;
