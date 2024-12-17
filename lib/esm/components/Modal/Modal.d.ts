import React, { ReactNode } from 'react';
interface ModalProps {
    children: ReactNode;
    isOpenExternal?: boolean;
    onToggle?: (isOpen: boolean) => void;
}
export declare const Modal: React.FC<ModalProps>;
export {};
