import React, { ReactNode } from 'react';
type TooltipDirection = 'top' | 'right' | 'bottom' | 'left';
interface TooltipProps {
    children: [
        React.ReactElement<TooltipActionProps>,
        React.ReactElement<TooltipContentProps>
    ];
    direction?: TooltipDirection;
    showOnClick?: boolean;
    className?: string;
    arrowColor?: string;
    arrowSize?: number;
    contentClassName?: string;
    actionClassName?: string;
    showOnLoad?: boolean;
    reset?: boolean;
    closeOnClickOutside?: boolean;
}
interface TooltipActionProps {
    children: ReactNode;
    className?: string;
    reset?: boolean;
}
interface TooltipContentProps {
    children: ReactNode;
    className?: string;
    reset?: boolean;
}
declare const Tooltip: React.FC<TooltipProps>;
declare const TooltipAction: React.FC<TooltipActionProps>;
declare const TooltipContent: React.FC<TooltipContentProps>;
export { Tooltip, TooltipAction, TooltipContent };
