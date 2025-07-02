'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
export const TableBody = ({ children, className = '' }) => {
    return (_jsx("tbody", { className: cn("[&_tr:last-child]:border-0", className), children: children }));
};
