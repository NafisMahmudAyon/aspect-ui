import React, { ReactNode } from 'react';
interface ModalProps {
    children: ReactNode;
    handleOpen: () => void;
}
export declare const Modal: React.FC<ModalProps>;
export {};
