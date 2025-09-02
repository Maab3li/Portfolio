import { Heading, HStack, Image, Text, VStack, Box, Button, color } from "@chakra-ui/react";
import { Link, Routes, Route } from "react-router-dom";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowRotateBackward, faArrowsUpToLine, faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { motion, useScroll } from "motion/react";

const Card = ({ title, description, imageSrc, url }) => {

  const ref = useRef(null)

  const {scrollYProgress} = useScroll({
    target:ref,
    offset:['0 1', '1.20 1']
  })
  
  return (
    <motion.section
    ref={ref}
    style={{
      scale: scrollYProgress,
      opacity: scrollYProgress
    }}
    >
    <HStack
    width='full'
    direction='row'
    >
      <Box
      color='black'
      bgColor='#FFF'
      boxShadow={"xl"}
      _dark={{color:'white',bgColor:'#28282B'}}
      borderRadius={10}>
        <Image src={imageSrc} borderBottomRadius={10} borderTopRadius={10} alt="project image" />
        <Text textAlign='center' fontSize='2xl' fontWeight={600} pt={2}>{title}</Text>
        <Text px={2} py={4} color='gray.600' _dark={{color:'gray.300'}}>{description}</Text>
        <Box>
          
          <Button bgColor='pink.200' _dark={{bgColor:'pink.400'}}>
            <a href={url} target="_blank">Live Demo</a>
            <FontAwesomeIcon icon={faArrowRight} style={{marginLeft:4}}/>
          </Button>
        </Box>
      </Box>
    </HStack>
    </motion.section>
  )
};

export default Card;
