'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../utils/cn'

export const CarouselButtons = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ children, className, ...rest }, ref: Ref<HTMLDivElement>) => {
  return (
    <div
    className={cn("flex items-center gap-2", className)}
    ref={ref}
    {...rest}
    >
      {children}
    </div>
  )
})

CarouselButtons.displayName = 'CarouselButtons'
