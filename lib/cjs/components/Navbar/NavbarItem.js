// ./app/src/components/Navbar/NavbarItem.tsx
'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
import { useNavbar } from './NavbarContext';
export const NavbarItem = ({ children, className = '', ...rest }) => {
    const { setIsCollapsed } = useNavbar();
    return _jsx("button", { className: cn('px-2 py-1 inline-flex text-text hover:bg-bg-light rounded-md transition-colors ease-in-out focus-visible:bg-bg-light', className), onClick: () => { console.log(":"); setIsCollapsed(false); }, ...rest, children: children });
};
