'use client'
import { Carousel, CarouselIndicators, CarouselItem, CarouselSlides } from "@/app/src";
import autoPlay from 'embla-carousel-autoplay';
import { useEffect, useState } from "react";
interface ImageItem {
  id: string;
  url: string;
  alt: string;
}

export default function AutoplayCarousel() {
  //   const items = [
  //     {
  //       id: 1,
  //       image: "/images/carousel/slide1.jpg",
  //       alt: "Slide 1"
  //     },
  //     {
  //       id: 2,
  //       image: "/images/carousel/slide2.jpg",
  //       alt: "Slide 2"
  //     },
  //     {
  //       id: 3,
  //       image: "/images/carousel/slide3.jpg",
  //       alt: "Slide 3"
  //     }
  //   ];

  const [images, setImages] = useState<ImageItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch('https://api.nafisbd.com/api/images?category=nature&size=landscape&limit=6');
        const data = await res.json();
        setImages(data.images);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Carousel
      className="max-w-3xl mx-auto"
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
}