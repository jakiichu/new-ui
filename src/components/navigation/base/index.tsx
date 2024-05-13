import {INavigateDropdown, INavigateState, INavigationProps} from "../interface";
import React, {ReactElement} from "react";
import {Skeleton} from "../../";
import {DropdownItem, NavbarItem} from "../";

const NavigationComponent = ({navForAll, NavLink, isLoading = false}: INavigationProps): ReactElement => (
    <nav className="py-16 px-3 fixed top-0 w-[130px] h-[100vh] overflow-y-auto bg-stone-950">
        <ul className="flex flex-col items-center gap-7 text-white">
            {
                isLoading ? navForAll.map((_, index) => (
                            <li key={`List-${index}`}>
                                <div
                                    className='flex flex-col items-center gap-2'>
                                    <Skeleton className='w-[24px] h-[24px]'/>
                                    <Skeleton className='w-[90px] h-[16px]'/>
                                </div>
                            </li>
                        )
                    ) :

                    navForAll.map((el: INavigateState, index) => (
                            el.link !== undefined ?
                                <li key={`List-${index}`}>

                                    <NavLink to={el.link}>
                                        {({isActive}) => (
                                            <NavbarItem el={el} isActive={isActive}/>
                                        )}
                                    </NavLink>
                                </li>

                                :
                                <DropdownItem NavLink={NavLink} el={el as unknown as INavigateDropdown}/>
                        )
                    )
            }
        </ul>

    </nav>
)


export default NavigationComponent;