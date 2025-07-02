import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
import { AvatarImage } from './AvatarImage';
export const Avatar = ({ className = '', children, onClick, ...rest }) => {
    return (_jsxs("div", { className: cn('relative flex size-12 items-center justify-center rounded-full bg-bg text-text overflow-hidden', className), onClick: onClick, ...rest, children: [children && children, !children && _jsx(AvatarImage, {})] }));
};
