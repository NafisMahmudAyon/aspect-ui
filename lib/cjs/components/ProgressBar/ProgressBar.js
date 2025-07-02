'use client';
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import { cn } from '../../utils/cn';
export const ProgressBar = ({ value, contentPosition = 'right', duration = 2, animateOnLoad = true, animateOnVisible = false, children, className = '', containerClassName = '', fillClassName = '', contentClassName = '', min = 0, max = 100, ...rest }) => {
    // Ensure value is within min and max range
    const clampedValue = Math.min(Math.max(value, min), max);
    // Calculate percentage
    const [percentage, setPercentage] = useState(((clampedValue - min) / (max - min)) * 100);
    const durationValue = (duration * 1000) / value;
    // Ref for the progress bar
    const progressBarRef = useRef(null);
    // State to track visibility
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting);
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.5 // Adjust this threshold as needed
        });
        if (progressBarRef.current) {
            observer.observe(progressBarRef.current);
        }
        return () => {
            if (progressBarRef.current) {
                observer.unobserve(progressBarRef.current);
            }
        };
    }, []);
    useEffect(() => {
        if (animateOnLoad === true && !isVisible) {
            setPercentage(0);
        }
    }, []);
    useEffect(() => {
        if (animateOnVisible === true && !isVisible) {
            setPercentage(0);
        }
        else if (isVisible) {
            const interval = setInterval(() => {
                if (percentage < value) {
                    setPercentage(prevPercentage => Math.min(prevPercentage + 1, value));
                }
                else {
                    clearInterval(interval);
                }
            }, durationValue);
            return () => clearInterval(interval);
        }
    }, [animateOnVisible, isVisible, value]);
    return (_jsxs("div", { className: cn("my-2 flex w-full items-center gap-4", className), ...rest, children: [contentPosition === 'left' && (_jsxs("span", { className: cn("min-w-10 text-text", contentClassName), children: [!children && _jsx(_Fragment, { children: `${percentage}%` }), children && children] })), _jsx("div", { className: cn("flex-1 overflow-hidden rounded-full border border-border p-1 bg-bg-light", containerClassName), children: _jsx("div", { className: cn("relative flex h-4 rounded-full bg-primary", fillClassName), role: 'progressbar', "aria-valuenow": clampedValue, "aria-valuemin": min, "aria-valuemax": max, style: { width: `${percentage}%` }, ref: progressBarRef }) }), contentPosition === 'right' && (_jsxs("span", { className: cn("min-w-10 text-text", contentClassName), children: [!children && _jsx(_Fragment, { children: `${percentage}%` }), children && children] }))] }));
};
