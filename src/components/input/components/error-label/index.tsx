import React, {ReactElement} from 'react';
import {IInputComponentProps} from "../../interface";

const ErrorLabel = ({error}: Pick<IInputComponentProps, 'error'>): ReactElement => error &&
    <p className="absolute text-xs text-[#E70000]">{error}</p>


export default ErrorLabel;