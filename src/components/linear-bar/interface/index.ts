import {ReactNode} from "react";

interface ILinerBarProps {
    childrenMap: childrenMap[]
    defaultValue?: childrenMap
    className?: string
}

interface childrenMap {
    title: string,
    callback?: () => void,
    item?: ReactNode
}

export type {
    childrenMap,
    ILinerBarProps
}