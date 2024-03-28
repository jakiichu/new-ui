import React, {forwardRef, LegacyRef, ReactElement} from "react";
import {EClassNameValues, ITextAreaComponentProps} from "../";
import ErrorLabel from "../components/error-label";

const TextAreaComponent =
    forwardRef(({
                    label,
                    error,
                    id = crypto.randomUUID(),
                    ...props
                }: ITextAreaComponentProps, ref: LegacyRef<HTMLTextAreaElement>): ReactElement => (
            <div className='my-3 relative'>
                <label
                    className={`${error ?
                        EClassNameValues.LABEL_ERROR :
                        `${EClassNameValues.LABEL_BASE} ${EClassNameValues.LABEL_FOCUS} ${EClassNameValues.LABEL_ACTIVE} ${EClassNameValues.LABEL_DISABLED}`}`}
                    htmlFor={id}>
                    {label}
                    <textarea
                        className={`${EClassNameValues.INPUT_BASE}
                    ${EClassNameValues.INPUT_FOCUS} 
                    ${EClassNameValues.INPUT_ACTIVE}
                    ${EClassNameValues.INPUT_DISABLED}
                    ${error ? EClassNameValues.INPUT_ERROR : ''}`}
                        ref={ref} id={id} {...props}/>
                </label>
                <ErrorLabel error={error}/>
            </div>
        )
    )

export default TextAreaComponent;