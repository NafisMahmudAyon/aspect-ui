'use client'
import React, { useState, useEffect } from 'react'

interface ImageProps {
  src: string
  alt: string
  caption?: string
  width?: number | 'full' | 'auto'
  height?: number | 'auto' | 'full'
  loading?: 'lazy' | 'eager'
  responsive?: boolean
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'
  previewText?: string
  wrapperClassName?: string
  previewTextClassName?: string
  className?: string
  captionClassName?: string
  lightbox?: boolean
  lightboxProps?: {
    src: string
    alt: string
    caption?: boolean | React.ReactNode
  }
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  caption,
  width = 'full',
  height = 'auto',
  loading = 'lazy',
  responsive = true,
  objectFit = 'cover',
  previewText = 'Preview',
  wrapperClassName = '',
  className = '',
  previewTextClassName = '',
  captionClassName = '',
  lightbox = false,
  lightboxProps
}) => {
  const [isLightboxOpen, setLightboxOpen] = useState(false)

  const [fadeIn, setFadeIn] = useState(false)

  useEffect(() => {
    if (isLightboxOpen) {
      setFadeIn(true)
    } else {
      setFadeIn(false)
    }
  }, [isLightboxOpen])

  return (
    <>
      {/* Normal Image Display with hover fade effect */}
      <figure
        className={`relative flex flex-col items-center justify-center ${responsive ? 'h-auto w-full' : ''} ${wrapperClassName}`}
        onClick={() => (lightbox ? setLightboxOpen(true) : null)} // Open lightbox on click
      >
        <img
          src={src}
          alt={alt}
          loading={loading}
          className={`${className} transition-opacity duration-300 ${objectFit === 'cover' ? 'object-cover' : objectFit === 'contain' ? 'object-contain' : objectFit === 'fill' ? 'object-fill' : objectFit === 'none' ? 'object-none' : 'object-scale-down'} ${lightbox ? 'cursor-pointer hover:opacity-0' : ''} `}
          style={{
            width:
              width === 'full'
                ? '100%'
                : width === 'auto'
                  ? 'auto'
                  : `${width}px`,
            height:
              height === 'full'
                ? '100%'
                : height === 'auto'
                  ? 'auto'
                  : `${height}px`
          }}
        />
        {/* Preview text on hover */}
        {lightbox ? (
          <div
            className='absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100'
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          >
            <span
              className={`text-caption text-accentColor dark:text-accentColor-dark ${previewTextClassName}`}
            >
              {previewText}
            </span>
          </div>
        ) : null}
        {caption && (
          <figcaption
            className={`mt-2 text-caption text-secondaryColor dark:text-secondaryColor-dark ${captionClassName}`}
          >
            {caption}
          </figcaption>
        )}
      </figure>

      {/* Lightbox Modal with fade-in/out effect */}
      {isLightboxOpen && (
        <div
          className={`fixed inset-0 z-50 my-6 flex items-center justify-center overflow-auto bg-black bg-opacity-80 transition-opacity duration-500 ${
            fadeIn ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <figure className='relative max-w-5xl p-4'>
            {/* Lightbox Image with Transformations and Pan */}
            <img
              src={lightboxProps?.src || src}
              alt={lightboxProps?.alt || alt}
              className={`transition-transform duration-300 ease-in-out`}
            />
            {lightboxProps?.caption && (
              <figcaption
                className={`mt-2 text-sm text-gray-600 ${captionClassName}`}
              >
                {typeof lightboxProps.caption == 'string'
                  ? lightboxProps.caption
                  : caption}
              </figcaption>
            )}

            {/* Controls */}
            <div className='fixed right-6 top-6 space-y-2'>
              <button
                onClick={() => setLightboxOpen(false)}
                className='flex size-10 items-center justify-center rounded-full text-lg leading-none text-white shadow-sm'
              >
                <svg
                  fill='currentColor'
                  width='800px'
                  height='800px'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='m20.48 3.512c-2.172-2.171-5.172-3.514-8.486-3.514-6.628 0-12.001 5.373-12.001 12.001 0 3.314 1.344 6.315 3.516 8.487 2.172 2.171 5.172 3.514 8.486 3.514 6.628 0 12.001-5.373 12.001-12.001 0-3.314-1.344-6.315-3.516-8.487zm-1.542 15.427c-1.777 1.777-4.232 2.876-6.943 2.876-5.423 0-9.819-4.396-9.819-9.819 0-2.711 1.099-5.166 2.876-6.943 1.777-1.777 4.231-2.876 6.942-2.876 5.422 0 9.818 4.396 9.818 9.818 0 2.711-1.099 5.166-2.876 6.942z' />
                  <path d='m13.537 12 3.855-3.855c.178-.194.287-.453.287-.737 0-.603-.489-1.091-1.091-1.091-.285 0-.544.109-.738.287l.001-.001-3.855 3.855-3.855-3.855c-.193-.178-.453-.287-.737-.287-.603 0-1.091.489-1.091 1.091 0 .285.109.544.287.738l-.001-.001 3.855 3.855-3.855 3.855c-.218.2-.354.486-.354.804 0 .603.489 1.091 1.091 1.091.318 0 .604-.136.804-.353l.001-.001 3.855-3.855 3.855 3.855c.2.218.486.354.804.354.603 0 1.091-.489 1.091-1.091 0-.318-.136-.604-.353-.804l-.001-.001z' />
                </svg>
              </button>
            </div>
          </figure>
        </div>
      )}
    </>
  )
}
