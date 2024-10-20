'use client'
import React, { useState, useEffect, useRef } from 'react'

interface SliderProps {
  min: number
  max: number
  defaultValue: number[]
  onChange?: (values: number[]) => void
}

export const Slider: React.FC<SliderProps> = ({
  min,
  max,
  defaultValue,
  onChange
}) => {
  const [values, setValues] = useState<number[]>(defaultValue)
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (onChange) {
      onChange(values)
    }
  }, [values, onChange])

  const handleMouseDown = (index: number) => (e: React.MouseEvent) => {
    e.preventDefault()

    const handleMouseMove = (e: MouseEvent) => {
      if (sliderRef.current) {
        const rect = sliderRef.current.getBoundingClientRect()
        const percentage = Math.max(
          0,
          Math.min(1, (e.clientX - rect.left) / rect.width)
        )
        const newValue = Math.round(percentage * (max - min) + min)

        setValues(prevValues => {
          const newValues = [...prevValues]
          newValues[index] = newValue
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
      className='relative h-2 w-full rounded-full bg-gray-200'
      ref={sliderRef}
    >
      <div
        className='absolute h-full rounded-full bg-blue-500'
        style={{
          left: values.length === 1 ? '0%' : `${getLeftPosition(values[0])}%`,
          right:
            values.length === 1
              ? `${100 - getLeftPosition(values[0])}%`
              : `${100 - getLeftPosition(values[1])}%`
        }}
      ></div>
      {values.map((value, index) => (
        <div
          key={index}
          className='absolute h-4 w-4 cursor-pointer rounded-full border-2 border-blue-500 bg-white'
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
