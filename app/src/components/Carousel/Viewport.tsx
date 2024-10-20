'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { useCarouselContext } from './CarouselContext'
import { carouselTheme } from './theme'

export const CarouselViewport = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ children }, ref: Ref<HTMLDivElement>) => {
  const theme = carouselTheme
  const { emblaRef } = useCarouselContext()

  return (
    <div className={`${theme.viewport}`} ref={ref || emblaRef}>
      {children}
    </div>
  )
})

CarouselViewport.displayName = 'CarouselViewport'
