import {ReactNode} from "react";
import {IUseModalResult} from "../../../";

interface IModalProps {
    modal: IUseModalResult,
    children: ReactNode,
    modalTitle: ReactNode
}

export type {
    IModalProps,
}
