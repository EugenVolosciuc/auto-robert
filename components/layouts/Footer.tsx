import Logo from "components/misc/Logo"
import Section from "components/layouts/Section"

const Footer = () => {
    return (
        <Section tag="footer" full dark noPadding>
            <Section
                tag="div"
                className="h-16 flex justify-between align-middle"
            >
                <Logo />
            </Section>
        </Section>
    )
}

export default Footer
