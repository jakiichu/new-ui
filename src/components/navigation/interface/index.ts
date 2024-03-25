
interface INavigateState {
    icon: string,
    link: string,
    text: string
}

type INavForAll = INavigateState[]

interface INavigationProps {
    navForAll: INavForAll
}

export type {
    INavigateState,
    INavForAll,
    INavigationProps
}