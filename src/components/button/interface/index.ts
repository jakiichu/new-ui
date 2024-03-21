import React from "react";

interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    className?: string,
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    disabled?: boolean,
}

export type {
    IButtonProps
}
