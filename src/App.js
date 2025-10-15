import { ChakraProvider } from "@chakra-ui/react";
import { AlertProvider } from "./context/alertContext";
import Header from "./components/Header";
import LandingSection from "./pages/LandingSection";
import About from "./pages/About";
import { Skills } from "./pages/Skills";
import ProjectsSection from "./pages/ProjectsSection";
import ContactMeSection from './pages/ContactMeSection';
import Footer from "./components/Footer";
import Alert from "./components/Alert";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
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
    </HashRouter>
  );
}

export default App;
