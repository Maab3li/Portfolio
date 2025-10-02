import { useColorMode, Switch } from "@chakra-ui/react";

const DarkModeSwitch = () => {
    const {colorMode, toggleColorMode} = useColorMode()
    const isDark= colorMode === 'dark'

    return (
        <>
            <Switch
            pos='fixed'
            top='1rem'
            right='1rem'
            mt={{base:2,md:1}}
            htmlFor="dark/light mode switch"
            color='green'
            isChecked={isDark}
            onChange={toggleColorMode}>
            </Switch>
        </>
    )
}

export default DarkModeSwitch