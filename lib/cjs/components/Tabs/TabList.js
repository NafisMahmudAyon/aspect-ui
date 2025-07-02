'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
export const TabList = ({ children, className = "", ...rest }) => {
    return _jsx("div", { className: cn('mb-4 space-x-2 bg-bg text-text rounded-md p-[3px] inline-flex items-center', className), ...rest, children: children });
};
