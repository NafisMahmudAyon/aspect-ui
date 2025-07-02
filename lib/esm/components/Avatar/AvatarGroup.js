'use client';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
import { Avatar } from './Avatar';
export const AvatarGroup = ({ className = '', children, ...rest }) => {
    return (_jsx("div", { className: cn('flex items-center -space-x-2', className), ...rest, children: !children ? (_jsxs(_Fragment, { children: [_jsx(Avatar, {}), _jsx(Avatar, {})] })) : (_jsx(_Fragment, { children: children })) }));
};
