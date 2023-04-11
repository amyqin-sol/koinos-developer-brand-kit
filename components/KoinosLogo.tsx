import React from "react"
import Image from "next/image"
// Sizes: xs, sm, md, lg, xl, full
type LogoProps = {
    size?: string,
    className?: string,
}

const KoinosLogo: React.FC<LogoProps> = ({size, className}) => {
    switch (size) {
        case 'xs': 
            return (
                <div className="w-24">
                    <Image src='https://koinos.io/wp-content/uploads/2022/07/koinos-logo-rev4-1.png' width={2721} height={736} alt='Koinos Logo'/>
                </div>
            )
        case 'sm': 
            return (
                <div className="w-36">
                    <Image src='https://koinos.io/wp-content/uploads/2022/07/koinos-logo-rev4-1.png' width={2721} height={736} alt='Koinos Logo'/>
                </div>
            )
        case 'md': 
            return (
                <div className="w-48">
                    <Image src='https://koinos.io/wp-content/uploads/2022/07/koinos-logo-rev4-1.png' width={2721} height={736} alt='Koinos Logo'/>
                </div>
            )
        case 'lg': 
            return (
                <div className="w-64">
                    <Image src='https://koinos.io/wp-content/uploads/2022/07/koinos-logo-rev4-1.png' width={2721} height={736} alt='Koinos Logo'/>
                </div>
            )
        case 'xl': 
            return (
                <div className="w-72">
                    <Image src='https://koinos.io/wp-content/uploads/2022/07/koinos-logo-rev4-1.png' width={2721} height={736} alt='Koinos Logo'/>
                </div>
            )
        case 'xxl': 
            return (
                <div className="w-96">
                    <Image src='https://koinos.io/wp-content/uploads/2022/07/koinos-logo-rev4-1.png' width={2721} height={736} alt='Koinos Logo'/>
                </div>
            )
        default:
            return (
                <div className={className}>
                    <Image src='https://koinos.io/wp-content/uploads/2022/07/koinos-logo-rev4-1.png' width={2721} height={736} alt='Koinos Logo'/>
                </div>
            )
    }

}

export default KoinosLogo;