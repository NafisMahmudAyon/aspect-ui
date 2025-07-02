'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
export const TableHeadCell = ({ children, className = '' }) => {
    return (_jsx("th", { className: cn("text-text h-10 px-2 text-left align-middle font-medium whitespace-nowrap", className), children: children }));
};
