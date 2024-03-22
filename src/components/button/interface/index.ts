import React from "react";
import {EButtonVariant} from "../";

interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    className?: string,
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    disabled?: boolean,
    variant?: EButtonVariant
}

export type {
    IButtonProps
}
