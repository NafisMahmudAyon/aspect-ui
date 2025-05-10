'use client'
import { Radio } from '@/app/src'
import React, { useState } from 'react'

const RadioExample = () => {
  const [selectedOption, setSelectedOption] = useState('option1')
  
    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedOption(event.target.value)
    }
    return (
      <div>
        <form className="space-y-2">
          <Radio
            id='option1'
            name='radioGroup'
            value='option1'
            label='Option 1'
            checked={selectedOption === 'option1'}
            onChange={handleOptionChange}
          />
          <Radio
            id='option2'
            name='radioGroup'
            value='option2'
            label='Option 2'
            checked={selectedOption === 'option2'}
            onChange={handleOptionChange}
          />
        </form>
      </div>
    )
}

export default RadioExample