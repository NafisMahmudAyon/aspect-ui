import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
export const Divider = ({ orientation = 'horizontal', size = 'md', variant = 'full', borderStyle = 'solid', className = '', children, ...rest }) => {
    const horizontalSizeStyles = {
        sm: 'border-t-[1px]',
        md: 'border-t-[2px]',
        lg: 'border-t-[3px]',
        xl: 'border-t-[4px]',
        '2xl': 'border-t-[6px]'
    };
    const verticalSizeStyles = {
        sm: 'border-l-[1px]',
        md: 'border-l-[2px]',
        lg: 'border-l-[3px]',
        xl: 'border-l-[4px]',
        '2xl': 'border-l-[6px]'
    };
    const baseStyles = `border-border ${orientation === 'horizontal' ? horizontalSizeStyles[size] : verticalSizeStyles[size]}`;
    const orientationStyles = orientation === 'horizontal' ? 'w-full' : 'h-full';
    const variantStyles = {
        start: 'justify-start',
        center: 'justify-center',
        end: 'justify-end',
        full: ''
    };
    const borderStyleClass = `border-${borderStyle}`;
    if (!children || variant === 'full') {
        return (_jsx("div", { className: cn(baseStyles, orientationStyles, borderStyleClass, className) }));
    }
    return (_jsxs("div", { className: `flex items-center ${variantStyles[variant]}`, ...rest, children: [variant !== 'start' && (_jsx("span", { className: cn('mr-4 flex-1', baseStyles, borderStyleClass, orientationStyles, className) })), _jsx("span", { className: '', children: children }), variant !== 'end' && (_jsx("span", { className: cn('ml-4 flex-1', baseStyles, borderStyleClass, orientationStyles, className) }))] }));
};
