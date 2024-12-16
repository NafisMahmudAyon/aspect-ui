import React, { ReactElement, ReactNode } from 'react';
interface DropdownActionProps {
    children: ReactNode;
    className?: string;
    icon?: ReactElement<any>;
    iconPosition?: 'start' | 'end';
}
export declare const DropdownAction: React.FC<DropdownActionProps>;
export {};
