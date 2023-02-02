import { Box, Button, Flex, Heading, HStack, Icon, Stack,StackProps,Text} from "@chakra-ui/react";
import {CheckIcon, MoneyBack30,free,monthly} from './icons/Icon';


export const ListItem=(props:StackProps)=>{
  const {children,...rest}=props;
  return (
    <HStack as='li' spacing='20px' {...rest}>
    <Icon as ={CheckIcon} w='22px' h='22px' />
    <Text >{children}</Text>
  </HStack>
  )
}
export const List1=(props:StackProps)=>{
  const {children,...rest}=props;
  return (
    <HStack spacing='20px'>
    <Icon as ={MoneyBack30} w='32px' h='32px' />
    <Text >{children}</Text>
  </HStack>
  )
}
export const List2=(props:StackProps)=>{
  const {children,...rest}=props;
  return (
    <HStack spacing='20px' ml="60px">
    <Icon as ={free} w='32px' h='32px' />
    <Text >{children}</Text>
  </HStack>
  )
  }

  export const List3=(props:StackProps)=>{
    const {children,...rest}=props;
    return (
      <HStack spacing='20px' ml="60px">
      <Icon as ={monthly} w='32px' h='32px' />
      <Text >{children}</Text>
    </HStack>
    )
  }
function Home() {
  return  (
    <><header>
      <Box fontFamily="sans-serif" bg="purple.500" color="#f7fafc" pt="80PX" pb="180px" px="32px" textAlign={"center"}>
        <Heading fontWeight='800' fontSize="48px">Sample pricing  for your business</Heading>
        <Text pt="16px" fontWeight='400' fontSize="24px"> Plans that are carefully crafted to suit your buainess</Text>
      </Box>
      <Box mb={"20px"}></Box>
    </header>
    <Box maxW={'994px'} margin="auto" marginTop="-150px" borderRadius="12px" overflow={"hidden"}>
   <Flex>
<Box bg="#f0eafb" p='60px'>
<Text fontSize={"24px"} fontWeight="800">
  Premium PRO
</Text>
<Heading as={"h3"} fontSize="60px" mt={"16px"}>
  $329
</Heading>
<Text color={"#171923"} fontSize="18px"  fontWeight="500" mt="8px">billed just once</Text>
<Button colorScheme='purple' size={"lg"} w="280px" mt="24px">
  Get Started
</Button>
</Box>
<Box  bg="white"p="60px" fontSize={"18px"} >
  Access these features  when you get this pricing package for your business
<Stack as='ul' mt='22px' spacing='20px'>
  <ListItem> International calling and messaging API</ListItem>
  <ListItem> Additional Phone Numbers </ListItem>
  <ListItem> Automated messages via Zapier</ListItem>
  <ListItem> 24/7 support and consulting</ListItem>
</Stack>
</Box>

    </Flex>
    <HStack ml='40px'mt='40px' spacing='20px' fontWeight={"bold"}>
 <List1 >30 days money back <br/> Guarantee </List1>
 <HStack >
  <List2>No setup fees <br/> 100% hassle-free</List2>
 </HStack>
 <HStack>
  <List3>No monthly subscription Pay once for all</List3>
 </HStack>
  </HStack>
 </Box></>
  )
}
export default Home

