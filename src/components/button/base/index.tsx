import React, {FC, ReactNode, useEffect, useMemo} from "react";
import {EButtonVariant, IButtonProps} from "../";

const ButtonComponent: FC<IButtonProps> = ({className, variant = EButtonVariant.fill, ...props}): ReactNode => {
    const handleVariantForDisabled = () => {
        variant = EButtonVariant.disable
    }
    useEffect(() => {
        if (props.disabled)
            handleVariantForDisabled()
    }, []);

    const variantCalssName = useMemo(() => {
        switch (variant) {
            case EButtonVariant.outlined:
                return 'text-[#58A0A3] outline outline-offset-[-2px] outline-[#58A0A3] hover:text-[#477480] hover:outline-[#477480] active:text-[#325058] active:outline-[#325058]'
            case EButtonVariant.fill:
                return '!bg-[#58A0A3] text-white hover:!bg-[#477480] active:!bg-[#325058]'
            case EButtonVariant.disable:
                return 'disabled:bg-[#dee0e3] disabled:text-[#B0B5BB]'
            default:
                return ''
        }
    }, [])
    return (
        <button
            className={`${variant === EButtonVariant.noclass ? '' : 'py-2.5 px-6 rounded-xl font-semibold'} ${variantCalssName}
            ${className}`} {...props}>

        </button>
    );
};

export default ButtonComponent;
