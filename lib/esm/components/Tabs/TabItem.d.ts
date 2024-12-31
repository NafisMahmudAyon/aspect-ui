import React, { ReactNode } from 'react';
interface TabItemProps {
    children: ReactNode;
    id: string;
    disabled?: boolean;
    className?: string;
    activeClassName?: string;
    disabledClassName?: string;
    onClick?: () => void;
}
export declare const TabItem: React.FC<TabItemProps>;
export {};
