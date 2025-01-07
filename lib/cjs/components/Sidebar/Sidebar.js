// ./app/src/components/Sidebar/Sidebar.tsx
'use client';
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
export const Sidebar = ({ children, className = "", ...rest }) => {
    return (_jsx(_Fragment, { children: _jsx("aside", { className: cn('flex h-screen w-64 flex-col p-5 bg-primary-100 dark:bg-primary-900 transition-all duration-300 ease-in-out', className), ...rest, children: children }) }));
};
