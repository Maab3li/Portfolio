import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeProvider } from "@chakra-ui/react";
import Header from "./Header";
import LandingSection from "./LandingSection";
import About from "./About";
import ProjectsSection from "./ProjectsSection";
import ContactMeSection from "./ContactMeSection";
import Footer from "./Footer";
import { AlertProvider } from "../context/alertContext";
import Alert from "./Alert";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Skills } from "./Skills";

function Mainpage() {

    return (
        <ChakraProvider>
      <AlertProvider>
          <Header />
          <LandingSection />
          <About />
          <Skills />
          <ProjectsSection />
          <ContactMeSection />
          <Footer />
          <Alert />
      </AlertProvider>
    </ChakraProvider>
    )
}

export default Mainpage

