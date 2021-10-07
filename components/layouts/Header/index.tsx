import Logo from "components/misc/Logo"
import Menu from "components/layouts/Header/Menu"
import Section from "../Section"

const Header = () => {
    return (
        <Section
            tag="header"
            className="h-16 flex justify-between align-middle"
            full
            dark
        >
            <Logo />
            <Menu />
        </Section>
    )
}

export default Header
