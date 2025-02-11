import { Heading, HStack, Image, Text, VStack, Box, Button, color } from "@chakra-ui/react";
import { Link, Routes, Route } from "react-router-dom";
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
        <Text textAlign='center' fontSize='2xl' fontWeight={600} pt={2}>{title}</Text>
        <Text px={2} py={4} color='gray.600' _dark={{color:'gray.300'}}>{description}</Text>
      </Box>
    </HStack>
    
  )
};

export default Card;
