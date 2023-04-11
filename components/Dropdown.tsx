import React, { useState } from "react"
import KoinosLogo from "./KoinosLogo";

type DropdownProps = {
    title: string,
    children: React.ReactNode[]
}

const Dropdown: React.FC<DropdownProps> = ({title, children}) => {
    const [showDropdown, setShowDropdown] = useState(false);
    return (
        <div className="flex flex-col" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
            <p className='static order-1'>{title}</p>
            {
                showDropdown ? (
                    <div className="flex flex-col gap-2 px-8 mt-6 pt-6 pb-4 shadow-xl fixed bg-white order-2">
                        {
                            children.map((child) => {
                                return (
                                    <div className="tracking-wide font-semibold cursor-pointer w-32 py-4 px-4 hover:bg-offWhite">
                                        {child}
                                    </div>        
                                )   
                            })
                        }
                    </div>
                ) : (
                    <></>
                )
            }
        </div>
    )
}

export default Dropdown;