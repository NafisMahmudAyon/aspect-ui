'use client'
import { Star } from '../Icon/Star'
import React, { useState } from 'react'

interface RatingProps {
  maxRating?: number
  initialRating?: number
  size?: number
  onRatingChange?: (rating: number) => void
  starColor?: string
  hoverColor?: string
  unratedColor?: string
  ratingTexts?: string[]
  readOnly?: boolean
}

const defaultRatingTexts = ['Terrible', 'Bad', 'OK', 'Good', 'Excellent']

export const Rating: React.FC<RatingProps> = ({
  maxRating = 5,
  initialRating = 0,
  size = 30,
  onRatingChange,
  starColor = '#ffc107',
  hoverColor = '#ffecb3',
  unratedColor = '#e4e5e9',
  ratingTexts = defaultRatingTexts,
  readOnly = false
}) => {
  const [rating, setRating] = useState(initialRating)
  const [hover, setHover] = useState<number | null>(null)

  const handleRatingChange = (newRating: number) => {
    if (!readOnly) {
      setRating(newRating)
      if (onRatingChange) {
        onRatingChange(newRating)
      }
    }
  }

  const getRatingText = (value: number) => {
    if (value === 0) return ''
    const index = Math.ceil(value) - 1
    return ratingTexts[index] || defaultRatingTexts[index]
  }

  const renderStar = (index: number) => {
    const starValue = index + 1
    const isHovered = hover !== null && starValue <= hover
    const isFilled = starValue <= rating
    const currentColor = isHovered
      ? hoverColor
      : isFilled
        ? starColor
        : unratedColor

    return (
      <div
        key={index}
        className='relative inline-block'
        style={{ width: size, height: size, marginRight: 5 }}
        onMouseEnter={() => !readOnly && setHover(starValue)}
        onMouseLeave={() => !readOnly && setHover(null)}
      >
        <Star
          className='absolute left-0 top-0'
          color={currentColor}
          size={size}
        />
        {!readOnly && (
          <input
            type='radio'
            name='rating'
            value={starValue}
            onClick={() => handleRatingChange(starValue)}
            className='absolute left-0 top-0 h-full w-full cursor-pointer opacity-0'
          />
        )}
      </div>
    )
  }

  return (
    <div className='flex flex-col items-center'>
      <div className='flex'>
        {[...Array(maxRating)].map((_, index) => renderStar(index))}
      </div>
      {(rating > 0 || hover !== null) && (
        <div className='mt-2 text-sm font-semibold'>
          {getRatingText(hover !== null ? hover : rating)}
        </div>
      )}
    </div>
  )
}
