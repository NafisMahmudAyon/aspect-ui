import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
export const Card = ({ children, className = "", ...rest }) => {
    return (_jsx("div", { className: cn("bg-bg text-text flex flex-col gap-6 rounded-lg border border-border py-6 shadow-sm", className), ...rest, children: children }));
};
