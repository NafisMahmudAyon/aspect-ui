'use client'
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselSlides } from "@/app/src";
import { useEffect, useState } from "react";
interface ImageItem {
  id: string;
  url: string;
  alt: string;
}
export default function DefaultCarousel() {
  // const items = [
  //   {
  //     id: 1,
  //     image: "/images/carousel/slide1.jpg",
  //     alt: "Slide 1"
  //   },
  //   {
  //     id: 2,
  //     image: "/images/carousel/slide2.jpg",
  //     alt: "Slide 2"
  //   },
  //   {
  //     id: 3,
  //     image: "/images/carousel/slide3.jpg",
  //     alt: "Slide 3"
  //   }
  // ];

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
    <Carousel className="w-full max-w-3xl">
      <CarouselSlides>
        {images.map((item) => (
          <CarouselItem key={item.id}>
            <img
              src={item.url}
              alt={item.alt}
              className="w-full h-64 object-cover rounded-lg"
            />
          </CarouselItem>
        ))}
      </CarouselSlides>
      <CarouselControl />
      <CarouselIndicators className="mt-4" />
    </Carousel>
  );
}