import {forwardRef, LegacyRef} from "react";
import { IInputComponentProps, EClassNameValues } from "../";
import React from "react";

const InputComponent = forwardRef(({
                                       label,
                                       error,
                                       ...props
                                   }: IInputComponentProps, ref: LegacyRef<HTMLInputElement>) => {
    const id = props.id ?? crypto.randomUUID()

    return (
        <div className='my-3 mx-2 relative'>
            <label
                className={`${error ?
                    EClassNameValues.LABEL_ERROR :
                    `${EClassNameValues.LABEL_BASE} ${EClassNameValues.LABEL_FOCUS} ${EClassNameValues.LABEL_ACTIVE} ${EClassNameValues.LABEL_DISABLED}`}`}
                htmlFor={id}>{label}
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
            {error && <p className="absolute text-xs leading-6 text-[#E70000]">{error}</p>}
        </div>
    );
});

export default InputComponent;