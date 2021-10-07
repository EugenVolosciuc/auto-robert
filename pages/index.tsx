import type { NextPage } from "next"

import MainLayout from "components/layouts/MainLayout"
import HeroArea from "components/sections/HeroArea"

const Home: NextPage = () => {
    return (
        <MainLayout>
            <HeroArea />
        </MainLayout>
    )
}

export default Home
