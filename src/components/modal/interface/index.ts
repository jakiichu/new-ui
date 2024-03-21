import React from "react";
import { IUseModalResult } from "../../../";

interface IModalProps {
    modal: IUseModalResult,
    children: React.ReactNode,
    modalTitle: string
}

export type {
    IModalProps,
}
