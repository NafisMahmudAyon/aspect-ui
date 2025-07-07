export const defaultCarousel = {
  'CarouselComponent.tsx': `import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselSlides } from "@/components/aspect-ui/carousel";

export default function DefaultCarousel() {
  const items = [
    {
      id: 1,
      image: "/images/carousel/slide1.jpg",
      alt: "Slide 1"
    },
    {
      id: 2,
      image: "/images/carousel/slide2.jpg",
      alt: "Slide 2"
    },
    {
      id: 3,
      image: "/images/carousel/slide3.jpg",
      alt: "Slide 3"
    }
  ];

  return (
    <Carousel className="w-full max-w-3xl">
      <CarouselSlides>
        {items.map((item) => (
          <CarouselItem key={item.id}>
            <img 
              src={item.image} 
              alt={item.alt} 
              className="w-full h-64 object-cover rounded-lg"
            />
          </CarouselItem>
        ))}
      <CarouselSlides>
      <CarouselControls />
      <CarouselIndicators className="mt-4" />
    </Carousel>
  );
}`,
  'CarouselComponent.jsx': `import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselSlides } from "@/components/aspect-ui/carousel";

export default function DefaultCarousel() {
  const items = [
    {
      id: 1,
      image: "/images/carousel/slide1.jpg",
      alt: "Slide 1"
    },
    {
      id: 2,
      image: "/images/carousel/slide2.jpg",
      alt: "Slide 2"
    },
    {
      id: 3,
      image: "/images/carousel/slide3.jpg",
      alt: "Slide 3"
    }
  ];

  return (
    <Carousel className="w-full max-w-3xl">
      <CarouselSlides>
        {items.map((item) => (
          <CarouselItem key={item.id}>
            <img 
              src={item.image} 
              alt={item.alt} 
              className="w-full h-64 object-cover rounded-lg"
            />
          </CarouselItem>
        ))}
      <CarouselSlides>
      <CarouselControls />
      <CarouselIndicators className="mt-4" />
    </Carousel>
  );
}`
}

export const customControlsCarousel = {
  'CarouselComponent.tsx': `import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselSlides } from "@/components/aspect-ui/carousel";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

export default function DefaultCarousel() {
  const items = [
    {
      id: 1,
      image: "/images/carousel/slide1.jpg",
      alt: "Slide 1"
    },
    {
      id: 2,
      image: "/images/carousel/slide2.jpg",
      alt: "Slide 2"
    },
    {
      id: 3,
      image: "/images/carousel/slide3.jpg",
      alt: "Slide 3"
    }
  ];

  return (
    <Carousel className="w-full max-w-3xl">
      <CarouselSlides>
        {items.map((item) => (
          <CarouselItem key={item.id}>
            <img 
              src={item.image} 
              alt={item.alt} 
              className="w-full h-64 object-cover rounded-lg"
            />
          </CarouselItem>
        ))}
      <CarouselSlides>
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
  );
}`,
  'CarouselComponent.jsx': `import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselSlides } from "@/components/aspect-ui/carousel";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

export default function DefaultCarousel() {
  const items = [
    {
      id: 1,
      image: "/images/carousel/slide1.jpg",
      alt: "Slide 1"
    },
    {
      id: 2,
      image: "/images/carousel/slide2.jpg",
      alt: "Slide 2"
    },
    {
      id: 3,
      image: "/images/carousel/slide3.jpg",
      alt: "Slide 3"
    }
  ];

  return (
    <Carousel className="w-full max-w-3xl">
      <CarouselSlides>
        {items.map((item) => (
          <CarouselItem key={item.id}>
            <img 
              src={item.image} 
              alt={item.alt} 
              className="w-full h-64 object-cover rounded-lg"
            />
          </CarouselItem>
        ))}
      <CarouselSlides>
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
  );
}`
}

export const autoplayCarousel = {
  'CarouselComponent.tsx': `import { Carousel, CarouselIndicators, CarouselItem, CarouselSlides } from "@/components/aspect-ui/carousel";
import autoPlay from 'embla-carousel-autoplay';

export default function DefaultCarousel() {
  const items = [
    {
      id: 1,
      image: "/images/carousel/slide1.jpg",
      alt: "Slide 1"
    },
    {
      id: 2,
      image: "/images/carousel/slide2.jpg",
      alt: "Slide 2"
    },
    {
      id: 3,
      image: "/images/carousel/slide3.jpg",
      alt: "Slide 3"
    }
  ];

  return (
    <Carousel
      className="w-full max-w-3xl"
      plugins={[autoPlay()]}
      options={{ loop: true, }}
    >
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
      <CarouselIndicators className="mt-4" />
    </Carousel>
  );
}`,
  'CarouselComponent.jsx': `import { Carousel, CarouselIndicators, CarouselItem, CarouselSlides } from "@/components/aspect-ui/carousel";
import autoPlay from 'embla-carousel-autoplay';

export default function DefaultCarousel() {
  const items = [
    {
      id: 1,
      image: "/images/carousel/slide1.jpg",
      alt: "Slide 1"
    },
    {
      id: 2,
      image: "/images/carousel/slide2.jpg",
      alt: "Slide 2"
    },
    {
      id: 3,
      image: "/images/carousel/slide3.jpg",
      alt: "Slide 3"
    }
  ];

  return (
    <Carousel
      className="w-full max-w-3xl"
      plugins={[autoPlay()]}
      options={{ loop: true, }}
    >
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
      <CarouselIndicators className="mt-4" />
    </Carousel>
  );
}`
}

export const carouselPropsData = [
  {
    prop: 'className',
    type: 'string',
    default: '',
    description: 'Additional CSS classes to apply to the carousel'
  },
  {
    prop: 'children',
    type: 'React.ReactNode',
    default: '',
    description: 'The content of the carousel (CarouselItems, Controls, etc.)'
  },
  {
    prop: 'options',
    type: 'EmblaOptionsType',
    default: '{}',
    description: 'Embla carousel options.'
  },
  {
    prop: 'plugins',
    type: 'EmblaPluginType[]',
    default: '[]',
    description: 'Embla carousel plugins for adding more variants.'
  },
  {
    prop: 'carouselViewportClasses',
    type: 'string',
    default: '',
    description: 'Customize the viewport of the carousel container'
  }
]

export const carouselSlidesPropsData = [
  {
    prop: 'className',
    type: 'string',
    default: '',
    description: 'Additional CSS classes to apply to the carousel slides'
  },
  {
    prop: 'children',
    type: 'React.ReactNode',
    default: '',
    description: 'The content of the carousel slides'
  }
]

export const carouselItemPropsData = [
  {
    prop: 'className',
    type: 'string',
    default: '',
    description: 'Additional CSS classes to apply to the carousel item'
  },
  {
    prop: 'children',
    type: 'React.ReactNode',
    default: '',
    description: 'The content of the carousel item'
  }
]
