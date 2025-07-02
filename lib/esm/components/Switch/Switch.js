'use client';
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
export const Switch = ({ checked, onChange, disabled = false, label, size = 'medium', className = '', switchClassName = '', activeClassName = '', deactiveClassName = '', activeSwitchClassName = '', deactiveSwitchClassName = '', labelClassName = '', switchIconEnabled = true, activeSwitchIcon, deactiveSwitchIcon }) => {
    const sizeClasses = {
        small: 'w-[2rem] h-[1.15rem]',
        medium: 'w-[2.5rem] h-[1.406rem]',
        large: 'w-[3rem] h-[1.687rem]',
    };
    const switchSizeClasses = {
        small: cn('size-[calc(1.15rem-3px)]', checked ? cn('translate-x-[calc(100%-2px)] transform bg-primary-foreground text-primary', activeSwitchClassName) : cn('bg-primary text-primary-foreground translate-x-[2px]', deactiveSwitchClassName)),
        medium: cn('size-[calc(1.406rem-3px)]', checked ? cn('translate-x-[calc(100%-2px)] transform bg-primary-foreground text-primary', activeSwitchClassName) : cn('bg-primary text-primary-foreground translate-x-[2px]', deactiveSwitchClassName)),
        large: cn('size-[calc(1.687rem-3px)]', checked ? cn('translate-x-[calc(100%-3px)] transform bg-primary-foreground text-primary', activeSwitchClassName) : cn('bg-primary text-primary-foreground translate-x-[2px]', deactiveSwitchClassName)),
    };
    return (_jsxs("div", { className: cn("inline-flex cursor-pointer items-center", disabled ? 'cursor-not-allowed opacity-50 pointer-events-none' : '', className), children: [_jsx("div", { className: cn("inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none", sizeClasses[size], checked ? cn('bg-primary', activeClassName) : cn('bg-primary-foreground', deactiveClassName, switchClassName)), onClick: () => onChange(!checked), children: _jsx("div", { className: cn("rounded-full flex items-center justify-center shadow-sm leading-none transition-transform duration-300 ease-in-out", switchSizeClasses[size]), children: switchIconEnabled && activeSwitchIcon && (_jsx(_Fragment, { children: deactiveSwitchIcon ? _jsx(_Fragment, { children: checked ? activeSwitchIcon : deactiveSwitchIcon }) : activeSwitchIcon })) }) }), label && _jsx("span", { className: cn("ml-3 text-text", labelClassName), children: label })] }));
};
