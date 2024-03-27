import React, {FC} from "react";
import {IRoundedWrapperProps} from "../";

const RoundedWrapper: FC<IRoundedWrapperProps> = ({children, className, ...props}) => {
    return (
        <div className={`bg-white shadow-md rounded p-4 ${className}`} {...props}>{children}</div>
    )
}
export default RoundedWrapper