import { Heading, HStack, Image, Text, VStack, Box, Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <HStack
    width='full'
    direction='row'
    >
      <Box
      color='black'
      bgColor='#FFF'
      _dark={{color:'white',bgColor:'#28282B'}}
      borderRadius={10}>
      <Image src={imageSrc} borderBottomRadius={10} borderTopRadius={10} alt="project image" />
      <Text textAlign='center' fontSize='2xl' fontWeight='600' color='gray.800' _dark={{color:'#FFF'}} pt={2}>{title}</Text>
      <Text px={2} py={4} color='gray.600' _dark={{color:'#FFF'}}>{description}</Text>
      <Text px={2} pb={2} color='gray.600' _dark={{color:'#FFF'}}>View more details<FontAwesomeIcon icon={faArrowRight} style={{paddingLeft:4}} /></Text>
      </Box>
    </HStack>
  )
};

export default Card;
