'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
export const TableHeader = ({ children, className = '', ...rest }) => {
    return _jsx("thead", { className: cn('[&_tr]:border-b [&_tr]:border-b-border', className), ...rest, children: children });
};
