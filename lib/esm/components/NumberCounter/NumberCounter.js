'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect, useRef } from 'react';
import { cn } from '../../utils/cn';
export const NumberCounter = ({ end, duration, decimals = 0, onVisible = false, repeatOnVisible = false, className = '', ...rest }) => {
    const [count, setCount] = useState(0);
    const counterRef = useRef(null);
    useEffect(() => {
        const startCounting = () => {
            let start = 0;
            const increment = end / (duration / 16); // 16ms is roughly 60fps
            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    clearInterval(timer);
                    setCount(end);
                }
                else {
                    setCount(start);
                }
            }, 16);
        };
        if (onVisible) {
            const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    startCounting();
                    if (!repeatOnVisible) {
                        observer.disconnect();
                    }
                }
            }, { threshold: 0.1 });
            if (counterRef.current) {
                observer.observe(counterRef.current);
            }
            return () => observer.disconnect();
        }
        else {
            startCounting();
        }
    }, [end, duration, onVisible, repeatOnVisible]);
    return _jsx("div", { className: cn('text-primary-800 dark:text-primary-200 inline-block', className), ref: counterRef, ...rest, children: count.toFixed(decimals) });
};
