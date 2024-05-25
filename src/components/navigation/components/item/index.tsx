import React from 'react';
import Icon from "@mdi/react";
import {INavigateItemProps} from "../../";

const NavbarItem = ({el, isActive}: INavigateItemProps) => (
    <div className={`flex flex-col items-center hover:text-[#62F0F5] max-w-[100px] active:text-[#325058] group ${isActive ? 'text-[#58A0A3]' : ''} `}>
        <Icon
            path={el.icon}
            size={"24px"}
            className={isActive ? 'group-hover:fill-[#62F0F5] group-active:fill-[#325058]' : ''}
        />
        <p className="text-center md:block hidden">{el.text}</p>
    </div>
);


export default NavbarItem;