import Logo from "components/misc/Logo"
import Menu from "components/layouts/Header/Menu"
import Section from "../Section"

const Header = () => {
    return (
        <Section tag="header" full dark noPadding>
            <Section
                tag="div"
                className="h-16 flex justify-between align-middle"
            >
                <Logo />
                <Menu />
            </Section>
        </Section>
    )
}

export default Header
