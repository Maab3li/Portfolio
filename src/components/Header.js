import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { animate, AnimatePresence, motion } from "framer-motion"
import '../App.css'
import DarkModeSwitch from "./DarkModeSwitch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { HamburgerIcon, MenuIcon } from "@chakra-ui/icons";
import { Box, HStack, VStack,
  MenuItem, 
  IconButton,
  CloseButton,
  transition} from "@chakra-ui/react";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { easeInOut } from "motion";

const socials = [
  {
    name: 'email',
    icon: faEnvelope,
    url: "mailto: maabofficially@gmail.com",
  },
  {
    name:'LinkedIn',
    icon: faLinkedin,
    url: "https://linkedin.com/in/maab-ali-46838b302",
  },
  {
    name:'Github',
    icon: faGithub, 
    url: "https://github.com/Maab3li",
  }
];

const Header = () => {

  const [y, setY] = useState(0)

  const [calculatedY, setCalculatedY] = useState('-200px')

  const [mobileMenuOpened, setMobileMenuOpened] = useState(false)


  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      element.scrollTo({
        behavior: "smooth",
        block: "start",
      });
    }
    const mobileMenu = document.getElementById('mobile-menu')
    if (mobileMenu) {
      toggleMenu()
    }
    else { return }
  };

  useEffect(() => {
    window.addEventListener('scroll',handleScroll);
    return () => window.removeEventListener('scroll',handleScroll)
  },[window.scrollY])

  function handleScroll() {
    setY(window.scrollY)
    if(window.scrollY >= y) {
      setCalculatedY(0)
    }
    else if(window.scrollY < y){
      setCalculatedY('-200px')
    }
  }

  function toggleMenu() {
    setMobileMenuOpened(!mobileMenuOpened)
  }

  const menuVars = {
    initial : {
      scaleY: 0
    },
    animate : {
      scaleY: 1,
      transition: {
        duration: 0.3,
        easeInOut: [.01,0,0.39,0]
      }
    },
    exit : {
      scaleY: 0,
      transition: {
        duration: 0.3,
        easeInOut: [0.12,0,0.39,1]
      }
    }
  }

  return (
    <Box
      position="fixed"
      height='fit-content'
      py={{base:4,md:0}}
      top={0}
      left={0}
      right={0}
      transform={calculatedY === 0? "translateY(-200px)" : "translateY(0)"}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor='pink.400'
      _dark={{bg:'#28282B'}}
      zIndex='9999'
    >
      <Box color="blackAlpha.600" _dark={{color:'gray.300'}} fontWeight='bold' w="100%" margin="0 auto">
        <HStack
          px={16}
          spacing='20px'
          py={4}
          justifyContent="space-between"
          alignItems="center"
          display="flex" 
        >
          <HStack id="menu" direction='row' spacing={12}>
            <Box display={{base:"none",md:'flex'}}>
            <Box color='blackAlpha.600' _dark={{color:'gray.300'}} px={4}>
              <a href={socials[0]['url']} target="_blank"><FontAwesomeIcon icon= {socials[0]['icon']}/></a>
            </Box>
            <Box color='blackAlpha.600' _dark={{color:'gray.300'}} px={4}>
              <a href={socials[1]['url']} target="_blank"><FontAwesomeIcon icon= {socials[1]['icon']} /></a>
            </Box>
            <Box color='blackAlpha.600' _dark={{color:'gray.300'}} px={4}>
              <a href={socials[2]['url']} target="_blank"><FontAwesomeIcon icon= {socials[2]['icon']}/></a>
            </Box>
            </Box>
          </HStack>
            <HStack spacing={8} px={4} display={{base:"none",md:'flex'}}>
              <Box>
                <NavLink className ="sections" onClick={handleClick('about&skills')}>About&Skills</NavLink>
              </Box>
              <Box>
                <NavLink className="sections" onClick={handleClick('projects')}>Projects</NavLink>
              </Box>
              <Box>
                <NavLink className ="sections" onClick={handleClick('contactme')}>Contact</NavLink>
              </Box>
            </HStack>
            </HStack>
            <AnimatePresence>
          {mobileMenuOpened && (
           <motion.div
           variants ={menuVars}
            initial = 'initial'
           animate = 'animate'
           exit = 'exit'
           className="origin-top">
            <VStack
            id="mobile-menu"
           color="gray.700"
           _dark={{color:'gray.300'}}
           spacing={20}  
           alignContent='center' 
           alignItems='center' 
           textAlign='center' 
           px={6}
           height='100vh'
           display={{base:"block",md:"none"}}
            >
              <CloseButton
              onClick={toggleMenu}
              ml='70%'
              className="absolute"
                >
                </CloseButton>
                <Box py={6}>
                <NavLink className ="sections" onClick={handleClick('about&skills')}>About&Skills</NavLink>
              </Box>
              <Box py={6}>
                <NavLink className="sections" onClick={handleClick('projects')}>Projects</NavLink>
              </Box>
              <Box py={6}>
                <NavLink className ="sections" onClick={handleClick('contactme')}>Contact</NavLink>
              </Box>


            <Box py={6} px={4}>
              <Box>
              <a href={socials[0]['url']} target="_blank">{socials[0]['name']}</a>
              </Box>
              <Box>
              <FontAwesomeIcon icon= {socials[0]['icon']} style={{paddingLeft:10}}/>
              </Box>
            </Box>

            <Box py={6} px={4}>
              <Box>
              <a href={socials[1]['url']} target="_blank">{socials[1]['name']}</a>
              </Box>
              <Box>
              <FontAwesomeIcon icon= {socials[1]['icon']} style={{paddingLeft:10}} />
              </Box>
            </Box>

            <Box py={6} px={4} pb={2}>
              <Box>
              <a href={socials[2]['url']} target="_blank">{socials[2]['name']}</a>
              </Box>
              <Box>
              <FontAwesomeIcon icon= {socials[2]['icon']} style={{paddingLeft:10}}/>
              </Box>
              
            </Box>
            </VStack>
            </motion.div>
          )
             }
             </AnimatePresence>
                <IconButton
                onClick={toggleMenu}
                display={{base:"flex",md:'none'}}
                pos='fixed'
                top='1rem'
                color='gray.900'
                right='4rem'
                size='sm'
                p={4}
                aria-label="open menu"
                ml='auto'
                icon={<HamburgerIcon />}
                 />
            <DarkModeSwitch />
      </Box>
    </Box>
  );
};

export default Header;
