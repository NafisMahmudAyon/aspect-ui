'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback, useEffect, useState } from 'react';
import { ModalProvider } from './ModalContext';
export const Modal = ({ children, handleOpen }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpenModal = useCallback(() => {
        setIsOpen(prev => !prev);
    }, [setIsOpen]);
    if (!handleOpen) {
        handleOpen = handleOpenModal;
    }
    useEffect(() => {
        const handleEscapeKeyPress = (event) => {
            if (event.key === 'Escape') {
                isOpen && setIsOpen(false);
            }
        };
        const handleClickOutsideModal = (event) => {
            if (!event.target.closest('.aspect-ui-modal')) {
                isOpen && setIsOpen(false);
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
    }, [isOpen, setIsOpen]);
    return (_jsx(ModalProvider, { value: { isOpen, handleOpen }, children: children }));
};
