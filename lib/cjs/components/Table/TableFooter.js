'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
export const TableFooter = ({ children, className = '', ...rest }) => {
    return (_jsx("tfoot", { className: cn('bg-bg-light/50 border-t-border border-t font-medium [&>tr]:last:border-b-0', className), ...rest, children: children }));
};
