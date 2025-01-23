'use client';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
export const Switch = ({ checked, onChange, disabled = false, label, size = 'md', className = '', switchClassName = '', activeClassName = '', deactiveClassName = '', activeSwitchClassName = '', deactiveSwitchClassName = '', labelClassName = '', switchIconEnabled = true, activeSwitchIcon, deactiveSwitchIcon }) => {
    const handleChange = (event) => {
        onChange(event.target.checked);
    };
    const sizeClasses = {
        sm: 'w-[28px] h-[16px]',
        md: 'w-[36px] h-[20px]',
        lg: 'w-[48px] h-[28px]',
    };
    const switchSizeClasses = {
        sm: 'size-[12px]',
        md: 'size-[16px]',
        lg: 'size-[22px]',
    };
    return (_jsxs("label", { className: cn("inline-flex cursor-pointer items-center", disabled ? 'cursor-not-allowed opacity-50' : '', className), children: [_jsxs("div", { className: cn("relative", switchClassName), children: [_jsx("input", { type: 'checkbox', className: cn('sr-only'), checked: checked, onChange: handleChange, disabled: disabled }), _jsx("div", { className: cn("rounded-full shadow-inner transition-colors duration-300 ease-in-out", sizeClasses[size], checked ? cn('bg-primary-900 dark:bg-primary-200', activeClassName) : cn('bg-primary-200 dark:bg-primary-900', deactiveClassName)) }), _jsx("div", { className: cn("absolute -translate-y-1/2 top-1/2 left-0.5 rounded-full flex items-center justify-center shadow-sm leading-none transition-transform duration-300 ease-in-out", switchSizeClasses[size], checked ? cn('translate-x-[calc(100%-0.125rem)] transform bg-primary-200 dark:bg-primary-900', activeSwitchClassName) : cn('bg-primary-900 dark:bg-primary-200', deactiveSwitchClassName)), children: switchIconEnabled && activeSwitchIcon && (_jsx(_Fragment, { children: deactiveSwitchIcon ? _jsx(_Fragment, { children: checked ? activeSwitchIcon : deactiveSwitchIcon }) : activeSwitchIcon })) })] }), label && _jsx("span", { className: cn("ml-3", labelClassName), children: label })] }));
};
