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
      <Text textAlign='center' fontSize='xl' pt={2}>{title}</Text>
      <Text px={2} py={4}>{description}</Text>
      <Text px={2} pb={2}>View more details <FontAwesomeIcon icon={faArrowRight} style={{paddingLeft:4}} /></Text>
      </Box>
    </HStack>
  )
};

export default Card;
