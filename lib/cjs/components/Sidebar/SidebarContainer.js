// ./app/src/components/Sidebar/SidebarContainer.tsx
'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
export const SidebarContainer = ({ children, className = '', ...rest }) => {
    return (_jsx("div", { className: cn('flex-grow overflow-y-auto my-2 space-y-1', className), ...rest, children: children }));
};
