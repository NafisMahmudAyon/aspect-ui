'use client'

import React, { useState, useEffect, useRef } from 'react'
import { cn } from '../../utils/cn'

interface CircularProgressBarProps
  extends React.HTMLAttributes<HTMLDivElement> {
  value: number
  className?: string
  onVisible?: boolean
  /**
   * Duration of the progress bar in seconds
   * 
   * Default value is 2 seconds
   */
  duration?: number;
  strokeColor?: string
  strokeFillColor?: string
  strokeWidth?: number
  contentClassName?: string
  hideValue?: boolean
  onClick?: () => void
}

export const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  value = 75,
  className = '',
  onVisible,
  duration = 2,
  strokeColor = '#CCCCCC',
  strokeFillColor = '#333333',
  strokeWidth = 2,
  contentClassName = '',
  hideValue = false,
  children,
  onClick,
  ...rest
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [percentage, setPercentage] = useState(0)
  const svgRef = useRef<SVGSVGElement>(null)

  const durationValue = (duration * 1000) / value

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Adjust this threshold as needed
      }
    )

    if (svgRef.current) {
      observer.observe(svgRef.current)
    }

    return () => {
      if (svgRef.current) {
        observer.unobserve(svgRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (onVisible && !isVisible) {
      setPercentage(0)
    } else if (isVisible) {
      const interval = setInterval(() => {
        if (percentage < value) {
          setPercentage(prevPercentage => Math.min(prevPercentage + 1, value))
        } else {
          clearInterval(interval)
        }
      }, durationValue)

      return () => clearInterval(interval)
    }
  }, [onVisible, isVisible, value])

  return (
    <div
      className={cn("relative size-24", className)}
      onClick={onClick}
      role='progressbar'
      {...rest}
    >
      <div className='absolute left-0 top-0 h-full w-full origin-center -rotate-90 transform'>
        <svg
          className='absolute left-1/2 top-1/2 z-0 h-full w-full -translate-x-1/2 -translate-y-1/2'
          viewBox='0 0 24 24'
          ref={svgRef}
        >
          <circle
            className=' '
            cx='12'
            cy='12'
            r='10'
            fill='none'
            stroke={strokeColor}
            strokeLinecap='round'
            strokeWidth={strokeWidth}
          />
        </svg>
        <svg
          className='absolute left-1/2 top-1/2 z-10 h-full w-full -translate-x-1/2 -translate-y-1/2 stroke-slate-600'
          viewBox='0 0 24 24'
          ref={svgRef}
        >
          <circle
            className=' '
            cx='12'
            cy='12'
            r='10'
            fill='none'
            stroke={strokeFillColor}
            strokeLinecap='round'
            strokeDasharray='62.83'
            strokeWidth={strokeWidth}
            style={{
              strokeDashoffset: `${((100 - percentage) * 62.83) / 100}`
            }}
          />
        </svg>
        <span
          className={`${contentClassName} absolute inset-0 flex h-full w-full rotate-90 items-center justify-center text-gray-500 text-inherit`}
        >
          {!children && !hideValue && <>{percentage}%</>}
          {children && <>{children}</>}
        </span>
      </div>
    </div>
  )
}
