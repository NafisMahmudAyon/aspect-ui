'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useRef, useEffect } from 'react';
export const Image = ({ src, alt, caption, width = 'full', height = 'auto', loading = 'lazy', responsive = true, objectFit = 'cover', borderRadius = 'rounded-lg', shadow = true, previewText = 'Preview' }) => {
    const [isLightboxOpen, setLightboxOpen] = useState(false);
    const [zoomLevel, setZoomLevel] = useState(1);
    const [rotate, setRotate] = useState(0);
    const [mirror, setMirror] = useState(false);
    const [flipVertical, setFlipVertical] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [startPos, setStartPos] = useState({ x: 0, y: 0 });
    const imageRef = useRef(null);
    const position = useRef({ x: 0, y: 0 });
    const [fadeIn, setFadeIn] = useState(false);
    useEffect(() => {
        if (isLightboxOpen) {
            setFadeIn(true);
        }
        else {
            setFadeIn(false);
        }
    }, [isLightboxOpen]);
    // Smooth zoom in/out
    const handleZoom = (direction) => {
        if (direction === 'in') {
            setZoomLevel(prev => prev + 0.2);
        }
        else if (direction === 'out' && zoomLevel > 1) {
            setZoomLevel(prev => prev - 0.2);
        }
    };
    const handleRotate = (direction) => {
        if (direction === 'cw') {
            setRotate(prev => prev + 90);
        }
        else {
            setRotate(prev => prev - 90);
        }
    };
    const handleMirror = () => {
        setMirror(!mirror);
    };
    const handleFlipVertical = () => {
        setFlipVertical(!flipVertical);
    };
    // Start dragging
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartPos({
            x: e.clientX - position.current.x,
            y: e.clientY - position.current.y
        });
    };
    // Drag image (pan)
    const handleMouseMove = (e) => {
        if (isDragging && imageRef.current) {
            const deltaX = e.clientX - startPos.x;
            const deltaY = e.clientY - startPos.y;
            position.current = { x: deltaX, y: deltaY };
            requestAnimationFrame(() => {
                imageRef.current.style.transform = `
          translate(${deltaX}px, ${deltaY}px) 
          scale(${zoomLevel}) 
          rotate(${rotate}deg) 
          scaleX(${mirror ? -1 : 1}) 
          scaleY(${flipVertical ? -1 : 1})
        `;
            });
        }
    };
    // Stop dragging
    const handleMouseUpOrLeave = () => {
        setIsDragging(false);
    };
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setLightboxOpen(false);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
    return (_jsxs(_Fragment, { children: [_jsxs("figure", { className: `relative flex flex-col items-center justify-center ${responsive ? 'h-auto w-full' : ''}`, onClick: () => setLightboxOpen(true), children: [_jsx("img", { src: src, alt: alt, loading: loading, className: `transition-opacity duration-300 ${width !== 'full' ? `w-${width}` : 'w-full'} ${height !== 'auto' ? `h-${height}` : 'h-auto'} object-${objectFit} ${borderRadius} ${shadow ? 'shadow-lg' : ''} cursor-pointer hover:opacity-0` }), _jsx("div", { className: 'absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100', style: { backgroundColor: 'rgba(0, 0, 0, 0.5)' }, children: _jsx("span", { className: 'text-lg text-white', children: previewText }) }), caption && (_jsx("figcaption", { className: 'mt-2 text-sm text-gray-600', children: caption }))] }), isLightboxOpen && (_jsx("div", { className: `fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 transition-opacity duration-500 ${fadeIn ? 'opacity-100' : 'opacity-0'}`, children: _jsxs("div", { className: 'relative max-w-5xl p-4', children: [_jsx("img", { ref: imageRef, src: src, alt: alt, className: `cursor-move transition-transform duration-300 ease-in-out`, style: {
                                transform: `
                  scale(${zoomLevel}) 
                  rotate(${rotate}deg) 
                  scaleX(${mirror ? -1 : 1}) 
                  scaleY(${flipVertical ? -1 : 1})
                `
                            }, onMouseDown: handleMouseDown, onMouseMove: handleMouseMove, onMouseUp: handleMouseUpOrLeave, onMouseLeave: handleMouseUpOrLeave }), _jsxs("div", { className: 'absolute right-4 top-4 space-y-2', children: [_jsx("button", { onClick: () => handleZoom('in'), className: 'rounded-full bg-white p-2 shadow-sm hover:bg-gray-200', children: "Zoom In" }), _jsx("button", { onClick: () => handleZoom('out'), className: 'rounded-full bg-white p-2 shadow-sm hover:bg-gray-200', children: "Zoom Out" }), _jsx("button", { onClick: () => handleRotate('cw'), className: 'rounded-full bg-white p-2 shadow-sm hover:bg-gray-200', children: "Rotate Clockwise" }), _jsx("button", { onClick: () => handleRotate('ccw'), className: 'rounded-full bg-white p-2 shadow-sm hover:bg-gray-200', children: "Rotate Anti-Clockwise" }), _jsx("button", { onClick: handleMirror, className: 'rounded-full bg-white p-2 shadow-sm hover:bg-gray-200', children: "Mirror" }), _jsx("button", { onClick: handleFlipVertical, className: 'rounded-full bg-white p-2 shadow-sm hover:bg-gray-200', children: "Flip Upside Down" }), _jsx("button", { onClick: () => setLightboxOpen(false), className: 'rounded-full bg-red-600 p-2 text-white shadow-sm hover:bg-red-800', children: "Close" })] })] }) }))] }));
};
