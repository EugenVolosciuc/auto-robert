import { FC } from "react"

type Props = {
    tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"
    weight?: "light" | "normal" | "semibold" | "bold" | "black"
    className?: string
}

const Typography: FC<Props> = ({
    children,
    tag: Tag = "p",
    weight,
    className: customClassName = "",
}) => {
    const getTagClassName = () => {
        switch (Tag) {
            case "h1":
                return `font-${
                    weight ? weight : "black"
                } text-4xl sm:text-5xl lg:text-6xl`
            case "h2":
                return `font-${
                    weight ? weight : "bold"
                } text-3xl sm:text-4xl lg:text-5xl`
            case "h3":
                return `font-${
                    weight ? weight : "bold"
                } text-2xl sm:text-3xl lg:text-4xl`
            case "h4":
                return `font-${
                    weight ? weight : "bold"
                } text-xl sm:text-2xl lg:text-3xl`
            case "h5":
                return `font-${
                    weight ? weight : "bold"
                } text-lg sm:text-xl lg:text-2xl`
            case "h6":
                return `font-${
                    weight ? weight : "bold"
                } text-base sm:text-lg lg:text-xl`
            case "p":
            case "span":
                return `font-${weight ? weight : "normal"}`
        }
    }

    const className = `${getTagClassName()} ${customClassName}`

    return <Tag className={className}>{children}</Tag>
}

export default Typography
