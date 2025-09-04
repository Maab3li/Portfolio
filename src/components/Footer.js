import React from "react";
import {Box, Flex, Text} from "@chakra-ui/react";
import { TextAnimation } from "../Features/TextAnimation";

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
          <TextAnimation>
            <Text
            fontSize={15}
            fontWeight='bold'> 
              Cooked with Reactjs and Chakra UI & Maab Ali 2025
            </Text>
          </TextAnimation>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
