import React, {useEffect} from "react";
import {IModalProps} from "../interface";
import Icon from '@mdi/react';
import {mdiClose} from '@mdi/js';

const ModalComponent = ({modal, children, modalTitle, classname}: IModalProps) => {

    const handleEscape = (e: KeyboardEvent) => {
        e.key === "Escape" ? modal.handleOnClose()() : false;
    }

    useEffect(() => {
        document.addEventListener("keydown", handleEscape)
        return () => {
            document.removeEventListener('keydown', handleEscape)
        }
    });

    return (
        <>
            {modal.isOpen && (
                <div
                    className={"fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-10"}
                    id={"modal-wrapper"} onClick={() => modal.handleOnClose()()}>
                    <div className={`bg-white overflow-y-auto p-[40px] rounded w-[760px] tablet-max:max-h-[900px] ${classname}`}
                         onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
                        <div className={"flex justify-between"}>
                            <h2 className={"text-3xl"}>{modalTitle}</h2>
                            <button type={"button"} onClick={() => modal.handleOnClose()()}>
                                <Icon path={mdiClose} size={1.5} className={"text-[#5C667D] hover:text-[#3D4558]"}/>
                            </button>
                        </div>
                        <div>
                            {children}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
export default ModalComponent