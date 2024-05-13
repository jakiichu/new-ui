import React, {ClassAttributes} from "react";


interface IBaseInputComponentProps<T> extends ClassAttributes<T>, React.InputHTMLAttributes<T> {
    label?: string
    error?: string
    startIcon?: React.ReactNode
    icon?: React.ReactNode
}

interface IInputComponentProps extends IBaseInputComponentProps<HTMLInputElement> {
    req?: boolean
}

type ITextAreaComponentProps = Omit<IBaseInputComponentProps<HTMLTextAreaElement>, 'startIcon' | 'icon'>

export type {IInputComponentProps, ITextAreaComponentProps, IBaseInputComponentProps}