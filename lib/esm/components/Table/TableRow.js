'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
export const TableRow = ({ children, className = '' }) => {
    return _jsx("tr", { className: cn("hover:bg-bg-light/50 border-b border-b-border transition-colors", className), children: children });
};
