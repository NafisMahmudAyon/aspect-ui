'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
export const TableCell = ({ children, className = '', colSpan, ...rest }) => {
    return (_jsx("td", { className: cn('p-2 align-middle text-sm whitespace-nowrap', className), colSpan: colSpan, ...rest, children: children }));
};
