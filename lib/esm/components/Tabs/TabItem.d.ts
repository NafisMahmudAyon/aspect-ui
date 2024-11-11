import React, { ReactNode } from 'react';
interface TabItemProps {
    children: ReactNode;
    value: string;
    disabled?: boolean;
    className?: string;
    activeClassName?: string;
    disabledClassName?: string;
}
export declare const TabItem: React.FC<TabItemProps>;
export {};
