import Header from "./Header"
import Footer from "./Footer"
import { ChakraProvider } from "@chakra-ui/react"
import { AlertProvider } from "../context/alertContext"
import Alert from "./Alert"
import FullScreenSection from "./FullScreenSection"

function Details() {

    return(
        <ChakraProvider>
        <AlertProvider>
            <FullScreenSection />
            <Footer />
            <Alert />
        </AlertProvider>
        </ChakraProvider>
    )
}

export default Details