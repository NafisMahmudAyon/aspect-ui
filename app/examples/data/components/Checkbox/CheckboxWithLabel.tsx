'use client'
import { Checkbox } from '@/app/src'
import { useState } from 'react'

export default function CheckboxWithLabel() {
  const [checked, setChecked] = useState(true)
  return (
    <div className='flex space-x-4'>
      <Checkbox
        label='Checkbox with Label'
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
    </div>
  )
}
