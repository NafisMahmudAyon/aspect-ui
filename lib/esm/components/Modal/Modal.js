'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback, useEffect, useState } from 'react';
import { ModalProvider } from './ModalContext';
export const Modal = ({ children, isOpenExternal, onToggle }) => {
    const [isOpenInternal, setIsOpenInternal] = useState(false);
    const isOpen = isOpenExternal ?? isOpenInternal;
    const handleOpen = useCallback(() => {
        const newState = !isOpen;
        if (onToggle) {
            onToggle(newState);
        }
        else {
            setIsOpenInternal(newState);
        }
    }, [isOpen, onToggle]);
    useEffect(() => {
        const handleEscapeKeyPress = (event) => {
            if (event.key === 'Escape') {
                handleOpen();
            }
        };
        const handleClickOutsideModal = (event) => {
            if (!event.target.closest('.aspect-ui-modal')) {
                handleOpen();
            }
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEscapeKeyPress);
            document.addEventListener('mousedown', handleClickOutsideModal);
        }
        return () => {
            document.removeEventListener('keydown', handleEscapeKeyPress);
            document.removeEventListener('mousedown', handleClickOutsideModal);
        };
    }, [isOpen, handleOpen]);
    return (_jsx(ModalProvider, { value: { isOpen, handleOpen }, children: children }));
};
