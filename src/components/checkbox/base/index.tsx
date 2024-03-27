import React, {FC} from "react";
import {mdiCheckBold} from "@mdi/js";
import Icon from "@mdi/react";
import {ICheckboxComponentProps} from "../";


const CheckboxComponent: FC<ICheckboxComponentProps> = ({label, id = crypto.randomUUID(), ...props}) => {

    return (
        <div className="inline-flex items-center">
            <div className="flex gap-2">
                <div className="relative flex items-center rounded-full cursor-pointer">
                    <input type="checkbox"
                           className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-sm border-2 border-primary before:absolute before:transition-opacity checked:bg-primary checked:before:bg-primary"
                           id={id} {...props}/>
                    <Icon
                        size={0.6}
                        className='absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2.5 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100'
                        path={mdiCheckBold}/>
                </div>
                {label && <label htmlFor={id}>{label}</label>}
            </div>
        </div>
    )
}

export default CheckboxComponent
