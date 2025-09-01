import '../App.css'
import { Avatar, HStack, VStack, Box } from "@chakra-ui/react";
import avatar from '../images/Pngtree—a faceless art_8782179.png'
import { motion, useInView } from 'framer-motion';
import { defineStyle } from '@chakra-ui/react';
import { useRef } from 'react';
import FullScreenSection from "./FullScreenSection";

export default function LandingSection () {
  
const greeting = "Welcome to my portfolio 🌸";
const leftCurlybrace = "{"
const rightBCurlybrace = "}"
const ref = useRef(null);
const isInView = useInView(ref, { once: true });


const ringCss = defineStyle({
  outlineWidth: "2px",
  outlineColor: "pink",
  outlineOffset: "2px",
  outlineStyle: "solid",
})


return(

  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    bgGradient ="linear(to-b, pink.800, pink.400)"
    _dark={{bgGradient:'linear(to-b, black, black)'}}
  >
    <VStack gap={10} mt={150} >
      <HStack>
        
        <Box
        boxSize={{base:'xs'}}>
          <Avatar
          css={ringCss}
          colorPalette="pink"
          size='full' 
          backgroundColor='white' _dark={{backgroundColor:'black'}}>
            <img src={avatar} alt="avatar" style={{borderRadius:'70%'}} />
          </Avatar>
        </Box>
        
      </HStack>
    <Box fontSize='2xl' color='#28282B' _dark={{color:'white'}} fontWeight={600}>
      <h2      
       ref={ref}
       className="text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem]"
      >
      {greeting.split('').map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.2, delay: index * 0.1 }}
        >
          {letter}
        </motion.span>
      ))}
    </h2>
    </Box>
    </VStack>
  </FullScreenSection>
  )
};
