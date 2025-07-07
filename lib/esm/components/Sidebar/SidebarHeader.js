// ./app/src/components/Sidebar/SidebarHeader.tsx
'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
export const SidebarHeader = ({ children, className = '', ...rest }) => {
    return (_jsx("div", { className: cn('border-border text-text border-b-2 px-2.5 py-3 transition-all duration-200 ease-in-out', className), ...rest, children: children }));
};
