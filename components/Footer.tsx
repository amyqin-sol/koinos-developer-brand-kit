import React from "react"
import KoinosLogoWhite from "./KoinosLogoWhite";

type FooterProps = {
    children: React.ReactNode | React.ReactNode[];
}

const Footer: React.FC<FooterProps> = ({children}) => {
    return (
        <div className="w-full h-fit mt-12 px-24 py-12 text-white inline-flex justify-between items-start bg-darkPurple">
            <div className='w-full flex flex-row flex-wrap justify-evenly gap-4'>
                {children}
                <KoinosLogoWhite size="lg" />
            </div>
        </div>
    )
}

export default Footer;