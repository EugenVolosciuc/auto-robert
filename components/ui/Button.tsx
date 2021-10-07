import { FC, MouseEventHandler, forwardRef } from "react"

type Props = {
    size?: "sm" | "md" | "lg"
    type?: "default" | "primary" | "link"
    htmlType?: "button" | "submit" | "reset"
    danger?: boolean
    disabled?: boolean
    onClick?: MouseEventHandler<HTMLButtonElement>
    tag?: "a" | "button"
    className?: string
    href?: string
}

const baseClassName =
    "rounded-md tracking-wide font-semibold focus:outline-none focus:ring transition text-white"

const Button: FC<Props> = forwardRef(
    (
        {
            children,
            onClick,
            disabled = false,
            size = "sm",
            type = "default",
            htmlType = "button",
            danger = false,
            tag = "button",
            className: customClassName = "",
            href,
        },
        _ref
    ) => {
        const getSizeClassName = () => {
            const typeIsLink = type === "link"

            switch (size) {
                case "sm":
                    return `text-sm ${typeIsLink ? "" : "px-2 py-1"}`
                case "md":
                    return `text-base ${typeIsLink ? "" : "px-4 py-2"}`
                case "lg":
                    return `text-lg ${typeIsLink ? "" : "px-6 py-3"}`
                default:
                    throw new Error("Button must be sm, md or lg")
            }
        }

        const getTypeClassName = () => {
            const color = danger ? "red" : "primary"

            if (disabled)
                return `cursor-not-allowed bg-${color}-300 focus:ring-${color}-200`

            switch (type) {
                case "default":
                    return `text-${color}-600 border-${color}-600 hover:text-${color} hover:bg-${color}-600 active:bg-${color}-700 focus:ring-${color}-300`
                case "link":
                    return `text-${color}-600 hover:bg-${color}-50 active:bg-${color}-100 focus:ring-${color}-300`
                case "primary":
                    return `text-white bg-${color}-500 hover:bg-${color}-600 active:bg-${color}-700 focus:ring-${color}-300`
                default:
                    throw new Error("Type must be default, primary or link")
            }
        }

        const className = (() => {
            return `${baseClassName} ${getSizeClassName()} ${getTypeClassName()} ${customClassName}`
        })()

        return tag === "button" ? (
            <button
                type={htmlType}
                className={className}
                disabled={disabled}
                onClick={onClick}
            >
                {children}
            </button>
        ) : (
            <a href={href} className={className}>
                {children}
            </a>
        )
    }
)

export default Button
