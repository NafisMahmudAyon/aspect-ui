'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { cn } from '../../utils/cn';
export const Toggle = ({ value, children, className = '', defaultSelected = false, outline = false, disabled = false, size = 'medium', onChange, ...rest }) => {
    const [isSelected, setIsSelected] = useState(defaultSelected);
    const handleClick = () => {
        if (disabled)
            return;
        const newSelectedState = !isSelected;
        setIsSelected(newSelectedState);
        onChange?.(value, newSelectedState);
    };
    const getButtonStyles = () => {
        if (outline) {
            return isSelected
                ? 'border border-border bg-bg-light text-text'
                : 'border border-border bg-transparent shadow-xs hover:bg-bg-light hover:text-text-muted';
        }
        return isSelected ? 'bg-bg-light text-text' : 'bg-transparent';
    };
    const getSizeStyles = () => {
        switch (size) {
            case 'small':
                return 'h-8 px-1.5 min-w-8';
            case 'medium':
                return 'h-9 px-2 min-w-9';
            case 'large':
                return 'h-10 px-2.5 min-w-10';
        }
    };
    return (_jsx("button", { className: cn('hover:bg-bg-light hover:text-text-muted focus-visible:border-ring focus-visible:ring-ring/50 inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50', getButtonStyles(), getSizeStyles(), className), onClick: handleClick, disabled: disabled, ...rest, children: children }));
};
