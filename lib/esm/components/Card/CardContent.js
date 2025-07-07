import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
export const CardContent = ({ children, className = '', ...rest }) => {
    return (_jsx("div", { className: cn('px-6', className), ...rest, children: children }));
};
