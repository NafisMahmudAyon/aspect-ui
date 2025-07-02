'use client'
import { Rating } from '@/app/src'
import { Star } from 'lucide-react'

const RatingExample = () => {
  return (
    <div className=''>
      <Rating
        maxRating={5}
        initialRating={3.5}
        ratingTexts={['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']}
        icon={<Star />}
        className='min-w-[225px]'
      />
    </div>
  )
}

export default RatingExample