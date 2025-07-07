import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
export const CardFooter = ({ children, className = '', ...rest }) => {
    return (_jsx("div", { className: cn('flex items-center px-6', className), ...rest, children: children }));
};
