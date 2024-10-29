import React from 'react';
interface NavbarContextType {
    isCollapsed: boolean;
    toggleCollapse: () => void;
    collapseBreakpoint: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'all';
}
export declare const NavbarProvider: React.FC<{
    children: React.ReactNode;
    collapseBreakpoint: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'all';
}>;
export declare const useNavbar: () => NavbarContextType;
export {};
