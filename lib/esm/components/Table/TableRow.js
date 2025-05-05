'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
export const TableRow = ({ children, className = '' }) => {
    return _jsx("tr", { className: cn("hover:bg-primary-100 data-[state=selected]:bg-primary-100 dark:border-b-primary-800 dark:hover:bg-primary-800", className), children: children });
};
