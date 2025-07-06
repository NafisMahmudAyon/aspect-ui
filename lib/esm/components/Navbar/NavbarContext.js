// ./app/src/components/Navbar/NavbarContext.tsx
'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState } from 'react';
const NavbarContext = createContext(undefined);
export const NavbarProvider = ({ children, collapseBreakpoint = 'md' // default value
 }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const toggleCollapse = () => setIsCollapsed(prev => !prev);
    return (_jsx(NavbarContext.Provider, { value: { isCollapsed, setIsCollapsed, toggleCollapse, collapseBreakpoint }, children: children }));
};
export const useNavbar = () => {
    const context = useContext(NavbarContext);
    if (context === undefined) {
        throw new Error('useNavbar must be used within a NavbarProvider');
    }
    return context;
};
