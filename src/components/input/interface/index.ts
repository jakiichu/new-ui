import React, {ClassAttributes} from "react";


interface IBaseInputComponentProps<T> extends ClassAttributes<T>, React.InputHTMLAttributes<T> {
    label?: string
    error?: string
    startIcon?: React.ReactNode
    icon?: React.ReactNode
}

type IInputComponentProps = IBaseInputComponentProps<HTMLInputElement>
type ITextAreaComponentProps = Omit<IBaseInputComponentProps<HTMLTextAreaElement>, 'startIcon' | 'icon'>

export type {IInputComponentProps, ITextAreaComponentProps, IBaseInputComponentProps}