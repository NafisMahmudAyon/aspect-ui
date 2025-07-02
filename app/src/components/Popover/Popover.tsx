"use client"

import * as PopoverPrimitive from "@radix-ui/react-popover";
import * as React from "react";

import { cn } from '../../utils/cn';

interface PopoverActionProps extends React.ComponentProps<typeof PopoverPrimitive.Trigger> {
  outline?: boolean;
}

function Popover({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Root>) {
  return <PopoverPrimitive.Root {...props} />
}

function PopoverAction({
  className,
  outline = false,
  ...props
}: PopoverActionProps) {
  return <PopoverPrimitive.Trigger className={cn("inline-flex gap-2 items-center justify-center font-medium rounded-md focus:outline-hidden focus-visible:border-ring focus-visible:ring-border transition ease-in-out duration-200 focus-visible:ring-1 cursor-pointer px-4 py-2 hover:bg-bg-light/60", outline && "border border-border text-text bg-bg-light/30", className)} {...props} />
}

function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "bg-bg z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border border-border p-4 shadow-md outline-hidden",
          className
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  )
}

function PopoverAnchor({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Anchor>) {
  return <PopoverPrimitive.Anchor {...props} />
}

export { Popover, PopoverAction, PopoverAnchor, PopoverContent };

