// ./app/src/components/Sidebar/SidebarItem.tsx
'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
export const SidebarItem = ({ children, onClick, className = '', ...rest }) => {
    return (_jsx("div", { className: cn('text-body1 hover:bg-bg-light text-text flex cursor-pointer items-center gap-3 rounded-md p-2.5 font-normal transition-all duration-150 ease-in-out', className), onClick: onClick, ...rest, children: children }));
};
