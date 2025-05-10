'use client'
import { Rating } from '@/app/src'
import { Star } from 'lucide-react'

const RatingExample = () => {
  return (
    <div>
      <Rating
        maxRating={5}
        initialRating={3.5}
        starColor="#FFD700"
        hoverColor="#FFA500"
        unratedColor="#D3D3D3"
        ratingTexts={['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']}
        icon={<Star />}
      />
    </div>
  )
}

export default RatingExample