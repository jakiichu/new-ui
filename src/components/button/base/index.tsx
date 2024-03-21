import React from "react";
import { IButtonProps } from "../";


const ButtonComponent = ({className, ...props}: IButtonProps) => {
    return (
        <button
            className={`mt-7 mx-2 py-2.5 px-6 bg-[#58A0A3] text-white rounded font-semibold hover:bg-[#477480] active:bg-[#325058] disabled:bg-[#dee0e3] disabled:text-[#B0B5BB] 
            ${className}`} {...props}>

        </button>
    );
};

export default ButtonComponent;
