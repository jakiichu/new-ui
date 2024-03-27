import {DetailedHTMLProps, InputHTMLAttributes} from "react";

interface ICheckboxComponentProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label?: string
}

export type {
    ICheckboxComponentProps
}