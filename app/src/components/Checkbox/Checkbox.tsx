// ./app/src/components/Checkbox/Checkbox.tsx

'use client'

import React, { ChangeEvent } from 'react'

interface CheckboxProps {
  label: string
  checked: boolean;
  checkboxClassName?: string;
  // variant?: 'rounded-sm' | 'circle' | 'default'
  onChange?: (checked: boolean) => void
  disabled?: boolean
  className?: string
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  checkboxClassName ="",
  onChange,
  disabled = false,
  // variant = 'default',
  className = '',
  ...rest
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.checked)
  }

  return (
    <label
      className={`flex gap-2 cursor-pointer items-center ${disabled ? 'cursor-not-allowed opacity-50' : ''} ${className}`}
    >
      <input
        type='checkbox'
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        className=""
        {...rest}
      />
      <span className=''>{label}</span>
    </label>
  )
}
