import Image from "next/image"
import Link from "next/link"

import logo from "/public/assets/auto-robert.png"

const Logo = () => {
    return (
        <Link href="/" passHref>
            <a className="flex items-center">
                <Image
                    src={logo}
                    width={64}
                    height={29}
                    layout="fixed"
                    alt="Logo"
                />
                <p className="ml-2 font-black text-white text-xl tracking-wide">
                    Auto Robert
                </p>
            </a>
        </Link>
    )
}

export default Logo
