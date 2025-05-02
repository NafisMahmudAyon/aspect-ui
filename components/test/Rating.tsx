'use client'
import { Avatar } from '@/app/src/components/Icon/Avatar'
// import { Rating } from '@/app/src/components/Rating/Rating'
import {Rating} from '@/app/src/components/Rating/Rating'
import React from 'react'

const RatingDemo = () => {
  // const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>, rating: number) => {
  //   console.log('Selected rating:', rating);
  //   console.log('Event:', event);
  // };

  return (
    <div className='p-4'>
      <h1 className='mb-4 text-2xl font-bold'>Rating Component Example</h1>
      <div className='flex flex-col space-y-4'>
        {/* // 1. Basic usage with default props
        <Rating />

        // 2. Basic usage with onChange handler
          <Rating onChange={handleRatingChange} /> */}

          // 3. Custom max rating and initial value
        <Rating
          maxRating={5}
          size={24}
          initialRating={3.5}
          // unratedColor='text-primary-500'
          // ratedColor='text-error-900'
          // readOnly
        />

{/* // 4. Custom star size and colors
        <Rating
          size={32}
          starColor="#FFD700"    // Gold
          hoverColor="#FFA500"   // Orange
          unratedColor="#D3D3D3" // Light gray
        />

// 5. With rating texts
        <Rating
          ratingTexts={['Terrible', 'Poor', 'Average', 'Good', 'Excellent']}
          initialRating={3.5}
        />

// 6. Read-only mode (for displaying static ratings)
        <Rating
          initialRating={4}
          readOnly={true}
        /> */}

        // 8. Fully customized example
        <Rating
          maxRating={5}
          initialRating={3.5}
          
          // onChange={handleRatingChange}
          starColor="#FFD700"
          hoverColor="#FFA500"
          unratedColor="#D3D3D3"
          ratingTexts={['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']}
          // readOnly={true}
          icon={<Avatar size={20} />}
        />
      </div>
    </div>
  )
}

export default RatingDemo
