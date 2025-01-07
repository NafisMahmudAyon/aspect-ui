// ./app/src/components/Sidebar/SidebarHeader.tsx
'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
export const SidebarHeader = ({ children, className = "", ...rest }) => {
    return _jsx("div", { className: cn('border-b-2 border-primary-800 dark:border-primary-200 text-primary-800 dark:text-primary-200 hover:text-primary-900 dark:hover:text-primary-100 transition-all duration-200 ease-in-out px-2.5 py-3', className), ...rest, children: children });
};
