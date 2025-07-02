import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
export const CardDescription = ({ children, className = '', ...rest }) => {
    return _jsx("p", { className: cn("text-sm text-text-muted", className), ...rest, children: children });
};
