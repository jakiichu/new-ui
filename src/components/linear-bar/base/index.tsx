import {isEqual} from "lodash";
import React, {FC, ReactNode, useEffect, useState} from "react";
import {ILinerBarProps} from "../";


const LinerBar: FC<ILinerBarProps> = ({childrenMap, defaultValue}): ReactNode => {
    const [selectedRef, setSelectedRef] = useState(defaultValue ?? childrenMap[0]);
    useEffect(() => defaultValue && setSelectedRef(defaultValue), [defaultValue])
    return (
        <>
            <div className="flex gap-[16px] items-center">
                {childrenMap?.map((ref) => (
                    <button
                        key={ref.title}
                        type="button"
                        onClick={() => {
                            setSelectedRef(ref)
                            ref.callback && ref.callback()
                        }}
                        className={`cursor-pointer ${isEqual(selectedRef.title, ref.title) ?
                            `border-b-primary text-primary border-b-2` :
                            `text-base300`}
                        `}
                    >
                        <p>{ref.title}</p>
                    </button>
                ))}
            </div>
            {selectedRef.item}
        </>
    );
};
export default LinerBar;