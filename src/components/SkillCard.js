import { Box } from "@chakra-ui/react"

export const SkillCard = ({imgSrc, imgAlt}) => {
  return (
    <Box
    padding={2}
    border='solid'
    borderTopColor='pink.50'
    borderWidth='thin'
    boxShadow='lg'
    bgGradient='linear(to-b,  white, pink.200)'
    _dark={{bgGradient:'linear(to-b, black, gray.200)', borderColor:'gray.900'}}
    >
        <img src={imgSrc} rel={imgAlt} style={{width:'100px', height:'100px'}}/>
    </Box>
  )
}
