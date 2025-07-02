// ./app/src/components/Navbar/NavbarCollapseBtn.tsx
'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
import { useNavbar } from './NavbarContext';
export const NavbarCollapseBtn = ({ className = '', icon, ...rest }) => {
    const { toggleCollapse, collapseBreakpoint } = useNavbar();
    return (_jsx("button", { className: cn('rounded-md p-2 text-text hover:bg-bg-light focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-border focus-visible:bg-bg-light', `block ${collapseBreakpoint === 'sm' && 'sm:hidden'} ${collapseBreakpoint === 'md' && 'md:hidden'} ${collapseBreakpoint === 'lg' && 'lg:hidden'} ${collapseBreakpoint === 'xl' && 'xl:hidden'} ${collapseBreakpoint === '2xl' && '2xl:hidden'}`, className), onClick: toggleCollapse, ...rest, children: icon ? icon :
            _jsx("svg", { className: 'h-6 w-6', xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', children: _jsx("path", { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M4 6h16M4 12h16m-7 6h7' }) }) }));
};
