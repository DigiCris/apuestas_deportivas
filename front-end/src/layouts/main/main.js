import { useRef } from 'react'
import { useEffect } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Text,
  Show,
  Button,
  Divider,
  Image,
  Heading,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, QuestionIcon } from "@chakra-ui/icons";
import NavLink from "./nav-link/nav-link";
import WalletData from "./wallet-data/wallet-data";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';

const Links = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "My Bets",
    to: "/my-bets",
  },
  {
    name: "Set Bets",
    to: "/set-bet",
  },
  {
    name: "Bet",
    to: "/bet",
  },
];

const MainLayout = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef()


  return (
    <Flex minH="100vh" direction="column">
      <Box
        mx="auto"
        maxW={"7xl"}
        width="100%"
        bg={useColorModeValue("white", "gray.800")}
        px={4}
      >
        <Flex
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ lg: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={2} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", lg: "flex" }}
            >
              {Links.map(({ name, to }) => (
                <NavLink key={name} to={to}>
                  {name}
                </NavLink>
              ))}
            </HStack>
            </HStack>
            <Flex alignItems="center">
              <Heading size="md" mt={0.2}>
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2lZ0TCD_Z7wrrorrc05q9CWwAmuXp1UIWBj15GN-83IuAZ1eApAB8OmeF9CzTMf_hiN4&usqp=CAU" alt="Jueging" width="150px" />
              </Heading>
            </Flex>
         
          <Show above='lg'>

          </Show>
          <WalletData />
        </Flex>

        {isOpen ? (
        <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>  <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2lZ0TCD_Z7wrrorrc05q9CWwAmuXp1UIWBj15GN-83IuAZ1eApAB8OmeF9CzTMf_hiN4&usqp=CAU" alt="Jueging" width="160px" mt="20px" />
          <DrawerCloseButton mt={6}/>
          </DrawerHeader>

          {/* For the categories, just to show this working, i used ul tag, but this may be replaced by a navlink */}
          <DrawerBody color={'gray.500'}>

            <Flex flexDir="column" align="left">
              {Links.map(({ name, to }) => (
                <NavLink key={name} to={to}>
                  {name}
                </NavLink>
              ))}
            </Flex>

            <Flex flexDir="column" align="left" mt={10}>
            <div>Quieres publicar una oferta?</div>
          <Button
            background={'#67E992'}
            color={'white'}
            _hover={{

              boxShadow: 'xl',
            }}
            onClick={onOpen}>
            Crear Cupón
          </Button>
          <Divider my={8}/>
         
            </Flex>
          </DrawerBody>

          <DrawerFooter borderTopWidth='1px' justify={'flex-start'}>
          <Flex flexDir="row" align="center" color={'gray.500'}>
            <QuestionIcon/><Text ml='2'>Ayuda</Text>
          </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
        ) : null}
      </Box>
      <Box mx="auto" flex={1} p={4} maxW={"7xl"} width="100%">
        {children}
      </Box>
    </Flex>
  );
};

export default MainLayout;
