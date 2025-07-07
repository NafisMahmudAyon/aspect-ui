'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import { cn } from '../../utils/cn';
import { useDropdown } from './DropdownContext';
export const DropdownContent = ({ children, className = '', ...rest }) => {
    const { isOpen, positionClass } = useDropdown();
    const contentRef = useRef(null);
    useEffect(() => {
        if (isOpen && contentRef.current) {
            const selectedItem = contentRef.current.querySelector('[data-selected="true"]');
            if (selectedItem) {
                const container = contentRef.current;
                const containerHeight = container.clientHeight;
                const itemTop = selectedItem.offsetTop;
                const itemHeight = selectedItem.offsetHeight;
                container.scrollTop = itemTop - containerHeight / 2 + itemHeight / 2;
            }
        }
    }, [isOpen]);
    if (!isOpen)
        return null;
    return (_jsx("div", { className: cn('bg-bg absolute z-10 rounded-md', positionClass, className), ref: contentRef, role: 'presentation', ...rest, children: children }));
};
