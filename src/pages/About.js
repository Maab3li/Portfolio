import { Heading, Box, Text } from "@chakra-ui/react"
import FullScreenSection from "../components/FullScreenSection"
import { TextAnimation } from "../Features/TextAnimation"
import { motion, AnimatePresence } from "motion/react"
import { useEffect, useState } from "react"

function About ({words = ["Passion 💥", "Logic 📏", "Focus 🔎","Sense ❕"]}) {

    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % words.length)
        }, 2500)
                return () => clearInterval(interval)
    }, [])
   
    return (
        <FullScreenSection
        bgGradient="linear(to-b, white, white)"
        _dark={{bgGradient:'linear(to-b, black, black)'}}
        isDarkBackground
        alignItems="flex-start"
        spacing={8}
        >
            <TextAnimation>
                <Heading 
                as="h1" 
                id="about&skills-section" 
                pl={8}
                pt={8}
               
                color='black' 
                _dark={{color:'#FFF'}}>
                About me
                </Heading>
                </TextAnimation>
                <Text
                px={8}
                color='black'
                _dark={{color:'white'}}
                fontSize={30}>
                    
                    <TextAnimation
                    children="I'm Maab Ali, I've studied software engineering at Sudan University of Science and Technology. After graduation i attended multiple courses, and now iam familiar with some technologies, but Reactjs is my choice 💗."
                    />
                </Text>
                <Text
                color='pink.400'
                _dark={{color:'pink.300'}}
                fontWeight='bold'
                px={14}
                fontSize={30}>
                    <TextAnimation
                    children='As my talents are' />
                </Text>
                <Box
                pl={{base:'50vw'}}
                pt={{base:10, xl:20}}
                color='black'
                _dark={{color:'white'}}
                fontSize={{base:40, md:50, lg:60}}>
                    <AnimatePresence mode="wait">
                        <motion.p
                        key={words[index]}
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 40 }}
                        transition={{ duration: 0.5 }}
                        >
                        {words[index]}
                        </motion.p>
                    </AnimatePresence>
                </Box>
        </FullScreenSection>
    )
}

export default About