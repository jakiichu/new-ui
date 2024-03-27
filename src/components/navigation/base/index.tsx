import {INavigateDropdown, INavigateState, INavigationProps} from "../interface";
import React, {ReactElement} from "react";
import {Skeleton} from "../../";
import {DropdownItem, NavbarItem} from "../";

const NavigationComponent = ({navForAll, NavLink, isLoading = false}: INavigationProps): ReactElement => (
    <nav className="pt-16 fixed top-0 px-5 w-[130px] h-[1080px] bg-stone-950">
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