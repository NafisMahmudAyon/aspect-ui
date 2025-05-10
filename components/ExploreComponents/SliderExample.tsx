import { Slider } from '@/app/src'
import React from 'react'

const SliderExample = () => {
  return (
    <div className='space-y-2 w-full'>
      <Slider
                min={0}
                max={100}
                defaultValue={[55]}
                step={1.5}
                // onChange={handleSingleSliderChange}
              />
      <Slider
                min={0}
                max={100}
                defaultValue={[33, 75]}
                // onChange={handleRangeSliderChange}
              />
    </div>
  )
}

export default SliderExample