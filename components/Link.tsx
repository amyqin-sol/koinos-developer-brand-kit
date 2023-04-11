import React from "react"

type LinkProps = {
    href: string,
    text: string
}

const Link: React.FC<LinkProps> = ({href, text}) => {
    return (
        <a href={href} target="_blank" rel="noreferrer" className="w-fit h-fit text-20 text-purple border-b border-darkPurple hover:border-purple py-1 mb-2 mt-1">{text}</a>
    )
}

export default Link;