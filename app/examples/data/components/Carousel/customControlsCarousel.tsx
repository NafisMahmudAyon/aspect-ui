import { Carousel, CarouselControl, CarouselIndicators, CarouselItem, CarouselNextButton, CarouselPrevButton, CarouselSlides } from "@/app/src";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { Suspense, use } from "react";
import { fetchImages } from "./fetchImages";
interface ImageItem {
  id: string;
  url: string;
  alt: string;
}

const CarouselComponent = () => {
  const images: ImageItem[] = use(fetchImages())
  return (
    <Carousel className="max-w-3xl mx-auto">
      <CarouselSlides>
        {images.map((item, i) => (
          <CarouselItem key={i}>
            <img
              src={item.url}
              alt={item.alt}
              className="w-full h-64 object-cover rounded-lg"
            />
          </CarouselItem>
        ))}
      </CarouselSlides>
      <CarouselControl className="bottom-0 right-0 top-auto left-auto justify-center gap-6 w-max">
        <CarouselPrevButton>
          <ArrowBigLeft />
        </CarouselPrevButton>
        <CarouselNextButton>
          <ArrowBigRight />
        </CarouselNextButton>
      </CarouselControl>
      <CarouselIndicators className="mt-4" />
    </Carousel>
  )
}
export default function CustomControlsCarousel() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CarouselComponent />
    </Suspense>
  );
}