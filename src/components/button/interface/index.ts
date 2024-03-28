import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import {EButtonVariant} from "../";

interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variant?: EButtonVariant
}

export type {
    IButtonProps
}
