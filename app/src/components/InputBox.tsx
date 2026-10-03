import React from "react";

type inputProp = {
  placeholder?: string;
  text?: string;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
};

export default function InputBox({ placeholder, text, onClick }: inputProp) {
  return <input 
    className="py-2 my-2 px-2 border border-gray-800 rounded-2xl "
  type="text" value={text} onClick={onClick} placeholder={placeholder} />;
}
