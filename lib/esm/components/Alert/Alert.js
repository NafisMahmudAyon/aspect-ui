'use client';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { cn } from '../../utils/cn';
export const Alert = ({ type = 'info', children, closeable = true, onClose, className = '', icon, ...rest }) => {
    const [isVisible, setIsVisible] = useState(true);
    const handleClose = () => {
        setIsVisible(false);
        if (onClose) {
            onClose();
        }
    };
    if (!isVisible)
        return null;
    const getAlertStyles = () => {
        const baseStyles = `px-4 py-3 rounded-sm relative`;
        switch (type) {
            case 'success':
                return `${baseStyles} bg-success border border-border text-text`;
            case 'warning':
                return `${baseStyles} bg-warning border border-border text-text`;
            case 'error':
                return `${baseStyles} bg-error border border-border text-text`;
            case 'info':
                return `${baseStyles} bg-info border border-border text-text`;
            default:
                return baseStyles;
        }
    };
    const getIconStyles = () => {
        switch (type) {
            case 'success':
                return 'text-success-foreground';
            case 'warning':
                return 'text-warning-foreground';
            case 'error':
                return 'text-error-foreground';
            case 'info':
                return 'text-info-foreground';
            default:
                return '';
        }
    };
    const getCloseStyles = () => {
        switch (type) {
            case 'success':
                return 'text-success-foreground';
            case 'warning':
                return 'text-warning-foreground';
            case 'error':
                return 'text-error-foreground';
            case 'info':
                return 'text-info-foreground';
            default:
                return '';
        }
    };
    const getIcon = () => {
        switch (type) {
            case 'success':
                return (_jsx("svg", { className: 'h-5 w-5', fill: 'currentColor', viewBox: '0 0 20 20', children: _jsx("path", { fillRule: 'evenodd', d: 'M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z', clipRule: 'evenodd' }) }));
            case 'warning':
                return (_jsx("svg", { className: 'h-5 w-5', fill: 'currentColor', viewBox: '0 0 20 20', children: _jsx("path", { fillRule: 'evenodd', d: 'M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z', clipRule: 'evenodd' }) }));
            case 'error':
                return (_jsx("svg", { className: 'h-5 w-5', fill: 'currentColor', viewBox: '0 0 20 20', children: _jsx("path", { fillRule: 'evenodd', d: 'M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z', clipRule: 'evenodd' }) }));
            case 'info':
                return (_jsx("svg", { className: 'h-5 w-5', fill: 'currentColor', viewBox: '0 0 20 20', children: _jsx("path", { fillRule: 'evenodd', d: 'M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z', clipRule: 'evenodd' }) }));
            default:
                return _jsx(_Fragment, {});
        }
    };
    return (_jsxs("div", { className: cn(getAlertStyles(), className), role: 'alert', ...rest, children: [_jsxs("div", { className: 'flex items-center', children: [_jsx("span", { className: `mr-2 ${getIconStyles()}`, children: icon || getIcon() }), _jsx("span", { className: 'block flex-1', children: children })] }), closeable && (_jsx("span", { className: 'absolute bottom-0 right-0 top-0 px-4 py-3', onClick: handleClose, children: _jsxs("svg", { className: `h-6 w-6 fill-current ${getCloseStyles()}`, role: 'button', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 20 20', children: [_jsx("title", { children: "Close" }), _jsx("path", { d: 'M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z' })] }) }))] }));
};
