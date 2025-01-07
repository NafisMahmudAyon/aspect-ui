import React, { ReactNode } from 'react';
interface SidebarItemProps {
    children: ReactNode;
    onClick?: () => void;
    className?: string;
}
export declare const SidebarItem: React.FC<SidebarItemProps>;
export {};
