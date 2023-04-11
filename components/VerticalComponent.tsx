import React from "react"
import Link from "./Link"

type VerticalComponentProps = {
    title?: string,
    children: React.ReactNode[]
}

const VerticalComponent: React.FC<VerticalComponentProps> = ({title, children}) => {
    return (
        <div className="w-fit flex flex-grow flex-col gap-2 border-4 border-darkPurple shadow-lg bg-white rounded-2xl px-6 py-8">
            <p className="text-lg font-bold mb-4">{title}</p>
            {children}
        </div>
    )
}

export default VerticalComponent;