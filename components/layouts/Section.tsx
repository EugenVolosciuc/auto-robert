import { FC } from "react"

type Props = {
    full?: boolean
    dark?: boolean
    noPadding?: boolean
    className?: string
    tag?: "section" | "header" | "footer" | "div"
}

const baseClassName = "relative w-full m-auto max-w-none"

const Section: FC<Props> = ({
    children,
    tag: Tag = "section",
    full = false,
    dark = false,
    noPadding = false,
    className: customClassName = "",
}) => {
    const className = `${baseClassName} ${
        full ? "" : "md:max-w-4xl lg:max-w-5xl xl:max-w-7xl"
    } ${dark ? "bg-primary-700" : ""} ${
        noPadding ? "" : "p-4 md:p-6"
    } ${customClassName}`

    return <Tag className={className}>{children}</Tag>
}

export default Section
