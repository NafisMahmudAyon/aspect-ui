import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from 'react';
const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startPos, setStartPos] = useState(0);
    const [currentTranslate, setCurrentTranslate] = useState(0);
    const [prevTranslate, setPrevTranslate] = useState(0);
    const [animationId, setAnimationId] = useState(null);
    const [startTime, setStartTime] = useState(0);
    const carouselRef = useRef(null);
    // Utility: to get the current time
    const getTime = () => new Date().getTime();
    // Handle Next Slide
    const nextSlide = () => {
        setCurrentIndex(prevIndex => prevIndex === images.length - 1 ? 0 : prevIndex + 1);
    };
    // Handle Previous Slide
    const prevSlide = () => {
        setCurrentIndex(prevIndex => prevIndex === 0 ? images.length - 1 : prevIndex - 1);
    };
    // Go to specific slide
    const goToSlide = (index) => {
        setCurrentIndex(index);
    };
    // Smooth dragging with requestAnimationFrame
    const animation = () => {
        if (isDragging) {
            setPrevTranslate(currentTranslate);
            setAnimationId(requestAnimationFrame(animation));
        }
    };
    // Drag Start
    const startDrag = (clientX) => {
        setIsDragging(true);
        setStartPos(clientX);
        setStartTime(getTime());
        setPrevTranslate(currentTranslate);
        setAnimationId(requestAnimationFrame(animation));
    };
    // Dragging
    const moveDrag = (clientX) => {
        if (!isDragging)
            return;
        const currentPosition = clientX - startPos;
        setCurrentTranslate(prevTranslate + currentPosition);
    };
    // Drag End
    const endDrag = () => {
        setIsDragging(false);
        cancelAnimationFrame(animationId);
        const dragDuration = getTime() - startTime;
        const movedBy = currentTranslate - prevTranslate;
        const velocity = Math.abs(movedBy / dragDuration); // Velocity in px/ms
        // Determine if the drag was fast enough to change slides
        if (velocity > 0.5 || Math.abs(movedBy) > 100) {
            if (movedBy < 0) {
                nextSlide();
            }
            else {
                prevSlide();
            }
        }
        setCurrentTranslate(0); // Reset translate for smooth animation
        setPrevTranslate(0); // Reset prev translate for next drag
    };
    // Mouse and Touch Event Handlers
    const handleMouseDown = (e) => startDrag(e.clientX);
    const handleMouseMove = (e) => moveDrag(e.clientX);
    const handleMouseUp = () => endDrag();
    const handleTouchStart = (e) => startDrag(e.touches[0].clientX);
    const handleTouchMove = (e) => moveDrag(e.touches[0].clientX);
    const handleTouchEnd = () => endDrag();
    useEffect(() => {
        return () => {
            if (animationId)
                cancelAnimationFrame(animationId);
        };
    }, [animationId]);
    return (_jsxs("div", { className: 'relative mx-auto w-full max-w-2xl overflow-hidden', ref: carouselRef, onMouseDown: handleMouseDown, onMouseMove: handleMouseMove, onMouseUp: handleMouseUp, onMouseLeave: handleMouseUp, onTouchStart: handleTouchStart, onTouchMove: handleTouchMove, onTouchEnd: handleTouchEnd, children: [_jsx("button", { className: 'absolute left-0 top-1/2 -translate-y-1/2 transform rounded-sm bg-black bg-opacity-50 px-3 py-1 text-white hover:bg-opacity-75 focus:outline-hidden', onClick: prevSlide, children: "\u276E" }), _jsx("div", { className: 'flex transition-transform duration-500 ease-in-out', style: {
                    transform: `translateX(calc(-${currentIndex * 100}% + ${currentTranslate}px))`
                }, children: images.map((image, index) => (_jsx("div", { className: 'min-w-full', children: _jsx("img", { src: image, alt: `Slide ${index}`, className: 'w-full object-cover' }) }, index))) }), _jsx("button", { className: 'absolute right-0 top-1/2 -translate-y-1/2 transform rounded-sm bg-black bg-opacity-50 px-3 py-1 text-white hover:bg-opacity-75 focus:outline-hidden', onClick: nextSlide, children: "\u276F" }), _jsx("div", { className: 'mt-4 flex justify-center', children: images.map((_, index) => (_jsx("span", { className: `mx-1 h-3 w-3 cursor-pointer rounded-full transition-transform duration-300 ease-in-out ${index === currentIndex
                        ? 'scale-125 bg-gray-800'
                        : 'bg-gray-400 hover:bg-gray-600'}`, onClick: () => goToSlide(index) }, index))) })] }));
};
export default Carousel;
