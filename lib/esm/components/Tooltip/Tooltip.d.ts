import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import * as React from "react";
interface TooltipActionProps extends React.ComponentProps<typeof TooltipPrimitive.Trigger> {
    outline?: boolean;
}
declare function TooltipProvider({ delayDuration, ...props }: React.ComponentProps<typeof TooltipPrimitive.Provider>): import("react/jsx-runtime").JSX.Element;
declare function Tooltip({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Root>): import("react/jsx-runtime").JSX.Element;
declare function TooltipAction({ className, outline, ...props }: TooltipActionProps): import("react/jsx-runtime").JSX.Element;
declare function TooltipContent({ className, sideOffset, children, ...props }: React.ComponentProps<typeof TooltipPrimitive.Content>): import("react/jsx-runtime").JSX.Element;
export { Tooltip, TooltipAction, TooltipContent, TooltipProvider };
