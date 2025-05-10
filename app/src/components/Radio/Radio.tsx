// ./app/src/components/Radio/Radio.tsx
'use client'

import React from 'react'

interface RadioProps {
  id: string
  name: string
  value: string
  label: string
  checked?: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Radio: React.FC<RadioProps> = ({
  id,
  name,
  value,
  label,
  checked,
  onChange
}) => {
  return (
    <div className='flex items-center'>
      <input
        type='radio'
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className='form-radio h-5 w-5 text-primary-200 dark:text-primary-800 checked:text-primary-900 dark:checked:text-primary-200 accent-primary-800 dark:accent-primary-100 peer'
      />
      <label htmlFor={id} className='ml-2 text-primary-800 dark:text-primary-200 peer-checked:text-primary-900 peer-checked:dark:text-primary-100'>
        {label}
      </label>
    </div>
  )
}
