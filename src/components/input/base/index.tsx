import React, {forwardRef, LegacyRef} from "react";
import {EClassNameValues, IInputComponentProps} from "../";
import ErrorLabel from "../components/error-label";

const InputComponent = forwardRef(({
                                       label,
                                       error,
                                       className,
                                       id = crypto.randomUUID(),
                                       ...props
                                   }: IInputComponentProps, ref: LegacyRef<HTMLInputElement>) => (
        <div className='mb-4 relative'>
            <label
                className={`${error ?
                    EClassNameValues.LABEL_ERROR :
                    `${EClassNameValues.LABEL_BASE} ${EClassNameValues.LABEL_FOCUS} ${EClassNameValues.LABEL_ACTIVE} ${EClassNameValues.LABEL_DISABLED}`}`}
                htmlFor={id}>
                {label}
                {
                    props.startIcon &&
                    <div className={`absolute left-4 bottom-0  ${label ? 'top-10' : 'top-4'}`}>
                        {props.startIcon}
                    </div>
                }
                <input
                    className={`${EClassNameValues.INPUT_BASE}
                    ${EClassNameValues.INPUT_FOCUS} 
                    ${EClassNameValues.INPUT_ACTIVE}
                    ${EClassNameValues.INPUT_DISABLED}
                    ${error ? EClassNameValues.INPUT_ERROR : ''} ${props.startIcon ? '!pl-10' : ''} ${props.icon ? '!pr-10' : ''} ${className ? className : ''}`}
                    ref={ref} id={id} {...props}/>
                {
                    props.icon &&
                    <div className={`absolute right-4 bottom-0 ${label ? 'top-10' : 'top-4'}`}>
                        {props.icon}
                    </div>
                }
            </label>
            <ErrorLabel error={error}/>
        </div>
    )
);

export default InputComponent;