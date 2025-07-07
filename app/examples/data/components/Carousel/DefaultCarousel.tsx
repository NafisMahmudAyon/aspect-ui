import {
  Carousel,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
  CarouselSlides
} from '@/app/src'
import { Suspense, use } from 'react'
import { fetchImages } from './fetchImages'
interface ImageItem {
  id: string
  url: string
  alt: string
}

const CarouselComponent = () => {
  const images: ImageItem[] = use(fetchImages())
  return (
    <Carousel className='mx-auto max-w-3xl'>
      <CarouselSlides>
        {images.map((item, i) => (
          <CarouselItem key={i}>
            <img
              src={item.url}
              alt={item.alt}
              className='h-64 w-full rounded-lg object-cover'
            />
          </CarouselItem>
        ))}
      </CarouselSlides>
      <CarouselControl />
      <CarouselIndicators className='mt-4' />
    </Carousel>
  )
}

export default function DefaultCarousel() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CarouselComponent />
    </Suspense>
  )
}
