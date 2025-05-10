'use client'
import React, { useState, useEffect, useRef } from 'react'
import { cn } from '../../utils/cn'

interface NumberCounterProps {
  end: number
  duration: number
  decimals?: number
  onVisible?: boolean
  repeatOnVisible?: boolean
  className?: string
}

export const NumberCounter: React.FC<NumberCounterProps> = ({
  end,
  duration,
  decimals = 0,
  onVisible = false,
  repeatOnVisible = false,
  className = '',
  ...rest
}) => {
  const [count, setCount] = useState(0)
  const counterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const startCounting = () => {
      let start = 0
      const increment = end / (duration / 16) // 16ms is roughly 60fps
      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          clearInterval(timer)
          setCount(end)
        } else {
          setCount(start)
        }
      }, 16)
    }

    if (onVisible) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            startCounting()
            if (!repeatOnVisible) {
              observer.disconnect()
            }
          }
        },
        { threshold: 0.1 }
      )

      if (counterRef.current) {
        observer.observe(counterRef.current)
      }

      return () => observer.disconnect()
    } else {
      startCounting()
    }
  }, [end, duration, onVisible, repeatOnVisible])

  return <div className={cn('text-primary-800 dark:text-primary-200 text-h4', className)} ref={counterRef} {...rest}>
    {count.toFixed(decimals)}</div>
}