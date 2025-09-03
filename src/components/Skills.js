import { Heading, AbsoluteCenter, SimpleGrid, Box } from "@chakra-ui/react"
import FullScreenSection from "./FullScreenSection"
import { SkillCard } from "./SkillCard"
import html from '../images/HTML5.png'
import css from '../images/CSS3.png'
import js from '../images/JavaScript.png'
import react from '../images/React.png'
import django from '../images/Django.png'
import python from '../images/Python.png'
import tailwind from '../images/Tailwind CSS.png'
import github from '../images/GitHub.png'
import vsgithub from '../images/GitHub Codespaces.png'

export const Skills = () => {
  return (
    <Box
    pt={{base:32}}
    bgGradient="linear(to-b, white, white)"
    _dark={{bgGradient:'linear(to-b, black, black)'}}>
        <FullScreenSection
                bgGradient="linear(to-b, white, white)"
                _dark={{bgGradient:'linear(to-b, black, black)'}}
                isDarkBackground
                alignItems="flex-start"
                spacing={8}
                >
                <Heading 
                as="h1" 
                pl={8}
                color='#28282B' 
                _dark={{color:'#FFF'}}>
                My technical skills
                </Heading>
                <AbsoluteCenter
                axis="horizontal"
                >
                    <SimpleGrid
                    p={8}
                    mt={20}
                    gridColumnGap={{base:20}}
                    gridRowGap={{base:6, md:10}}
                    alignItems='flex-center'
                    justifyContent='center'
                    columns={{base:2, sm:3, md:4, lg:5}}
                    spacing={8}
                    >
                        <SkillCard imgSrc={html} imgAlt='HTML5 icon' />
                        <SkillCard imgSrc={css} imgAlt='CSS3 icon' />
                        <SkillCard imgSrc={js} imgAlt='Javascript icon' />
                        <SkillCard imgSrc={react} imgAlt='React icon' />
                        <SkillCard imgSrc={django} imgAlt='Django icon' />
                        <SkillCard imgSrc={python} imgAlt='Python icon' />
                        <SkillCard imgSrc={tailwind} imgAlt='Tailwind icon' />
                        <SkillCard imgSrc={github} imgAlt='Github icon' />
                        <SkillCard imgSrc={vsgithub} imgAlt='VSGithub icon' />
                    </SimpleGrid> 
                </AbsoluteCenter>
            </FullScreenSection>
        </Box>
    )
}
