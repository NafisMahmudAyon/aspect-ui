'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { NavbarProvider } from './NavbarContext';
import { cn } from '../../utils/cn';
export const Navbar = ({ children, className = '', collapseBreakpoint = 'md', ...rest }) => {
    return (_jsx(NavbarProvider, { collapseBreakpoint: collapseBreakpoint, children: _jsx("nav", { className: cn('relative bg-primary-100 dark:bg-primary-900 shadow-md', className), ...rest, children: children }) }));
};
