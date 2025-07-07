'use client';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import { cn } from '../../utils/cn';
export const CircularProgressBar = ({ value = 75, className = '', onVisible, duration = 2, strokeColor = 'var(--color-bg-light)', strokeFillColor = 'var(--color-primary)', strokeWidth = 2, contentClassName = '', hideValue = false, children, onClick, ...rest }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [percentage, setPercentage] = useState(0);
    const svgRef = useRef(null);
    const durationValue = (duration * 1000) / value;
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting);
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.5 // Adjust this threshold as needed
        });
        if (svgRef.current) {
            observer.observe(svgRef.current);
        }
        return () => {
            if (svgRef.current) {
                observer.unobserve(svgRef.current);
            }
        };
    }, []);
    useEffect(() => {
        if (onVisible && !isVisible) {
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
    }, [onVisible, isVisible, value]);
    return (_jsx("div", { className: cn('relative size-24', className), onClick: onClick, role: 'progressbar', ...rest, children: _jsxs("div", { className: 'absolute top-0 left-0 h-full w-full origin-center -rotate-90 transform', children: [_jsx("svg", { className: 'absolute top-1/2 left-1/2 z-0 h-full w-full -translate-x-1/2 -translate-y-1/2', viewBox: '0 0 24 24', ref: svgRef, children: _jsx("circle", { className: ' ', cx: '12', cy: '12', r: '10', fill: 'none', stroke: strokeColor, strokeLinecap: 'round', strokeWidth: strokeWidth }) }), _jsx("svg", { className: 'absolute top-1/2 left-1/2 z-10 h-full w-full -translate-x-1/2 -translate-y-1/2 stroke-slate-600', viewBox: '0 0 24 24', ref: svgRef, children: _jsx("circle", { className: ' ', cx: '12', cy: '12', r: '10', fill: 'none', stroke: strokeFillColor, strokeLinecap: 'round', strokeDasharray: '62.83', strokeWidth: strokeWidth, style: {
                            strokeDashoffset: `${((100 - percentage) * 62.83) / 100}`
                        } }) }), _jsxs("span", { className: `${contentClassName} text-text absolute inset-0 flex h-full w-full rotate-90 items-center justify-center`, children: [!children && !hideValue && _jsxs(_Fragment, { children: [percentage, "%"] }), children && _jsx(_Fragment, { children: children })] })] }) }));
};
