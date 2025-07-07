'use client'
import {
  HTMLAttributes,
  Ref,
  cloneElement,
  forwardRef,
  isValidElement
} from 'react'
import { cn } from '../../utils/cn'

export interface CarouselItemProps extends HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
}

export const CarouselItem = forwardRef<HTMLDivElement, CarouselItemProps>(
  ({ children, asChild, className, ...props }, ref: Ref<HTMLDivElement>) => {
    if (asChild && isValidElement(children)) {
      return cloneElement(children, {
        itemRef: ref,
        ...props
      })
    }

    return (
      <div
        {...props}
        className={cn(
          'h-auto min-w-0 flex-[0_0_100%] overflow-hidden pl-4',
          className
        )}
        ref={ref}
      >
        {children}
      </div>
    )
  }
)

CarouselItem.displayName = 'CarouselItem'
