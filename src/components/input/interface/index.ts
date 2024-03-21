import React, {ClassAttributes} from "react";


interface IInputComponentProps extends ClassAttributes<HTMLInputElement>, React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    error?: string
    icon?: React.ReactNode
}

export type {IInputComponentProps}