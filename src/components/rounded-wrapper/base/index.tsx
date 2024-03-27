import React, {FC} from "react";
import {IRoundedWrapperProps} from "../";

const RoundedWrapper: FC<IRoundedWrapperProps> = ({children, className, ...props}) => {
    return (
        <div className={`bg-white shadow-md rounded-xl p-4 ${className}`} {...props}>{children}</div>
    )
}
export default RoundedWrapper