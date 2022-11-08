import {
  Box,
  Stack,
  Heading,
  Text,
  Input,
  Button,
  Select,
  Grid,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useToast,
  FormControl
} from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";

const BetForm = (props) => {


  return (
    <Stack
      bg={'gray.50'}
      rounded={'xl'}
      p={{ base: 4, sm: 6, md: 8 }}
      spacing={{ base: 8 }}
      maxW={{ lg: 'lg' }}>
      <Stack spacing={4}>
        <Heading
          color={'gray.800'}
          lineHeight={1.1}
          fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
          Carga tu apuesta
          <Text
            as={'span'}
            background={'#67E992'}
            bgClip="text">
            !
          </Text>
        </Heading>
        <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
          Haz las apuestas que quieras
        </Text>
      </Stack>
      <form onSubmit={()=>alert("apostador")}>
        {/* <Box as={'form'} mt={10}> */}

        <Stack spacing={4}>


          <Grid templateColumns='repeat(2, 1fr)' gap={5}>
            <Text align={'center'} >
              Apuesta que quiera hacer
            </Text>
            <Input placeholder="Apuesta" size="md" type="date" />
          </Grid>
          <Grid templateColumns='repeat(2, 1fr)' gap={5}>
            <Text align={'center'} >
              address
            </Text>
            <FormControl isRequired>
              <Input
                placeholder="0x3434....3434"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
              />
            </FormControl>
          </Grid>


        </Stack>
        <Button
          type="submit"
          //onClick={submitForm}
          fontFamily={'heading'}
          mt={8}
          w={'full'}
          background={'#67E992'}
          color={'white'}
          _hover={{
            boxShadow: 'xl',
          }}>
          Apostar
        </Button>
        {/* </Box> */}
      </form>
    </Stack>

  );
};

export default BetForm;