import React from "react"

type BannerProps = {
    children: React.ReactNode | React.ReactNode[];
}

const Banner: React.FC<BannerProps> = ({children}) => {
    return (
        <div className="w-full h-fit px-12 py-6 text-white inline-flex justify-between items-start bg-purple">
            {children}
        </div>
    )
}

export default Banner;