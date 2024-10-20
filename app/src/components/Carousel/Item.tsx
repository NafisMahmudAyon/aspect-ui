'use client'
import {
  HTMLAttributes,
  Ref,
  cloneElement,
  forwardRef,
  isValidElement
} from 'react'
import { carouselTheme } from './theme'

export interface CarouselItemProps extends HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
}

export const CarouselItem = forwardRef<HTMLDivElement, CarouselItemProps>(
  ({ children, asChild, className, ...props }, ref: Ref<HTMLDivElement>) => {
    const theme = carouselTheme

    if (asChild && isValidElement(children)) {
      return cloneElement(children, {
        itemRef: ref,
        ...props
      })
    }

    return (
      <div {...props} className={`${theme.item.slide} ${className}`} ref={ref}>
        {children}
      </div>
    )
  }
)

CarouselItem.displayName = 'CarouselItem'
