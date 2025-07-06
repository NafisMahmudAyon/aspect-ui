import React, { ReactNode } from 'react';
interface SidebarProps {
    children: ReactNode;
    className?: string;
    breakPoint?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}
export declare const Sidebar: React.FC<SidebarProps>;
export {};
