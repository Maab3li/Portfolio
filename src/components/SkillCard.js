import { Box } from "@chakra-ui/react"

export const SkillCard = ({imgSrc, imgAlt}) => {
  return (
    <Box
    w={{base:'70px', md:'90px', xl:'120px'}}
    h={{base:'70px', md:'90px', xl:'120px'}}
    padding={2}
    border='solid'
    borderTopColor='pink.50'
    borderWidth='thin'
    boxShadow='lg'
    bgGradient='linear(to-b,  white, pink.200)'
    _dark={{bgGradient:'linear(to-b, black, gray.200)', borderColor:'gray.900'}}
    >
        <img src={imgSrc} alt={imgAlt} style={{width:'100%', height:'100%'}}/>
    </Box>
  )
}
