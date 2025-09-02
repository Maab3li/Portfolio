import { CircularProgress, Heading, List, ListIcon, Box, ListItem,Text } from "@chakra-ui/react"
import FullScreenSection from "./FullScreenSection"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState, useEffect } from "react"
import tree from '../images/نص_فقرتك__1_-removebg-preview (1).png'
import { faArrowAltCircleRight, faCheckSquare, faCircle, faCircleArrowRight, faDotCircle, faListDots } from "@fortawesome/free-solid-svg-icons"


function About () {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => (seconds === 100 ? 0 : seconds + 10));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
    
    return (
        <FullScreenSection
        bgGradient="linear(to-b, pink.400, pink.400)"
        _dark={{bgGradient:'linear(to-b, black, black)'}}
        isDarkBackground
        alignItems="flex-start"
        spacing={8}
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
                Hi there I'm Maab Ali, I've studied software engineering at Sudan University of Science and Technology. After graduation i spent my time studying, and now iam familiar with many technologies, and Reactjs is my specialization.
            </Text>
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
        </FullScreenSection>
    )
}

export default About