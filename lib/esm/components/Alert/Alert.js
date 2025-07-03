'use client';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { CircleAlert, CircleCheckBig, CircleX, Info, X } from 'lucide-react';
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
                return (_jsx(CircleCheckBig, {}));
            case 'warning':
                return (_jsx(CircleAlert, {}));
            case 'error':
                return (_jsx(CircleX, {}));
            case 'info':
                return (_jsx(Info, {}));
            default:
                return _jsx(_Fragment, {});
        }
    };
    return (_jsxs("div", { className: cn(getAlertStyles(), className), role: 'alert', ...rest, children: [_jsxs("div", { className: 'flex items-center', children: [_jsx("span", { className: `mr-2 ${getIconStyles()}`, children: icon || getIcon() }), _jsx("span", { className: 'block flex-1', children: children })] }), closeable && (_jsx("span", { className: 'absolute bottom-0 right-0 top-0 px-4 py-3', onClick: handleClose, title: 'close', role: 'button', "aria-label": 'close', children: _jsx(X, { className: cn(getCloseStyles()) }) }))] }));
};
