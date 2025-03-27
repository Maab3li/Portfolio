import { Heading, List, ListIcon, ListItem,Text } from "@chakra-ui/react"
import FullScreenSection from "./FullScreenSection"


function About () {
    
    return (
        <FullScreenSection
        backgroundColor="white"
        _dark={{backgroundColor:'black'}}
        isDarkBackground
        p={8}
        alignItems="flex-start"
        spacing={8}
        >
            <Heading as="h1" id="about&skills-section" color='#28282B' _dark={{color:'#FFF'}}>
            About
            </Heading>
            <Text color="#28282B" _dark={{color:'#FFF'}}>I'm Maab Ali Osman , i was born in Sudan and i still live there, i've studied software engineering at Sudan University of Science and Technology, after graduating i kept leveling my skills up through learning several skills, and now iam familiar with React, Tailwindcss and many React libraries.</Text>
            <Text color="#28282B" _dark={{color:'#FFF'}}>At the time, i focus on leveraging my skills as a frontend developer, and to get a wide connection with creative frontend developers to share knowledge and experience.  </Text>
            <Heading as="h1" color='#28282B' _dark={{color:'#FFF'}}>
            Skills
            </Heading>
            <List>
            <ListItem color='#28282B' _dark={{color:'#FFF'}}><ListIcon/>HTML</ListItem>
            <ListItem color='#28282B' _dark={{color:'#FFF'}}><ListIcon/>CSS3</ListItem>
            <ListItem color='#28282B' _dark={{color:'#FFF'}}><ListIcon/>Javasript</ListItem>
            <ListItem color='#28282B' _dark={{color:'#FFF'}}><ListIcon/>React</ListItem>
            <ListItem color='#28282B' _dark={{color:'#FFF'}}><ListIcon/>Tailwindcss</ListItem>
            <ListItem color='#28282B' _dark={{color:'#FFF'}}><ListIcon/>Github</ListItem>

            </List>
        </FullScreenSection>
    )
}

export default About