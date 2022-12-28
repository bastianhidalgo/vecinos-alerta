import React from 'react'
import {Button,Stack, Input } from '@chakra-ui/react'

const InputStack = () => {
  return (
   <Stack spacing={5}>
     <Input placeholder='first name'/>
     <Input placeholder='last name'/>
     <Button colorScheme='teal' size='sm'>Submit</Button>
     </Stack>
  )
}

export default InputStack