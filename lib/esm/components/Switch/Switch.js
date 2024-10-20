'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Switch = ({ checked, onChange, disabled = false, label, className = '', switchClassName = '', labelClassName = '' }) => {
    const handleChange = (event) => {
        onChange(event.target.checked);
    };
    return (_jsxs("label", { className: `inline-flex cursor-pointer items-center ${disabled ? 'cursor-not-allowed opacity-50' : ''} ${className}`, children: [_jsxs("div", { className: `relative ${switchClassName}`, children: [_jsx("input", { type: 'checkbox', className: 'sr-only', checked: checked, onChange: handleChange, disabled: disabled }), _jsx("div", { className: `h-6 w-10 rounded-full bg-gray-200 shadow-inner transition-colors duration-300 ease-in-out ${checked ? 'bg-blue-500' : ''}` }), _jsx("div", { className: `absolute inset-y-1 left-1 h-4 w-4 rounded-full bg-white shadow transition-transform duration-300 ease-in-out ${checked ? 'translate-x-full transform' : ''}` })] }), label && _jsx("span", { className: `ml-3 ${labelClassName}`, children: label })] }));
};
