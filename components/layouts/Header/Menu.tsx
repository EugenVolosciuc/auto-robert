import Link from "next/link"

import { Button } from "components/ui"

const menuItems = [
    {
        label: "Galerie",
        href: "/galerie",
    },
    {
        label: "Contacteaza-ne",
        href: "/contact",
    },
]
const Menu = () => {
    return (
        <ul className="flex items-center">
            {menuItems.map((menuItem, index) => (
                <Link href={menuItem.href} key={"menu-link-" + index} passHref>
                    <Button
                        size="md"
                        type="link"
                        className="ml-4 lg:ml-6"
                        tag="a"
                    >
                        {menuItem.label}
                    </Button>
                </Link>
            ))}
        </ul>
    )
}

export default Menu
