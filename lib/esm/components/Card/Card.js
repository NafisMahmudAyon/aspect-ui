import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
export const Card = ({ children, className = '', ...rest }) => {
    return (_jsx("div", { className: cn('bg-bg text-text border-border flex flex-col gap-6 rounded-lg border py-6 shadow-sm', className), ...rest, children: children }));
};
