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

/**
 * CarouselItem component
 * 
 * @param {HTMLAttributes<HTMLDivElement>} props - The props for the CarouselItem component
 * @param {Ref<HTMLDivElement>} ref - The ref for the CarouselItem component
 * @returns {ReactElement} The CarouselItem component
 * 
 * @example
 * import { CarouselItem } from "@/components/aspect-ui/Carousel";
 *
 * <CarouselItem>
 *  {children}
 * </CarouselItem>
 */
export const CarouselItem = forwardRef<HTMLDivElement, CarouselItemProps>(
  ({ children, asChild, className, ...props }, ref: Ref<HTMLDivElement>) => {

    if (asChild && isValidElement(children)) {
      return cloneElement(children, {
        itemRef: ref,
        ...props
      })
    }

    return (
      <div {...props} className={cn("flex-[0_0_100%] h-auto min-w-0 overflow-hidden pl-4", className)} ref={ref}>
        {children}
      </div>
    )
  }
)

CarouselItem.displayName = 'CarouselItem'
/**
 * Component CarouselItem
 * version: 1.0.0
 * author: Nafis Mahmud Ayon
 * license: MIT
 * repository: https://github.com/NafisMahmudAyon/aspect-ui
 */