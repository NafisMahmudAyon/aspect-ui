'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import { cn } from '../../utils/cn';
export const Slider = ({ min = 0, max = 100, step = 1, defaultValue, onChange, className = "", disabled = false, ...rest }) => {
    const [values, setValues] = useState(defaultValue);
    const sliderRef = useRef(null);
    useEffect(() => {
        if (onChange) {
            onChange(values);
        }
    }, [values, onChange]);
    // Helper function to round value to nearest step
    const roundToStep = (value) => {
        const steps = Math.round((value - min) / step);
        return Math.min(max, Math.max(min, min + (steps * step)));
    };
    const handleMouseDown = (index) => (e) => {
        e.preventDefault();
        const handleMouseMove = (e) => {
            if (sliderRef.current) {
                const rect = sliderRef.current.getBoundingClientRect();
                const percentage = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
                const rawValue = percentage * (max - min) + min;
                const steppedValue = roundToStep(rawValue); // Round to nearest step
                setValues(prevValues => {
                    const newValues = [...prevValues];
                    newValues[index] = steppedValue;
                    return newValues.sort((a, b) => a - b);
                });
            }
        };
        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };
    const getLeftPosition = (value) => {
        return ((value - min) / (max - min)) * 100;
    };
    return (_jsxs("div", { className: cn('relative h-2 w-full rounded-full bg-bg-light', disabled && 'opacity-50 cursor-not-allowed pointer-events-none', className), ref: sliderRef, ...rest, children: [_jsx("div", { className: 'absolute h-full rounded-full bg-primary', style: {
                    left: `${values.length === 1 ? '0' : getLeftPosition(values[0])}%`,
                    right: `${values.length === 1
                        ? 100 - getLeftPosition(values[0])
                        : 100 - getLeftPosition(values[1])}%`
                } }), values.map((value, index) => (_jsx("div", { className: cn('absolute size-4 cursor-pointer rounded-full border-2 border-primary  bg-primary-foreground'), style: {
                    left: `calc(${getLeftPosition(value)}% - 0.5rem)`,
                    top: '-0.25rem'
                }, onMouseDown: handleMouseDown(index) }, index)))] }));
};
