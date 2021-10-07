import Link from "next/link"

import Section from "components/layouts/Section"
import { Button, Typography } from "components/ui"

const HeroArea = () => {
    return (
        <Section className="flex flex-col md:flex-row my-8 md:my-16 lg:my-24 ">
            <div className="flex-1">
                <Typography tag="h1" className="mb-2 md:mb-4 lg:mb-8">
                    Scoala auto la care mergi cu placere
                </Typography>
                <Typography
                    tag="p"
                    className="text-lg lg:text-xl text-gray-400"
                >
                    Cu noi iai usor permisul, lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Doloribus, perspiciatis!
                </Typography>
                <Link href="/contact" passHref>
                    <Button size="lg">Cont</Button>
                </Link>
            </div>
            <div className="flex-1"></div>
        </Section>
    )
}

export default HeroArea
