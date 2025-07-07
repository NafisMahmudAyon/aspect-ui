// ./app/src/components/Navbar/NavbarContainer.tsx
'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
export const NavbarContainer = ({ children, className = '', ...rest }) => {
    return (_jsx("div", { className: cn('container mx-auto flex items-center justify-between px-4 py-4', className), ...rest, children: children }));
};
