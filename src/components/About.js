import { Heading, List, ListIcon, ListItem,Text } from "@chakra-ui/react"
import FullScreenSection from "./FullScreenSection"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowAltCircleRight, faCheckSquare, faCircle, faCircleArrowRight, faDotCircle, faListDots } from "@fortawesome/free-solid-svg-icons"


function About () {
    
    return (
        <FullScreenSection
        bgGradient="linear(to-b, pink.400, pink.400)"
        _dark={{bgGradient:'linear(to-b, black, black)'}}
        isDarkBackground
        p={8}
        alignItems="flex-start"
        spacing={8}
        >
            <Heading as="h1" id="about&skills-section" color='#28282B' _dark={{color:'#FFF'}}>
            About me
            </Heading>
            <Text color="#28282B" _dark={{color:'#FFF'}} fontSize={25}>Hi there I'm Maab Ali, I've studied software engineering at Sudan University of Science and Technology. After graduation i spent my time studying, and now iam familiar with many technologies, and Reactjs is my specialization.</Text>
            <Text color="#28282B" _dark={{color:'#FFF'}}></Text>
            <Heading as="h1" color='#28282B' _dark={{color:'#FFF'}}>
            My skills
            </Heading>
            <List
            fontSize={25}>
            <ListItem color='#28282B' _dark={{color:'#FFF'}}><FontAwesomeIcon icon={faCircle} style={{paddingRight:2}} width={10} height={10}/>HTML</ListItem>
            <ListItem color='#28282B' _dark={{color:'#FFF'}}><FontAwesomeIcon icon={faCircle} style={{paddingRight:2}} width={10} height={10}/>CSS3</ListItem>
            <ListItem color='#28282B' _dark={{color:'#FFF'}}><FontAwesomeIcon icon={faCircle} style={{paddingRight:2}} width={10} height={10}/>Javasript</ListItem>
            <ListItem color='#28282B' _dark={{color:'#FFF'}}><FontAwesomeIcon icon={faCircle} style={{paddingRight:2}} width={10} height={10}/>React</ListItem>
            <ListItem color='#28282B' _dark={{color:'#FFF'}}><FontAwesomeIcon icon={faCircle} style={{paddingRight:2}} width={10} height={10}/>Tailwindcss</ListItem>
            <ListItem color='#28282B' _dark={{color:'#FFF'}}><FontAwesomeIcon icon={faCircle} style={{paddingRight:2}} width={10} height={10}/>Github</ListItem>

            </List>
        </FullScreenSection>
    )
}

export default About