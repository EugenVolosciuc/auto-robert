import Logo from "components/misc/Logo"
import Section from "components/layouts/Section"

const Footer = () => {
    return (
        <Section
            className="h-16 flex justify-between align-middle"
            tag="footer"
            full
            dark
        >
            <Logo />
        </Section>
    )
}

export default Footer
