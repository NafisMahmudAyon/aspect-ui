'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../utils/cn'

export const CarouselControl = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={cn(
        'absolute top-0 left-0 z-50 mt-[1.8rem] flex w-full items-center justify-between',
        className
      )}
      ref={ref}
    >
      {children}
    </div>
  )
})

CarouselControl.displayName = 'CarouselControl'
