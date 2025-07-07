'use client'

import React, { useEffect, useRef, useState } from 'react'
import { cn } from '../../utils/cn'

interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number
  contentPosition?: 'left' | 'right'
  duration?: number
  animateOnLoad?: boolean
  animateOnVisible?: boolean
  min?: number
  max?: number
  className?: string
  containerClassName?: string
  fillClassName?: string
  contentClassName?: string
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  contentPosition = 'right',
  duration = 2,
  animateOnLoad = true,
  animateOnVisible = false,
  children,
  className = '',
  containerClassName = '',
  fillClassName = '',
  contentClassName = '',
  min = 0,
  max = 100,
  ...rest
}) => {
  // Ensure value is within min and max range
  const clampedValue = Math.min(Math.max(value, min), max)
  // Calculate percentage
  const [percentage, setPercentage] = useState<number>(
    ((clampedValue - min) / (max - min)) * 100
  )

  const durationValue = (duration * 1000) / value

  // Ref for the progress bar
  const progressBarRef = useRef<HTMLDivElement>(null)
  // State to track visibility
  const [isVisible, setIsVisible] = useState(false)

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

    if (progressBarRef.current) {
      observer.observe(progressBarRef.current)
    }

    return () => {
      if (progressBarRef.current) {
        observer.unobserve(progressBarRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (animateOnLoad === true && !isVisible) {
      setPercentage(0)
    }
  }, [])

  useEffect(() => {
    if (animateOnVisible === true && !isVisible) {
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
  }, [animateOnVisible, isVisible, value])

  return (
    <div
      className={cn('my-2 flex w-full items-center gap-4', className)}
      {...rest}
    >
      {contentPosition === 'left' && (
        <span className={cn('text-text min-w-10', contentClassName)}>
          {!children && <>{`${percentage}%`}</>}
          {children && children}
        </span>
      )}
      <div
        className={cn(
          'border-border bg-bg-light flex-1 overflow-hidden rounded-full border p-1',
          containerClassName
        )}
      >
        <div
          className={cn(
            'bg-primary relative flex h-4 rounded-full',
            fillClassName
          )}
          role='progressbar'
          aria-valuenow={clampedValue}
          aria-valuemin={min}
          aria-valuemax={max}
          style={{ width: `${percentage}%` }} // Initial width for animation
          ref={progressBarRef}
        ></div>
      </div>
      {contentPosition === 'right' && (
        <span className={cn('text-text min-w-10', contentClassName)}>
          {!children && <>{`${percentage}%`}</>}
          {children && children}
        </span>
      )}
    </div>
  )
}
