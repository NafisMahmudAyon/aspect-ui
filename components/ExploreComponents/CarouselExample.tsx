import { Carousel, CarouselIndicators, CarouselItem, CarouselNextButton, CarouselPrevButton, CarouselSlides } from '@/app/src'
import autoPlay from 'embla-carousel-autoplay'

const CarouselExample = () => {
  return (
    <div className='w-full'>
      <Carousel className="w-full pb-0" options={{ loop: true }} plugins={[autoPlay()]}>
        <CarouselSlides className=''>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className='flex-[0_0_100%]'>
              <div className="flex items-center justify-center rounded-md border border-border min-h-[200px] bg-bg">
                <span className="text-4xl font-semibold text-text">{index + 1}</span>
              </div>
            </CarouselItem>
          ))}
        </CarouselSlides>
        <div className='flex items-center justify-between gap-2 mt-4'>
          <CarouselPrevButton className='' />
          <CarouselIndicators className='flex-1 relative left-0 right-0 translate-x-0 justify-center' />
          <CarouselNextButton className='' />
        </div>
      </Carousel>
    </div>
  )
}

export default CarouselExample