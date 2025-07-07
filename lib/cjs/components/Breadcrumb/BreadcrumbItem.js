'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
export const BreadcrumbItem = ({ children, className = '', ...rest }) => {
    return (_jsx("li", { className: cn('flex cursor-pointer items-center', className), ...rest, children: children }));
};
BreadcrumbItem.displayName = 'BreadcrumbItem';
