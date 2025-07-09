import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
import { AvatarImage } from './AvatarImage';
export const Avatar = ({ className = '', children, onClick, ...rest }) => {
    return (_jsxs("div", { className: cn('bg-bg text-text relative flex size-12 items-center justify-center rounded-full', className), onClick: onClick, ...rest, children: [children && children, !children && _jsx(AvatarImage, {})] }));
};
