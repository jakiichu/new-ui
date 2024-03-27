import React from 'react';
import Icon from "@mdi/react";
import {INavigateItemProps} from "../../";

const NavbarItem = ({el, isActive}: INavigateItemProps) => {
    return (
        <div
            className={`flex flex-col items-center hover:text-[#62F0F5] active:text-[#325058] group ${isActive ? 'text-[#58A0A3]' : ''} `}>
                                            <span><Icon path={el.icon} size={"24px"}
                                                        className={isActive ? 'group-hover:fill-[#62F0F5] group-active:fill-[#325058]' : ''}/></span>
            <p className="text-center">{el.text}</p>
        </div>
    );
};

export default NavbarItem;