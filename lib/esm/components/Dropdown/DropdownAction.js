'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '../../utils/cn';
import { useDropdown } from './DropdownContext';
export const DropdownAction = ({ children, className = "", icon, iconPosition = "end", ...rest }) => {
    const { toggleDropdown, direction } = useDropdown();
    const [iconDefault, setIconDefault] = useState(_jsx(ChevronDown, {}));
    useEffect(() => {
        if (direction == 'top') {
            setIconDefault(_jsx(ChevronUp, {}));
        }
        if (direction == 'left') {
            setIconDefault(_jsx(ChevronLeft, {}));
        }
        if (direction == 'right') {
            setIconDefault(_jsx(ChevronRight, {}));
        }
    }, [direction]);
    return (_jsxs("button", { type: 'button', className: cn('flex w-fit justify-center items-center gap-2 border border-border rounded-md bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-border', className), onClick: toggleDropdown, ...rest, children: [iconPosition === 'start' && (icon || iconDefault), children, iconPosition === 'end' && (icon ?? iconDefault)] }));
};
