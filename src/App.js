import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Mainpage from "./components/Mainpage";

function App() {
  return (
    <BrowserRouter>
    <Mainpage />
    </BrowserRouter>
  );
}

export default App;
