'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { useCarouselContext } from './CarouselContext'

export const CarouselViewport = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ children }, ref: Ref<HTMLDivElement>) => {
  const { emblaRef } = useCarouselContext()

  return (
    <div className={`overflow-hidden`} ref={ref || emblaRef}>
      {children}
    </div>
  )
})

CarouselViewport.displayName = 'CarouselViewport'
