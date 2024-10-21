import React, { ReactNode } from 'react';
type TooltipDirection = 'top' | 'right' | 'bottom' | 'left';
interface TooltipProps {
    children: [
        React.ReactElement<TooltipActionProps>,
        React.ReactElement<TooltipContentProps>
    ];
    direction?: TooltipDirection;
    showOnClick?: boolean;
}
interface TooltipActionProps {
    children: ReactNode;
}
interface TooltipContentProps {
    children: ReactNode;
}
declare const Tooltip: React.FC<TooltipProps>;
declare const TooltipAction: React.FC<TooltipActionProps>;
declare const TooltipContent: React.FC<TooltipContentProps>;
export { Tooltip, TooltipAction, TooltipContent };
