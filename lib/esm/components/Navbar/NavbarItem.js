// ./app/src/components/Navbar/NavbarItem.tsx
'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
export const NavbarItem = ({ children, className = '', ...rest }) => {
    return _jsx("button", { className: cn('px-2 py-1 inline-flex text-text hover:bg-bg-light rounded-md transition-colors ease-in-out focus-visible:bg-bg-light', className), ...rest, children: children });
};
