


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


export const avatarGroup = {
  'AvatarComponent.tsx': `import { Avatar, AvatarBadge, AvatarGroup, AvatarImage } from '@/components/aspect-ui/Avatar'

const DefaultAvatar = () => {
  return (
    <AvatarGroup>
      <Avatar className='border'>
        <AvatarImage
          src="..."
          altText="..."
        />
        <AvatarBadge status='success' iconEnabled />
      </Avatar>
      <Avatar className='border'>
        <AvatarImage
          src="..."
          altText="..."
        />
        <AvatarBadge status='success' iconEnabled />
      </Avatar>
      <Avatar className='border'>
        <AvatarImage
          src="..."
          altText="..."
        />
        <AvatarBadge status='success' iconEnabled />
      </Avatar>
    </AvatarGroup>
  )
}

export default DefaultAvatar
  `,
  'AvatarComponent.jsx': `import { Avatar, AvatarBadge, AvatarGroup, AvatarImage } from '@/components/aspect-ui/Avatar'

const DefaultAvatar = () => {
  return (
    <AvatarGroup>
      <Avatar className='border'>
        <AvatarImage
          src="..."
          altText="..."
        />
        <AvatarBadge status='success' iconEnabled />
      </Avatar>
      <Avatar className='border'>
        <AvatarImage
          src="..."
          altText="..."
        />
        <AvatarBadge status='success' iconEnabled />
      </Avatar>
      <Avatar className='border'>
        <AvatarImage
          src="..."
          altText="..."
        />
        <AvatarBadge status='success' iconEnabled />
      </Avatar>
    </AvatarGroup>
  )
}

export default DefaultAvatar
  `,
}

export const alertPropsData = [
  {
    prop: 'type',
    type: `'success' | 'warning' | 'error' | 'info'`,
    default: '-',
    description: 'Specifies the type of alert to display, which determines the style and icon.',
  },
  {
    prop: 'children',
    type: 'ReactNode',
    default: '-',
    description: 'The content displayed inside the alert.',
  },
  {
    prop: 'closeable',
    type: 'boolean',
    default: 'true',
    description: 'Determines whether the alert can be dismissed.',
  },
  {
    prop: 'onClose',
    type: '() => void',
    default: '-',
    description: 'Callback function invoked when the alert is closed.',
  },
  {
    prop: 'className',
    type: 'string',
    default: `''`,
    description: 'Additional CSS classes for the alert container.',
  },
];
