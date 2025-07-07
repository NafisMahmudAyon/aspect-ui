'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
export const DropdownList = ({ children, className = '', ...rest }) => {
    return (_jsx("div", { className: cn('border-border border-b py-1 last:border-b-0', className), ...rest, children: children }));
};
