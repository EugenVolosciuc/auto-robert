import { FC } from "react"

import Header from "components/layouts/Header"
import Footer from "components/layouts/Footer"

const MainLayout: FC = ({ children }) => {
    return (
        <div className="w-full min-h-screen flex flex-col">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
        </div>
    )
}

export default MainLayout
