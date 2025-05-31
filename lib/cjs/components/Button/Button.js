import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
export const Button = ({ type = 'button', variant = 'primary', size = 'medium', disabled = false, loading = false, children, icon, iconPosition = 'left', className = '', iconClassName = '', 
// isFab = false,
position = 'bottom-right', ...rest }) => {
    const baseStyles = `${variant == 'link' ? "" : "inline-flex gap-2 items-center justify-center"} font-medium rounded-md focus:outline-hidden transition ease-in-out duration-200 cursor-pointer`;
    const sizeStyles = {
        small: `${variant == 'link' ? "" : "px-3 py-2"} text-sm`,
        medium: `${variant == 'link' ? "" : "px-4 py-2"} text-base`,
        large: `${variant == 'link' ? "" : "px-6 py-3"} text-lg`,
        // fab: 'w-16 h-16 p-0 rounded-full'
    };
    const variantStyles = {
        primary: `
      bg-primary-100 dark:bg-primary-900 hover:bg-primary-200 dark:hover:bg-primary-800 text-primary-800 dark:text-primary-200 hover:text-primary-900 dark:hover:text-primary-100 focus-visible:ring-1 focus-visible:ring-primary-900 dark:focus-visible:ring-primary-100 focus-visible:outline-hidden
    `,
        secondary: `
      bg-secondary-300 dark:bg-secondary-900 hover:bg-secondary-200 dark:hover:bg-secondary-800 text-secondary-800 dark:text-secondary-200 hover:text-secondary-900 dark:hover:text-secondary-100 focus-visible:ring-1 focus-visible:ring-secondary-900 dark:focus-visible:ring-secondary-100 focus-visible:outline-hidden
    `,
        success: `
      bg-success-500 hover:bg-success-600 text-success-950 dark:text-success-100 focus-visible:ring-1 focus-visible:ring-success-900 dark:focus-visible:ring-success-100 focus-visible:outline-hidden
    `,
        warning: `
      bg-warning-500 hover:bg-warning-600 text-warning-950 dark:text-warning-100 focus-visible:ring-1 focus-visible:ring-warning-900 dark:focus-visible:ring-warning-100 focus-visible:outline-hidden
    `,
        link: `
      text-primary-500 hover:underline underline-offset-2 focus-visible:underline focus-visible:outline-hidden
    `,
        outline: `
      border border-primary-800 dark:border-primary-200 text-primary-800 hover:text-primary-900 dark:text-primary-200 dark:hover:text-primary-300 hover:border-primary-900 dark:hover:border-primary-300 focus-visible:ring-1 focus-visible:ring-primary-900 dark:focus-visible:ring-primary-100 focus-visible:outline-hidden
    `,
        ghost: `
      bg-transparent hover:bg-primary-100 dark:hover:bg-primary-900 text-primary-800 dark:text-primary-200 hover:text-primary-900 dark:hover:text-primary-100 focus-visible:ring-1 focus-visible:ring-primary-900 dark:focus-visible:ring-primary-100 focus-visible:outline-hidden
    `,
        icon: `
      bg-primary-100 dark:bg-primary-900 hover:bg-primary-200 dark:hover:bg-primary-800 text-primary-800 dark:text-primary-200 hover:text-primary-900 dark:hover:text-primary-100 focus-visible:ring-1 focus-visible:ring-primary-900 dark:focus-visible:ring-primary-100 focus-visible:outline-hidden
    `,
        withIcon: `
      bg-primary-100 dark:bg-primary-900 hover:bg-primary-200 dark:hover:bg-primary-800 text-primary-800 dark:text-primary-200 hover:text-primary-900 dark:hover:text-primary-100 focus-visible:ring-1 focus-visible:ring-primary-900 dark:focus-visible:ring-primary-100 focus-visible:outline-hidden
    `
    };
    // const fabPositionStyles = {
    //   'bottom-right': 'fixed bottom-4 right-4',
    //   'bottom-left': 'fixed bottom-4 left-4'
    // }
    return (_jsxs("button", { type: type, disabled: disabled || loading, className: cn(baseStyles, sizeStyles[size], variantStyles[variant], disabled ? 'cursor-not-allowed opacity-50' : '', loading ? 'relative' : '', 
        // isFab ? fabPositionStyles[position] : '',
        "font-sans", className), ...rest, children: [loading && (_jsx("span", { className: '', children: _jsxs("svg", { className: "animate-spin -ml-1 mr-3 h-5 w-5 text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [_jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }), _jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12zm2 5.291A7.96 7.96 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938z" })] }) })), icon && iconPosition === 'left' && !loading && (_jsx("span", { className: `${iconClassName}`, children: icon })), children, icon && iconPosition === 'right' && !loading && (_jsx("span", { className: `${iconClassName}`, children: icon }))] }));
};
