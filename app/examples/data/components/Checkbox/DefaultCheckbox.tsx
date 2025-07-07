'use client'
import { Checkbox } from '@/app/src'
import { useState } from 'react'

export default function DefaultCheckbox() {
  const [checked, setChecked] = useState(true)
  return (
    <div className='flex space-x-4'>
      <Checkbox
        label='Default Checkbox'
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
    </div>
  )
}
