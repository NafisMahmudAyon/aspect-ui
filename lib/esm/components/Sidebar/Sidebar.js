'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
import { useSidebar } from './SidebarContext';
export const Sidebar = ({ children, className = "", breakPoint = 'md', ...rest }) => {
    const { isOpen } = useSidebar();
    const breakpointStyle = (breakPoint) => {
        switch (breakPoint) {
            case 'sm':
                return 'md:flex md:translate-x-0 md:relative';
            case 'md':
                return 'lg:flex lg:translate-x-0 lg:relative';
            case 'lg':
                return 'xl:flex xl:translate-x-0 xl:relative';
            case 'xl':
                return '2xl:flex 2xl:translate-x-0 2xl:relative';
            case '2xl':
                return '';
            default:
                return 'lg:flex lg:translate-x-0 lg:relative';
        }
    };
    return (_jsx("aside", { className: cn('fixed z-40 top-0 left-0 h-screen w-64 flex-col p-5 bg-bg transition-all duration-300 ease-in-out', breakpointStyle(breakPoint), isOpen ? 'translate-x-0' : '-translate-x-full', className), ...rest, children: children }));
};
