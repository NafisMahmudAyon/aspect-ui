'use client'
import React, { useEffect, useState } from 'react'
import { cn } from '../../utils/cn'

interface BackToTopProps {
  threshold?: number
  smooth?: boolean
  children?: React.ReactNode
  className?: string
}

export const BackToTop: React.FC<BackToTopProps> = ({
  threshold = 300,
  smooth = true,
  className = '',
  children,
  ...rest
}) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > threshold) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [threshold])

  const scrollToTop = () => {
    if (smooth) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    } else {
      window.scrollTo(0, 0)
    }
  }

  if (!isVisible) {
    return null
  }

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        'bg-bg text-text border-border fixed right-5 bottom-5 rounded-full border p-3 font-bold shadow-lg transition-all duration-300 ease-in-out focus:outline-hidden',
        className
      )}
      {...rest}
    >
      {children || (
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='m5.996 14.996 6-6L18 15'
            stroke='currentColor'
            strokeWidth='1.6'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      )}
    </button>
  )
}
