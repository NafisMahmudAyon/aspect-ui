'use client'
import { Select } from '@/app/src/components/Select'
import React from 'react'

const SelectDemo = () => {
  console.log(Select)
  return (
    <div>
      <Select
        options={[
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' },
          { value: 'option3', label: 'Option 3', disabled: true },
        ]}
        onChange={(value) => console.log(value)}
        multiple
      />
    </div>
  )
}

export default SelectDemo