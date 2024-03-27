import * as React from "react";
import {NavLinkProps} from "react-router-dom";

interface INavigateState {
    icon: string,
    link: string,
    text: string
}

interface INavigateDropdown extends Omit<INavigateState, 'link'> {
    dropdown: INavigateState[]
}


type INav = INavigateState | INavigateDropdown
type INavForAll = INav[]

interface INavigationProps {
    NavLink: React.ForwardRefExoticComponent<NavLinkProps & React.RefAttributes<HTMLAnchorElement>>
    isLoading?: boolean
    navForAll: INavForAll
}

interface INavigateBaseProps<T> {

    el: T
}

interface INavigateItemProps extends INavigateBaseProps<Omit<INavigateState, 'link'>> {
    isActive: boolean
}

type IDropdownItemProps = INavigateBaseProps<INavigateDropdown> & Pick<INavigationProps, "NavLink">

export type {
    INavigateState,
    INavForAll,
    INavigateDropdown,
    INav,
    INavigationProps,
    INavigateItemProps,
    IDropdownItemProps
}