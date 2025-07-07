import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// components/Timeline/Timeline.tsx
import React from 'react';
import { cn } from '../../utils/cn';
import { TimelineItem } from './TimelineItem';
export const Timeline = ({ children, position = 'left', lineStyle = 'solid', className, lineClassName, ...rest }) => {
    const isMixed = position === 'mixed';
    return (_jsxs("div", { className: cn('relative', isMixed ? 'mx-auto max-w-3xl' : 'w-full', className), ...rest, children: [_jsx("div", { className: cn('border-border absolute h-full border', position === 'mixed'
                    ? 'left-1/2 -translate-x-1/2'
                    : position === 'left'
                        ? 'right-0'
                        : '', lineStyle === 'dashed' ? 'border-dashed' : '', lineClassName) }), _jsx("div", { className: 'relative', children: React.Children.map(children, (child, index) => {
                    if (React.isValidElement(child) &&
                        child.type === TimelineItem) {
                        return React.cloneElement(child, {
                            position: isMixed
                                ? index % 2 === 0
                                    ? 'left'
                                    : 'right'
                                : position,
                            isMixed: isMixed
                        });
                    }
                    return child;
                }) })] }));
};
