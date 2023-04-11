import React from "react"
import Link from "./Link"

type HorizontalComponentProps = {
    title?: string,
    children: React.ReactNode[]
}

const HorizontalComponent: React.FC<HorizontalComponentProps> = ({title, children}) => {
    return (
        <div className="w-fit flex flex-grow flex-col gap-2 border-4 border-darkPurple shadow-lg bg-white rounded-2xl px-6 py-8">
            <p className="text-lg font-bold mb-4">{title}</p>
            <div className="flex flex-grow flex-row gap-8">
                {children}
            </div>
        </div>
    )
}

export default HorizontalComponent;