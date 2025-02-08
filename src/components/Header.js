import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
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
  CloseButton} from "@chakra-ui/react";
import { icon } from "@fortawesome/fontawesome-svg-core";

const socials = [
  {
    name: 'email',
    icon: faEnvelope,
    url: "mailto: maabofficially@gmail.com",
  },
  {
    name:'LinkedIn',
    icon: faLinkedin,
    url: "www.linkedin.com/in/maab-ali-46838b302",
  },
  {
    name:'Github',
    icon: faGithub, 
    url: "https://github.com",
  }
];

const Header = () => {

  const [y, setY] = useState(0)


  const [calculatedY, setCalculatedY] = useState(0)
  const [appearance, setAppearance] = useState(0)


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
  };

  function handleScroll() {
    setY(window.scrollY)
    if(window.scrollY > y) {
      setCalculatedY(0)
      setAppearance('none')
    }
    else if(window.scrollY <= y){
      setCalculatedY('-200px')
      setAppearance('block')
    }
  }
  useEffect(() => {
    window.addEventListener('scroll',handleScroll);
    return () => window.removeEventListener('scroll',handleScroll)
  },[window.scrollY])
  
  function openMenu() {
    document.getElementById('mobile-menu').style.display ='block'
  }

  function closeMenu() {
    document.getElementById('mobile-menu').style.display ='none'
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
      backgroundColor='cyan.50'
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
              <a href={socials[0]['url']} ><FontAwesomeIcon icon= {socials[0]['icon']}/></a>
            </Box>
            <Box color='blackAlpha.600' _dark={{color:'gray.300'}} px={4}>
              <a href={socials[1]['url']} ><FontAwesomeIcon icon= {socials[1]['icon']} /></a>
            </Box>
            <Box color='blackAlpha.600' _dark={{color:'gray.300'}} px={4}>
              <a href={socials[2]['url']} ><FontAwesomeIcon icon= {socials[2]['icon']}/></a>
            </Box>
            </Box>
          </HStack>
            <HStack spacing={8} px={4} display={{base:"none",md:'flex'}}>
              <Box>
                <NavLink className="sections" onClick={handleClick('projects')}>Projects</NavLink>
              </Box>
              <Box>
                <NavLink className ="sections" onClick={handleClick('contactme')}>Contact Me</NavLink>
              </Box>
            </HStack>
            </HStack>
            
            
            <VStack
             id="mobile-menu"
            color="gray.300"
            spacing={12} 
            pt={6} 
            alignContent='center' 
            alignItems='center' 
            textAlign='center' 
            px={4} 
            display={{base:"flex",md:'none'}}>
                <CloseButton
                onClick={closeMenu}
                ml='auto'
                >
                </CloseButton>
              <Box py={2}>
                <NavLink className="sections" onClick={handleClick('projects')}>Projects</NavLink>
              </Box>
              <Box py={2}>
                <NavLink className ="sections" onClick={handleClick('contactme')}>Contact Me</NavLink>
              </Box>

            <Box py={2} px={4}>
              <Box>
              <a href={socials[0]['url']} >{socials[0]['name']}</a>
              </Box>
              <Box>
              <FontAwesomeIcon icon= {socials[0]['icon']} style={{paddingLeft:10}}/>
              </Box>
            </Box>

            <Box py={2} px={4}>
              <Box>
              <a href={socials[1]['url']} >{socials[1]['name']}</a>
              </Box>
              <Box>
              <FontAwesomeIcon icon= {socials[1]['icon']} style={{paddingLeft:10}} />
              </Box>
            </Box>

            <Box py={2} px={4} pb={2}>
              <Box>
              <a href={socials[2]['url']} >{socials[2]['name']}</a>
              </Box>
              <Box>
              <FontAwesomeIcon icon= {socials[2]['icon']} style={{paddingLeft:10}}/>
              </Box>
              
            </Box>
            </VStack>

                <IconButton
                onClick={openMenu}
                display={{base:"flex",md:'none'}}
                pos='fixed'
                top='1rem'
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
