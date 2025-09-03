import { CircularProgress, Heading, List, ListIcon, Box, ListItem,Text, VStack, Grid, GridItem, SimpleGrid, Flex, Center, AbsoluteCenter } from "@chakra-ui/react"
import FullScreenSection from "./FullScreenSection"
import { motion, useAnimate, useInView, AnimatePresence } from "motion/react"
import { useEffect, useState } from "react"
import { Skills } from "./Skills"

function About ({words = ["Passion 💥", "Logic 📏", "Focus 🔎","Sense ❕"]}) {

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

        const [index, setIndex] = useState(0)

            useEffect(() => {
                const interval = setInterval(() => {
                setIndex((prevIndex) => (prevIndex + 1) % words.length)
                }, 2500)
                // Clean up interval on unmount
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
                    I'm Maab Ali, I've studied software engineering at Sudan University of Science and Technology. After graduation i spent my time studying, and now iam familiar with many technologies, and Reactjs is my choice 💗.
                </Text>
                <Text
                color='pink.400'
                _dark={{color:'pink.300'}}
                fontWeight='bold'
                pl={8}
                fontSize={25}>
                    As my talents are
                </Text>
                <Text
                textAlign='end'
                pr={{base:20, sm:40, md:60, xl:500}}
                pt={10}
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
                </Text>
            </motion.div>
            
           
        </FullScreenSection>
    )
}

export default About