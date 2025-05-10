'use client'
import { Carousel, CarouselItem, CarouselSlides } from '@/app/src'
import { routes } from '@/routes/routes'
import autoPlay from 'embla-carousel-autoplay'


const ComponentList = () => {
  return (
    <div className='container mx-auto text-primary-800 dark:border-primary-200/30  dark:text-primary-200 overflow-hidden backdrop-blur-sm shadow-xl absolute -bottom-10 left-1/2 -translate-x-1/2 z-50 '>
      <Carousel className="py-6" options={{ loop: true, skipSnaps: true }} plugins={[autoPlay()]}>
        <CarouselSlides className=''>
          {routes.map((item) => (
            <CarouselItem key={item.id} className="flex-[0_0_16%] mr-3 bg-primary-800/50 text-primary-800 dark:bg-primary-800/50 dark:text-primary-200 text-center rounded-full text-h5 ">
              {item.name}
            </CarouselItem>
          ))}
        </CarouselSlides>
      </Carousel>
    </div>
  )
}

export default ComponentList