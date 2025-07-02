// ./app/src/components/Sidebar/SidebarItem.tsx
'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
export const SidebarItem = ({ children, onClick, className = '', ...rest }) => {
    return (_jsx("div", { className: cn('cursor-pointer p-2.5 flex items-center gap-3 rounded-md text-body1 font-normal transition-all duration-150 ease-in-out hover:bg-bg-light text-text', className), onClick: onClick, ...rest, children: children }));
};
