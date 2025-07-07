'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
import { NavbarProvider } from './NavbarContext';
export const Navbar = ({ children, className = '', collapseBreakpoint = 'md', ...rest }) => {
    return (_jsx(NavbarProvider, { collapseBreakpoint: collapseBreakpoint, children: _jsx("nav", { className: cn('bg-bg relative shadow-md', className), ...rest, children: children }) }));
};
