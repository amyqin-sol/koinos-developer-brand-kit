import React, { useState } from "react"

type ButtonProps = {
    text: string,
    onClick: any
}

const OutlineButton: React.FC<ButtonProps> = ({text, onClick}) => {
    const [hover, setHover] = useState(false)

    return (
        <div onClick={() => onClick()} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className="w-fit h-fit pl-8 pr-4 py-2 border-purple border-2 rounded-full text-purple cursor-pointer">
            <div className="inline-flex gap-2">
                <p>{text}</p>
                {
                    hover ? (
                        <p>&gt;</p>
                    ) : (
                        <p className="invisible">&gt;</p>
                    )
            }
            </div>
        </div>
    )
}

export default OutlineButton;