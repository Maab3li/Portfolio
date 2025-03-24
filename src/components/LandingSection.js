import React from "react";
import '../App.css'
import { Avatar, Heading, HStack, VStack, Wrap, WrapItem, Box, background } from "@chakra-ui/react";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import avatar from '../images/Pi7_cropper (1).png'
import FullScreenSection from "./FullScreenSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const greeting = "Hello, I am Maab!";
const bio1 = "A frontend developer..";
const bio2 = "using React ";
const icon = faReact

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    bgGradient="linear(pink.500, cyan.100)"
    _dark={{bgGradient:'linear(black, gray.400)'}}
  >
    <VStack gap={10} mt={{base:250,xl:280}} >
    <Avatar size='xl'>
      <img src={avatar} alt="avatar" style={{borderRadius:'70%', backgroundColor:'gray'}} />
    </Avatar>
    <Box fontSize='xl' color='#28282B' _dark={{color:'white'}} fontWeight={600}>
      {greeting}
    </Box>
    <Box fontSize='2xl' color='#28282B' _dark={{color:'white'}} fontWeight={600}>
      {bio1}
    </Box>
    <Box fontSize='2xl' color='#28282B' _dark={{color:'white'}} fontWeight={600}>
      {bio2}<FontAwesomeIcon icon={icon} color="cyan" className="loader"/>
    </Box>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
