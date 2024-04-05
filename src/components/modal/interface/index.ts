import {ReactNode} from "react";
import {IUseModalResult} from "../../../";

interface IModalProps {
    modal: IUseModalResult,
    children: ReactNode,
    modalTitle: ReactNode,
    classname?: string
}

export type {
    IModalProps,
}
