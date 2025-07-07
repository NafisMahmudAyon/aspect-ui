// ./app/src/components/Sidebar/SidebarContainer.tsx
'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
export const SidebarContainer = ({ children, className = '', ...rest }) => {
    return (_jsx("div", { className: cn('my-2 grow space-y-1 overflow-y-auto', className), ...rest, children: children }));
};
