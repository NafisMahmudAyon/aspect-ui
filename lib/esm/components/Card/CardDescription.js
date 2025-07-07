import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
export const CardDescription = ({ children, className = '', ...rest }) => {
    return (_jsx("p", { className: cn('text-text-muted text-sm', className), ...rest, children: children }));
};
