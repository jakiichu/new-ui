import {NavLink} from "react-router-dom";
import Icon from "@mdi/react";
import {INavigationProps} from "../interface";
import React from "react";

const Navigation = ({navForAll}: INavigationProps) => (
    <nav className="pt-16 fixed top-0 px-5 w-[130px] h-[1080px] bg-stone-950">
        <ul className="flex flex-col items-center gap-7 text-white">
            {navForAll.map((el, index) => (
                    <li key={`List-${index}`}>
                        <NavLink to={el.link}>
                            {({isActive}) => (
                                <div
                                    className={`flex flex-col items-center hover:text-[#62F0F5] active:text-[#325058] group ${isActive ? 'text-[#58A0A3]' : ''} `}>
                                    <span><Icon path={el.icon} size={"24px"}
                                                className={isActive ? 'group-hover:fill-[#62F0F5] group-active:fill-[#325058]' : ''}/></span>
                                    <p className="text-center">{el.text}</p>
                                </div>
                            )}
                        </NavLink>

                    </li>
                )
            )
            }
        </ul>
    </nav>
)

export default Navigation;