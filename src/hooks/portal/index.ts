import {useEffect, useMemo} from 'react'

interface IUsePortalOptions {
    containerId: string
    element: {
        tagName: string
        className?: string
    }
}

interface IUsePortalResult<THTMLElement extends HTMLElement> {
    el: THTMLElement
}

const usePortal = <THTMLElement extends HTMLElement, >(options: IUsePortalOptions): IUsePortalResult<THTMLElement> => {
    const el = useMemo(() => {
        return document.createElement(options.element.tagName) as THTMLElement
    }, [])

    if (options.element.className !== undefined) el.className = options.element.className

    const root = useMemo(() => {
        return document.getElementById(options.containerId)
    }, [options.containerId])

    useEffect(() => {
        if (root) root.appendChild(el)
        return () => {
            if (root) root.removeChild(el)
        }
    }, [root, el])

    return {el}
}

export {usePortal}