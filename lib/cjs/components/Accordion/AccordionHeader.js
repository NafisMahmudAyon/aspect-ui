'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
import { useAccordion } from './AccordionContext';
const Up = ({ className = '', size = 24, ...rest }) => {
    return (_jsx("svg", { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', className: className, ...rest, children: _jsx("path", { d: "m5.996 14.996 6-6L18 15", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }) }));
};
const Down = ({ className = '', size = 24, ...rest }) => {
    return (_jsx("svg", { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', className: className, ...rest, children: _jsx("path", { d: "m18 9-6 6-6.004-6.004", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }) }));
};
export const AccordionHeader = ({ children, isOpen, onToggle, className = '', iconEnabled: headerIconEnabled, iconPosition: headerIconPosition, iconClassName: headerIconClassName, activeIconClassName: headerActiveIconClassName, activeIcon: headerActiveIcon, inactiveIcon: headerInactiveIcon, labelClassName: headerLabelClassName, activeLabelClassName: headerActiveLabelClassName, headerClassName: headerHeaderClassName, activeHeaderClassName: headerActiveHeaderClassName, disabled = false, reset = false, tagName = 'h2', ...rest }) => {
    const { iconEnabled: accordionIconEnabled, iconPosition: accordionIconPosition, iconClassName: accordionIconClassName, activeIconClassName: accordionActiveIconClassName, activeIcon: accordionActiveIcon, inactiveIcon: accordionInactiveIcon, labelClassName: accordionLabelClassName, activeLabelClassName: accordionActiveLabelClassName, headerClassName: accordionHeaderClassName, activeHeaderClassName: accordionActiveHeaderClassName, reset: accordionReset } = useAccordion();
    const TagName = tagName;
    const iconEnabled = headerIconEnabled ?? accordionIconEnabled;
    const iconPosition = headerIconPosition ?? accordionIconPosition;
    const iconClassName = headerIconClassName ?? accordionIconClassName;
    const activeIconClassName = headerActiveIconClassName ?? accordionActiveIconClassName;
    const activeIcon = headerActiveIcon ?? accordionActiveIcon ?? _jsx(Up, {});
    const inactiveIcon = headerInactiveIcon ?? accordionInactiveIcon ?? _jsx(Down, {});
    const icon = isOpen ? activeIcon : inactiveIcon;
    const iconClass = cn(iconClassName, isOpen ? activeIconClassName : '', 'transition-transform duration-300');
    const labelClassName = headerLabelClassName ?? accordionLabelClassName;
    const activeLabelClassName = headerActiveLabelClassName ?? accordionActiveLabelClassName;
    const headerClassName = headerHeaderClassName ?? accordionHeaderClassName;
    const activeHeaderClassName = headerActiveHeaderClassName ?? accordionActiveHeaderClassName;
    const labelClass = cn(labelClassName, isOpen ? activeLabelClassName : '');
    const headerClass = cn(headerClassName, isOpen ? activeHeaderClassName : '');
    const accordionHeaderReset = accordionReset ?? reset;
    return (_jsxs(TagName, { className: cn('flex w-full items-center justify-between p-4 text-left transition-all duration-150 ease-in-out', disabled
            ? ''
            : `cursor-pointer ${accordionHeaderReset ? '' : 'hover:bg-primary-200 dark:hover:bg-primary-900'}`, isOpen
            ? accordionHeaderReset ? '' : 'bg-primary-200 text-primary-800 dark:bg-primary-900 dark:text-primary-200'
            : accordionHeaderReset ? '' : 'bg-primary-100 text-primary-900 dark:bg-primary-800 dark:text-primary-100', className, headerClass), onClick: onToggle, disabled: disabled, ...rest, children: [iconEnabled && iconPosition === 'left' && (_jsx("span", { className: `${iconClass}`, children: icon })), _jsx("span", { className: `${labelClass} grow`, children: children }), iconEnabled && iconPosition === 'right' && (_jsx("span", { className: `${iconClass}`, children: icon }))] }));
};
