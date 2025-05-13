'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { cn } from '../../utils/cn';
const Tooltip = ({ children, direction = 'top', showOnClick = false, className = '', arrowColor = '#65a3a9', arrowSize = 10, contentClassName = '', actionClassName = '', showOnLoad = false, reset = false, closeOnClickOutside = true, ...rest }) => {
    const [isVisible, setIsVisible] = useState(showOnLoad);
    const [tooltipPosition, setTooltipPosition] = useState(null);
    const tooltipRef = useRef(null);
    const triggerRef = useRef(null);
    const [actionElement, contentElement] = React.Children.toArray(children);
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    let showTimeout = null;
    let hideTimeout = null;
    const updateTooltipPosition = () => {
        if (!tooltipRef.current || !triggerRef.current)
            return;
        const rect = triggerRef.current.getBoundingClientRect();
        const tooltipRect = tooltipRef.current.getBoundingClientRect();
        const offset = 10; // Spacing between the tooltip and the element
        switch (direction) {
            case 'top':
                setTooltipPosition({
                    top: rect.top - tooltipRect.height - offset + window.scrollY,
                    left: rect.left + rect.width / 2 - tooltipRect.width / 2 + window.scrollX,
                });
                break;
            case 'right':
                setTooltipPosition({
                    top: rect.top + rect.height / 2 - tooltipRect.height / 2 + window.scrollY,
                    left: rect.right + offset + window.scrollX,
                });
                break;
            case 'bottom':
                setTooltipPosition({
                    top: rect.bottom + offset + window.scrollY,
                    left: rect.left + rect.width / 2 - tooltipRect.width / 2 + window.scrollX,
                });
                break;
            case 'left':
                setTooltipPosition({
                    top: rect.top + rect.height / 2 - tooltipRect.height / 2 + window.scrollY,
                    left: rect.left - tooltipRect.width - offset + window.scrollX,
                });
                break;
        }
    };
    const showTooltip = () => {
        if (hideTimeout) {
            clearTimeout(hideTimeout);
        }
        showTimeout = setTimeout(() => {
            setIsVisible(true);
            setTooltipPosition(null); // Reset position to allow recalculation
        }, 100); // Add a small delay
    };
    const hideTooltip = () => {
        if (showTimeout) {
            clearTimeout(showTimeout);
        }
        hideTimeout = setTimeout(() => {
            setIsVisible(false);
        }, 100); // Add a small delay
    };
    const handleOutsideClick = (event) => {
        if (closeOnClickOutside &&
            tooltipRef.current &&
            !tooltipRef.current.contains(event.target) &&
            triggerRef.current &&
            !triggerRef.current.contains(event.target)) {
            setIsVisible(false);
        }
    };
    useEffect(() => {
        if (isVisible && !tooltipPosition) {
            updateTooltipPosition();
        }
        if (isVisible) {
            document.addEventListener('scroll', updateTooltipPosition, true); // Capture scroll events
        }
        if (showOnClick) {
            document.addEventListener('click', handleOutsideClick);
        }
        return () => {
            document.removeEventListener('scroll', updateTooltipPosition, true);
            document.removeEventListener('click', handleOutsideClick);
            if (showTimeout)
                clearTimeout(showTimeout);
            if (hideTimeout)
                clearTimeout(hideTimeout);
        };
    }, [isVisible, tooltipPosition, showOnClick]);
    const getArrowStyle = () => {
        const baseStyle = {
            position: 'absolute',
            width: '0',
            height: '0',
            border: `${arrowSize}px solid transparent`
        };
        switch (direction) {
            case 'top':
                return { ...baseStyle, bottom: `-${arrowSize * 2}px`, left: '50%', transform: 'translateX(-50%)', borderTopColor: arrowColor };
            case 'right':
                return { ...baseStyle, left: `-${arrowSize * 2}px`, top: '50%', transform: 'translateY(-50%)', borderRightColor: arrowColor };
            case 'bottom':
                return {
                    ...baseStyle, top: `-${arrowSize * 2}px`, left: '50%', transform: 'translateX(-50%)', borderBottomColor: arrowColor
                };
            case 'left':
                return {
                    ...baseStyle, right: `-${arrowSize * 2}px`, top: '50%', transform: 'translateY(-50%)', borderLeftColor: arrowColor
                };
        }
    };
    // console.log(getArrowStyle())
    return (_jsxs("div", { className: cn('relative inline-block', className), ...rest, children: [_jsx("div", { ref: triggerRef, className: cn('', actionClassName), onMouseEnter: showOnClick ? undefined : showTooltip, onMouseLeave: showOnClick ? undefined : hideTooltip, onClick: showOnClick ? showTooltip : undefined, children: actionElement }), mounted && isVisible &&
                ReactDOM.createPortal(_jsxs("div", { ref: tooltipRef, className: cn('absolute z-[9999]', 
                    // 'absolute rounded-md text-body2 w-max', reset ? "" : "bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200",
                    contentClassName), style: {
                        top: tooltipPosition?.top ?? '-9999px',
                        left: tooltipPosition?.left ?? '-9999px',
                        position: 'absolute',
                        visibility: tooltipPosition ? 'visible' : 'hidden',
                    }, children: [contentElement, _jsx("div", { style: getArrowStyle() })] }), document.body)] }));
};
const TooltipAction = ({ children, className = '', reset = false, ...rest }) => _jsx("div", { className: className, ...rest, children: children });
const TooltipContent = ({ children, className = '', reset = false, ...rest }) => _jsx("div", { className: cn('rounded-md px-2 py-4 text-body2 w-max', reset ? "" : "bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200", className), ...rest, children: children });
export { Tooltip, TooltipAction, TooltipContent };
