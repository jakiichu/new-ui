import React, {ReactElement} from "react";
import {ISkeletonProps} from "../";

const Skeleton = ({
                      className,
                      ...props
                  }: ISkeletonProps): ReactElement => (
    <div className={`animate-pulse bg-gray-500 rounded-md ${className}`} {...props}/>
);


export default Skeleton;