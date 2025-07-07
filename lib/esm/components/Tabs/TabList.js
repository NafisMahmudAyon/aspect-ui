'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
export const TabList = ({ children, className = '', ...rest }) => {
    return (_jsx("div", { className: cn('bg-bg text-text mb-4 inline-flex items-center space-x-2 rounded-md p-[3px]', className), ...rest, children: children }));
};
