'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
import { TableProvider } from './TableContext';
export const Table = ({ children, className = '', ...rest }) => {
    return (_jsx(TableProvider, { children: _jsx("div", { className: 'relative w-full overflow-auto', children: _jsx("table", { className: cn("relative w-full", className), ...rest, children: children }) }) }));
};
