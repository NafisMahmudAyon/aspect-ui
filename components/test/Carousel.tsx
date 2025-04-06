'use client'

import {
  Carousel,
  CarouselButtons,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
  CarouselNextButton,
  CarouselPrevButton,
  CarouselSlides
} from '@/app/src/components/Carousel'
import autoPlay from 'embla-carousel-autoplay'
// import { CarouselContext } from ''
// import { Slider } from '@/app/src/components/Slider deprecated/Slider'

// import { SliderItem } from '@/app/src/components/Slider deprecated/SliderItem'
import React from 'react'

const CarouselDemo = () => {
  const items = [
    {
      id: 1,
      title: 'A',
      content: 'A',
      image: 'https://picsum.photos/600/400'
    },
    {
      id: 2,
      title: 'B',
      content: 'B',
      image: 'https://picsum.photos/600/400'
    },
    {
      id: 3,
      title: 'C',
      content: 'C',
      image: 'https://picsum.photos/600/400'
    },
    {
      id: 4,
      title: 'D',
      content: 'D',
      image: 'https://picsum.photos/600/400'
    },
    {
      id: 5,
      title: 'E',
      content: 'E',
      image: 'https://picsum.photos/600/400'
    }
  ]
  const images = [
    'https://via.placeholder.com/600x300?text=Slide+1',
    'https://via.placeholder.com/600x300?text=Slide+2',
    'https://via.placeholder.com/600x300?text=Slide+3'
  ]
  return (
    <div>
      <Carousel options={{ loop: true }} plugins={[autoPlay()]}>
        <CarouselSlides>
          {[1, 2, 3, 4, 5].map((slide) => (
            <CarouselItem key={slide}>
              <div className="flex items-center justify-center rounded-xl border border-primary-100 bg-primary-100 h-96 dark:border-primary-900 dark:bg-primary-900">
                <h1 className="text-heading-1 font-medium text-primary-800 dark:text-primary-200">{slide}</h1>
              </div>
            </CarouselItem>
          ))}
        </CarouselSlides>
        <CarouselControl className='z-50'>
          {/* <CarouselButtons> */}
            <div>
              <CarouselPrevButton />
              <CarouselNextButton />
            </div>
          {/* </CarouselButtons> */}
          {/* <CarouselIndicators className='' /> */}
        </CarouselControl>
        {/* <CarouselControl className='bottom-3 left-1/2 -translate-x-1/2 top-'> */}
          <CarouselIndicators className='' />
        {/* </CarouselControl> */}
      </Carousel>
    </div>
  )
}

export default CarouselDemo
