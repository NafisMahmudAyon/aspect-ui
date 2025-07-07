import {
  Carousel,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
  CarouselNextButton,
  CarouselPrevButton,
  CarouselSlides
} from '@/app/src'
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react'
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
      <CarouselControl className='top-auto right-0 bottom-0 left-auto w-max justify-center gap-6'>
        <CarouselPrevButton>
          <ArrowBigLeft />
        </CarouselPrevButton>
        <CarouselNextButton>
          <ArrowBigRight />
        </CarouselNextButton>
      </CarouselControl>
      <CarouselIndicators className='mt-4' />
    </Carousel>
  )
}
export default function CustomControlsCarousel() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CarouselComponent />
    </Suspense>
  )
}
