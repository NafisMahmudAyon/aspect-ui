"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from '../../utils/cn';
function TooltipProvider({ delayDuration = 0, ...props }) {
    return (_jsx(TooltipPrimitive.Provider, { delayDuration: delayDuration, ...props }));
}
function Tooltip({ ...props }) {
    return (_jsx(TooltipProvider, { children: _jsx(TooltipPrimitive.Root, { ...props }) }));
}
function TooltipAction({ className, outline = false, ...props }) {
    return _jsx(TooltipPrimitive.Trigger, { className: cn("inline-flex gap-2 items-center justify-center font-medium rounded-md focus:outline-hidden focus-visible:border-ring focus-visible:ring-border transition ease-in-out duration-200 focus-visible:ring-1 cursor-pointer px-4 py-2 hover:bg-bg-light/60", outline && "border border-border text-text bg-bg-light/30", className), ...props });
}
function TooltipContent({ className, sideOffset = 0, children, ...props }) {
    return (_jsx(TooltipPrimitive.Portal, { children: _jsxs(TooltipPrimitive.Content, { sideOffset: sideOffset, className: cn("bg-primary text-primary-foreground z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance", className), ...props, children: [children, _jsx(TooltipPrimitive.Arrow, { className: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })] }) }));
}
export { Tooltip, TooltipAction, TooltipContent, TooltipProvider };
