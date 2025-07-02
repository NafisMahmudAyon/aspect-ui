'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useCallback, useRef, useEffect } from 'react';
import { DropdownProvider } from './DropdownContext';
export const Dropdown = ({ children, hover = false, hoverDelay = 0, closeDelay = 100, direction = 'bottom' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const timeoutRef = useRef(null);
    const dropdownRef = useRef(null);
    const openDropdown = useCallback(() => {
        if (timeoutRef.current)
            clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setIsOpen(true), hoverDelay);
    }, [hoverDelay]);
    const closeDropdown = useCallback(() => {
        if (timeoutRef.current)
            clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setIsOpen(false), closeDelay);
    }, [closeDelay]);
    const toggleDropdown = useCallback(() => {
        setIsOpen(prev => !prev);
    }, []);
    useEffect(() => {
        return () => {
            if (timeoutRef.current)
                clearTimeout(timeoutRef.current);
        };
    }, []);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current &&
                !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    const getPositionClass = () => {
        switch (direction) {
            case 'top':
                return 'bottom-full mb-2';
            case 'left':
                return 'right-full mr-2 top-0';
            case 'right':
                return 'left-full top-0 ml-2';
            case 'bottom-right':
                return 'top-full left-0 mt-2';
            case 'bottom-left':
                return 'top-full right-0 mt-2';
            case 'top-right':
                return 'bottom-full left-0 mb-2';
            case 'top-left':
                return 'bottom-full right-0 mb-2';
            default:
                return 'top-full left-0 mt-2'; // bottom (default)
        }
    };
    return (_jsx(DropdownProvider, { value: {
            isOpen,
            toggleDropdown: !hover ? toggleDropdown : () => { },
            closeDropdown: !hover ? closeDropdown : () => { },
            direction,
            positionClass: getPositionClass()
        }, children: _jsx("div", { className: 'relative inline-block text-left', ...(hover
                ? { onMouseEnter: openDropdown, onMouseLeave: closeDropdown }
                : {}), ref: dropdownRef, children: children }) }));
};
