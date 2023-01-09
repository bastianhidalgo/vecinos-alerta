import { useState, useEffect } from 'react'
import { Button,Container,Heading,HStack,Input,Stack,Table,Th,Tr,Td,Thead,Tbody } from '@chakra-ui/react'
import axios from 'axios'
import { useRouter } from 'next/router'


const Index = () => {

    const router = useRouter()


return (
    <>
<Container textAlign="center" maxW="container.xl">
        <Heading as="h1" size="2xl" className="header" textAlign="center" mt="10">Listado de vecinos</Heading>
        <HStack marginTop={"40px"}>
        <Button colorScheme="blue"textAlign="center"  onClick={() => router.push('./listado')}>Funcionalidad Bastian</Button>
        <Button colorScheme="blue"textAlign="center"  onClick={() => router.push('./asamblea')}>Funcionalidad Alexander Y Camilo</Button>
        </HStack>
        </Container>
        </>
        )
}
        export default Index