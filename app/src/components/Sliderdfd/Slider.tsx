import React, { useState, useRef, useEffect } from 'react'

interface CarouselProps {
  images: string[]
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const [startPos, setStartPos] = useState<number>(0)
  const [currentTranslate, setCurrentTranslate] = useState<number>(0)
  const [prevTranslate, setPrevTranslate] = useState<number>(0)
  const [animationId, setAnimationId] = useState<number | null>(null)
  const [startTime, setStartTime] = useState<number>(0)

  const carouselRef = useRef<HTMLDivElement | null>(null)

  // Utility: to get the current time
  const getTime = () => new Date().getTime()

  // Handle Next Slide
  const nextSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  // Handle Previous Slide
  const prevSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  // Go to specific slide
  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Smooth dragging with requestAnimationFrame
  const animation = () => {
    if (isDragging) {
      setPrevTranslate(currentTranslate)
      setAnimationId(requestAnimationFrame(animation))
    }
  }

  // Drag Start
  const startDrag = (clientX: number) => {
    setIsDragging(true)
    setStartPos(clientX)
    setStartTime(getTime())
    setPrevTranslate(currentTranslate)
    setAnimationId(requestAnimationFrame(animation))
  }

  // Dragging
  const moveDrag = (clientX: number) => {
    if (!isDragging) return
    const currentPosition = clientX - startPos
    setCurrentTranslate(prevTranslate + currentPosition)
  }

  // Drag End
  const endDrag = () => {
    setIsDragging(false)
    cancelAnimationFrame(animationId as number)

    const dragDuration = getTime() - startTime
    const movedBy = currentTranslate - prevTranslate

    const velocity = Math.abs(movedBy / dragDuration) // Velocity in px/ms

    // Determine if the drag was fast enough to change slides
    if (velocity > 0.5 || Math.abs(movedBy) > 100) {
      if (movedBy < 0) {
        nextSlide()
      } else {
        prevSlide()
      }
    }

    setCurrentTranslate(0) // Reset translate for smooth animation
    setPrevTranslate(0) // Reset prev translate for next drag
  }

  // Mouse and Touch Event Handlers
  const handleMouseDown = (e: React.MouseEvent) => startDrag(e.clientX)
  const handleMouseMove = (e: React.MouseEvent) => moveDrag(e.clientX)
  const handleMouseUp = () => endDrag()
  const handleTouchStart = (e: React.TouchEvent) =>
    startDrag(e.touches[0].clientX)
  const handleTouchMove = (e: React.TouchEvent) =>
    moveDrag(e.touches[0].clientX)
  const handleTouchEnd = () => endDrag()

  useEffect(() => {
    return () => {
      if (animationId) cancelAnimationFrame(animationId)
    }
  }, [animationId])

  return (
    <div
      className='relative mx-auto w-full max-w-2xl overflow-hidden'
      ref={carouselRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Left button */}
      <button
        className='absolute left-0 top-1/2 -translate-y-1/2 transform rounded-sm bg-black bg-opacity-50 px-3 py-1 text-white hover:bg-opacity-75 focus:outline-hidden'
        onClick={prevSlide}
      >
        &#10094;
      </button>

      <div
        className='flex transition-transform duration-500 ease-in-out'
        style={{
          transform: `translateX(calc(-${currentIndex * 100}% + ${currentTranslate}px))`
        }}
      >
        {images.map((image, index) => (
          <div key={index} className='min-w-full'>
            <img
              src={image}
              alt={`Slide ${index}`}
              className='w-full object-cover'
            />
          </div>
        ))}
      </div>

      {/* Right button */}
      <button
        className='absolute right-0 top-1/2 -translate-y-1/2 transform rounded-sm bg-black bg-opacity-50 px-3 py-1 text-white hover:bg-opacity-75 focus:outline-hidden'
        onClick={nextSlide}
      >
        &#10095;
      </button>

      {/* Dots */}
      <div className='mt-4 flex justify-center'>
        {images.map((_, index) => (
          <span
            key={index}
            className={`mx-1 h-3 w-3 cursor-pointer rounded-full transition-transform duration-300 ease-in-out ${
              index === currentIndex
                ? 'scale-125 bg-gray-800'
                : 'bg-gray-400 hover:bg-gray-600'
            }`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  )
}

export default Carousel
