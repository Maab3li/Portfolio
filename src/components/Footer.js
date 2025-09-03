import React from "react";
import {Box, Flex, Text} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box 
    backgroundColor="pink.600"
    _dark={{backgroundColor:"#28282B"}}>
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          <Text
          fontSize={20}
          fontWeight='bold'> Made with Chakra UI and Reactjs - Dev Maab Ali 2025</Text>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
