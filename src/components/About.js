import { CircularProgress, Heading, List, ListIcon, Box, ListItem,Text, VStack } from "@chakra-ui/react"
import FullScreenSection from "./FullScreenSection"
import { motion, useAnimate, useInView } from "motion/react"
import { useEffect, useState } from "react"
import tree from '../images/نص_فقرتك__1_-removebg-preview (1).png'

function About () {

  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)

  console.log(isInView)
  
  const [animation, setAnimation] = useState('')

      const textVariants = {
      hidden: { opacity: 0, y: 20 }, // Initially invisible and slightly below its final position
      visible: { opacity: 1, y: 0, transition: { duration: .5 } }, // Fully visible and in its final position
    };

    useEffect(() => {
        if(isInView) {
            setAnimation(textVariants.visible)
        }
        if(!isInView) {
            setAnimation(textVariants.hidden)
        }
    },[isInView])
    return (
        <FullScreenSection
        bgGradient="linear(to-b, white, white)"
        _dark={{bgGradient:'linear(to-b, black, black)'}}
        isDarkBackground
        alignItems="flex-start"
        spacing={8}
        >
            <motion.div
            ref={scope}
            variants={textVariants}
            initial="hidden"
            animate= {animation}
            style={{overflow:'scroll'}}
            >
                <Heading 
                as="h1" 
                id="about&skills-section" 
                pl={8}
                pt={8}
                color='#28282B' 
                _dark={{color:'#FFF'}}>
                About me
                </Heading>
                <Text 
                pl={8}
                color="#28282B" 
                _dark={{color:'#FFF'}} 
                fontSize={25}>
                    I'm Maab Ali, I've studied software engineering at Sudan University of Science and Technology. After graduation i spent my time studying, and now iam familiar with many technologies, and Reactjs is my choice.
                </Text>
            </motion.div>
            <motion.div>
            <Heading 
            as="h1" 
            pl={8}
            color='#28282B' 
            _dark={{color:'#FFF'}}>
            My skills
            </Heading>
            <Box
            p={0}
            >
                <img 
                width='100%'
                height='100%'
                src={tree} 
                alt="skills tree" />
            </Box>
            </motion.div>
        </FullScreenSection>
    )
}

export default About