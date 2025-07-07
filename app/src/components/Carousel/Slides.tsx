'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../utils/cn'

export const CarouselSlides = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
  return (
    <div {...props} className={cn('-ml-4 flex', className)} ref={ref}>
      {children}
    </div>
  )
})

CarouselSlides.displayName = 'CarouselSlides'
