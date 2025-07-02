'use client'
import React, { useEffect, useRef, useState } from 'react'
import { cn } from '../../utils/cn'

interface SliderProps {
  min?: number // default 0
  max?: number // default 100
  step?: number // default 1
  defaultValue: number[]
  onChange?: (values: number[]) => void
  className?: string
  disabled?: boolean
}

export const Slider: React.FC<SliderProps> = ({
  min = 0,
  max = 100,
  step = 1,
  defaultValue,
  onChange,
  className = "",
  disabled = false,
  ...rest
}) => {
  const [values, setValues] = useState<number[]>(defaultValue)
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (onChange) {
      onChange(values)
    }
  }, [values, onChange])

  // Helper function to round value to nearest step
  const roundToStep = (value: number): number => {
    const steps = Math.round((value - min) / step)
    return Math.min(max, Math.max(min, min + (steps * step)))
  }

  const handleMouseDown = (index: number) => (e: React.MouseEvent) => {
    e.preventDefault()

    const handleMouseMove = (e: MouseEvent) => {
      if (sliderRef.current) {
        const rect = sliderRef.current.getBoundingClientRect()
        const percentage = Math.max(
          0,
          Math.min(1, (e.clientX - rect.left) / rect.width)
        )
        const rawValue = percentage * (max - min) + min
        const steppedValue = roundToStep(rawValue) // Round to nearest step

        setValues(prevValues => {
          const newValues = [...prevValues]
          newValues[index] = steppedValue
          return newValues.sort((a, b) => a - b)
        })
      }
    }

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  const getLeftPosition = (value: number) => {
    return ((value - min) / (max - min)) * 100
  }

  return (
    <div
      className={cn('relative h-2 w-full rounded-full bg-bg-light', disabled && 'opacity-50 cursor-not-allowed pointer-events-none', className)}
      ref={sliderRef}
      {...rest}
    >
      <div
        className='absolute h-full rounded-full bg-primary'
        style={{
          left: `${values.length === 1 ? '0' : getLeftPosition(values[0])}%`,
          right: `${values.length === 1
            ? 100 - getLeftPosition(values[0])
            : 100 - getLeftPosition(values[1])}%`
        }}
      ></div>
      {values.map((value, index) => (
        <div
          key={index}
          className={cn('absolute size-4 cursor-pointer rounded-full border-2 border-primary  bg-primary-foreground')}
          style={{
            left: `calc(${getLeftPosition(value)}% - 0.5rem)`,
            top: '-0.25rem'
          }}
          onMouseDown={handleMouseDown(index)}
        ></div>
      ))}
    </div>
  )
}
