import React, {forwardRef, LegacyRef} from "react";
import {EClassNameValues, IInputComponentProps} from "../";
import ErrorLabel from "../components/error-label";

const InputComponent = forwardRef(({
                                       label,
                                       error,
                                       ...props
                                   }: IInputComponentProps, ref: LegacyRef<HTMLInputElement>) => {
    const id = props.id ?? crypto.randomUUID()

    return (
        <div className='my-3 relative'>
            <label
                className={`${error ?
                    EClassNameValues.LABEL_ERROR :
                    `${EClassNameValues.LABEL_BASE} ${EClassNameValues.LABEL_FOCUS} ${EClassNameValues.LABEL_ACTIVE} ${EClassNameValues.LABEL_DISABLED}`}`}
                htmlFor={id}>
                {label}
                {
                    props.startIcon &&
                    <div className="absolute left-4 top-10 bottom-0">
                        {props.startIcon}
                    </div>
                }
                <input
                    className={`${EClassNameValues.INPUT_BASE}
                    ${EClassNameValues.INPUT_FOCUS} 
                    ${EClassNameValues.INPUT_ACTIVE}
                    ${EClassNameValues.INPUT_DISABLED}
                    ${error ? EClassNameValues.INPUT_ERROR : ''}`}
                    ref={ref} id={id} {...props}/>
                {
                    props.icon &&
                    <div className="absolute right-4 top-10 bottom-0">
                        {props.icon}
                    </div>
                }
            </label>
            <ErrorLabel error={error}/>
        </div>
    );
});

export default InputComponent;