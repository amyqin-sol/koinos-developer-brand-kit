import React, { useState } from "react"
import SolidButton from "./SolidButton"

type InputProps = {
    placeholder: string,
    buttonText: string,
    onSubmit: any
}

const Input: React.FC<InputProps> = ({placeholder, buttonText, onSubmit}) => {
    return (
        <form onSubmit={() => onSubmit()} className="inline-flex gap-4">
            <input placeholder={placeholder} className="rounded-2xl px-4 border-white border bg-transparent"></input>
            <button type='submit'>
                <SolidButton text={buttonText} onClick={() => {}}/>
            </button>
        </form>
    )
}

export default Input;