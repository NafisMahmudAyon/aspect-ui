'use client'

import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import * as React from 'react'

import { cn } from '../../utils/cn'

interface TooltipActionProps
  extends React.ComponentProps<typeof TooltipPrimitive.Trigger> {
  outline?: boolean
}

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return <TooltipPrimitive.Provider delayDuration={delayDuration} {...props} />
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root {...props} />
    </TooltipProvider>
  )
}

function TooltipAction({
  className,
  outline = false,
  ...props
}: TooltipActionProps) {
  return (
    <TooltipPrimitive.Trigger
      className={cn(
        'focus-visible:border-ring focus-visible:ring-border hover:bg-bg-light/60 inline-flex cursor-pointer items-center justify-center gap-2 rounded-md px-4 py-2 font-medium transition duration-200 ease-in-out focus:outline-hidden focus-visible:ring-1',
        outline && 'border-border text-text bg-bg-light/30 border',
        className
      )}
      {...props}
    />
  )
}

function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        sideOffset={sideOffset}
        className={cn(
          'bg-primary text-primary-foreground z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance',
          className
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className='bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]' />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipAction, TooltipContent, TooltipProvider }
