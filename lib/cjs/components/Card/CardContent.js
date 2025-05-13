import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../../utils/cn";
export const CardContent = ({ children, className = '', ...rest }) => {
    return _jsx("div", { className: cn('py-4', className), ...rest, children: children });
};
