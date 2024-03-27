import {SnackbarKey} from "notistack";
import {EVariantSnackbar} from "..";

interface ISnackbarComponentProps {
    style: unknown;
    message: string;
    EVariantSnackbar: EVariantSnackbar

    closeSnackbar: (key?: SnackbarKey) => void

    action(): SnackbarKey;
}

export type {
    ISnackbarComponentProps
}