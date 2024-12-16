import React, { ButtonHTMLAttributes, ReactNode } from 'react';
interface ModalActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
}
export declare const ModalAction: React.FC<ModalActionProps>;
export {};
