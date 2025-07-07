import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
export const CardTitle = ({ children, className = '', ...rest }) => {
    return (_jsx("h3", { className: cn('leading-none font-semibold', className), ...rest, children: children }));
};
