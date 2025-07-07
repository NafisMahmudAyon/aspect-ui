'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
export const TableCaption = ({ children, className = '', position = 'bottom', ...rest }) => {
    return (_jsx("caption", { className: cn('text-text-muted mt-4 mb-2 text-sm', position === 'top' ? 'caption-top' : 'caption-bottom', className), ...rest, children: children }));
};
