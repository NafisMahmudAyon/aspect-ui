'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
export const DropdownList = ({ children, className = "", ...rest }) => {
    return _jsx("div", { className: cn('py-1 border border-primary-50 dark:border-primary-950 rounded-md shadow-lg', className), ...rest, children: children });
};
