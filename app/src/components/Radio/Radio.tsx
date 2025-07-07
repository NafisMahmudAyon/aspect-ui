// ./app/src/components/Radio/Radio.tsx
'use client'

import React from 'react'
import { cn } from '../../utils/cn'

interface RadioProps {
  id: string
  name: string
  value: string
  label: string
  checked?: boolean
  className?: string
  labelClassName?: string
  wrapperClassName?: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Radio: React.FC<RadioProps> = ({
  id,
  name,
  value,
  label,
  checked,
  className = '',
  labelClassName = '',
  wrapperClassName = '',
  onChange
}) => {
  return (
    <div className={cn('flex items-center', wrapperClassName)}>
      <input
        type='radio'
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className={cn('form-radio accent-primary h-5 w-5', className)}
      />
      <label htmlFor={id} className={cn('text-text ml-2', labelClassName)}>
        {label}
      </label>
    </div>
  )
}
