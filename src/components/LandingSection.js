import React from "react";
import '../App.css'
import { Avatar, HStack, VStack, Box } from "@chakra-ui/react";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import avatar from '../images/Pi7_cropper (1).png'
import FullScreenSection from "./FullScreenSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const greeting = "Hello, I am ";
const myName = "Maab"
const bio1 = "A frontend developer..";
const bio2 = "using React ";
const leftBracket = "<"
const rightBracket = ">"
const icon = faReact

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="white"
    _dark={{backgroundColor:'black'}}
  >
    <VStack gap={10} mt={{base:250,xl:280}} >
      <HStack>
        <Box className="sp" _dark={{color:'white'}}> {leftBracket} </Box>
        <Avatar size='xl' backgroundColor='white' _dark={{backgroundColor:'black'}}>
          <img src={avatar} alt="avatar" style={{borderRadius:'70%'}} />
        </Avatar>
        <Box className="sp" _dark={{color:'white'}}> /{rightBracket} </Box>
      </HStack>
    <Box fontSize='xl' color='#28282B' _dark={{color:'white'}} fontWeight={600}>
      {greeting} <span className="name">{myName + '!'}</span>
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
