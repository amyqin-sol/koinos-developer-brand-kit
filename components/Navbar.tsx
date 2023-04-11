import React from "react"
import KoinosLogo from "./KoinosLogo";

type NavbarProps = {
    children:  React.ReactNode[];
}

const Navbar: React.FC<NavbarProps> = ({children}) => {
    return (

        <div className="w-full inline-flex justify-between items-baseline shadow-bottom">
            <KoinosLogo size="md" />
            <div className="flex gap-4">
            {
                children.map((child, index) => {
                    return (
                        <div className="tracking-wide font-semibold cursor-pointer hover:text-gray" key={`div_${index}`}>
                            {child}
                        </div>        
                    )
                })
            }
            </div>
        </div>
    )
}

export default Navbar;