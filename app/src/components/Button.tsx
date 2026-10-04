import React from "react"

type btnProps = {
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    text?: string,
}

export default function Button({text, onClick}: btnProps){
    return(
    <button 
    onClick={onClick}
    className="py-2 px-4 shadow shadow-gray-900 rounded-2xl  hover:bg-gray-200 "
     >{text}</button>
    )
}