'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronRight } from 'lucide-react';
import React, { Children } from 'react';
import { cn } from '../../utils/cn';
export const Breadcrumb = ({ children, className = "", separator = _jsx(ChevronRight, {}), separatorClassName = '', ...rest }) => {
    // Safely convert children to an array
    const childrenArray = Children.toArray(children);
    return (_jsx("ul", { className: cn("text-muted flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5", className), ...rest, children: childrenArray.map((child, index) => (_jsxs(React.Fragment, { children: [child, index < childrenArray.length - 1 && (_jsx("span", { className: cn('mx-2 text-muted', separatorClassName), children: separator }))] }, index))) }));
};
Breadcrumb.displayName = 'Breadcrumb';
