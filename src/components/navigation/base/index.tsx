import {INavigateDropdown, INavigateState, INavigationProps} from "../interface";
import React, {ReactElement} from "react";
import {Skeleton} from "../../";
import {DropdownItem, NavbarItem} from "../";
import {mdiChevronLeft, mdiChevronRight} from "@mdi/js";
import Icon from "@mdi/react";
import useHideState from "../../../hooks/hide";

const NavigationComponent = ({navForAll, NavLink, isLoading = false}: INavigationProps): ReactElement => {
    const {hide, setHide} = useHideState()

    return (
        <nav className="fixed h-[100vh] z-10">
            <div className="bg-stone-950 h-full relative md:overflow-y-auto">
                <div hidden={hide} className="py-16 px-6">
                    <ul className="flex flex-col items-center gap-7 text-white">
                        {
                            isLoading ? navForAll.map((_, index) => (
                                    <li key={`List-${index}`}>
                                        <div
                                            className='flex flex-col items-center gap-2'>
                                            <Skeleton className='w-[24px] h-[24px]'/>
                                            <Skeleton className='w-[90px] md:block hidden h-[16px] '/>
                                        </div>
                                    </li>
                                )) :

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
                </div>

                <div
                    onClick={() => setHide(prevState => !prevState)}
                    className="absolute cursor-pointer top-24 flex flex-col justify-center rounded-r-xl h-[72px] right-[-36px] bg-stone-950 md:hidden shadow-md"
                >
                    <Icon path={!hide ? mdiChevronLeft : mdiChevronRight} color={'#FFF'} size={1.5}/>
                </div>
            </div>
        </nav>
    )
};

export default NavigationComponent;