import React, {useState} from 'react';
import {IDropdownItemProps} from "../../";
import NavbarItem from "../item";

const DropdownItem = ({el, NavLink}: IDropdownItemProps) => {
    const [dropdown, setDropdown] = useState(false)
    return (
        <>
            <button type='button' onClick={() => setDropdown(prevState => !prevState)}><NavbarItem el={el}
                                                                                                   isActive={dropdown}/>
            </button>
            {
                dropdown &&
                el.dropdown.map((elDropdown) =>
                    <NavLink to={elDropdown.link}>
                        {
                            ({isActive}) => <NavbarItem el={elDropdown} isActive={isActive}/>
                        }
                    </NavLink>
                )
            }
        </>
    );
};

export default DropdownItem;