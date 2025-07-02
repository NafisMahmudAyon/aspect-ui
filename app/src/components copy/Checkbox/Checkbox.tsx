// ./app/src/components/Checkbox/Checkbox.tsx

'use client'

import React, { ChangeEvent } from 'react'
import { cn } from '../../utils/cn';

interface CheckboxProps {
  /**
   * Label for the checkbox
   * @default ""
   * @example
   * ```tsx
   * <Checkbox label="Label"/>
   * ```
   */
  label?: string
  /**
   * Whether the checkbox is checked or not
   * @default false
   * @example
   * ```tsx
   * <Checkbox checked={true} />
   * ```
   */
  checked: boolean;
  /**
   * Additional CSS classes to apply to the checkbox
   * @default ""
   * @example
   * ```tsx
   * <Checkbox checkboxClassName="w-5 h-5" />
   * ```
   */
  checkboxClassName?: string;
  // variant?: 'rounded-sm' | 'circle' | 'default'
  /**
   * Callback function to be called when the checkbox state changes
   * @default undefined
   * @example
   * ```tsx
   * <Checkbox onChange={(checked) => console.log(checked)} />
   * ```
   */
  onChange?: (checked: boolean) => void
  /**
   * Whether the checkbox is disabled or not
   * @default false
   * @example
   * ```tsx
   * <Checkbox disabled={true} />
   * ```
   */
  disabled?: boolean
  /**
   * Additional CSS classes to apply to the checkbox container
   * @default ""
   * @example
   * ```tsx
   * <Checkbox className="w-5 h-5" />
   * ```
   */
  className?: string
  /**
   * Additional CSS classes to apply to the label
   * @default ""
   * @example
   * ```tsx
   * <Checkbox labelClassName="text-lg" />
   * ```
   */
  labelClassName?: string
}

/**
 * Checkbox component
 * @param {CheckboxProps} props - The props for the checkbox component
 * @returns {JSX.Element} The checkbox component
 * @link https://aspect-ui.vercel.app/docs/components/checkbox
 * @example
 * ```tsx
 * import { Checkbox } from '@/components/aspect-ui/Checkbox'
 * <Checkbox label="Label" checked={true} onChange={(checked) => console.log(checked)} />
 * ```
 */
export const Checkbox: React.FC<CheckboxProps> = ({
  label="",
  checked,
  checkboxClassName ="",
  onChange,
  disabled = false,
  // variant = 'default',
  labelClassName = "",
  className = '',
  ...rest
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.checked)
  }

  return (
    <label
      className={cn("flex gap-2 cursor-pointer items-center", disabled ? 'cursor-not-allowed opacity-50' : '', className)}
    >
      <input
        type='checkbox'
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        className={cn("accent-primary-200 dark:accent-primary-800", checkboxClassName)}
        {...rest}
      />
      <span className={cn("", labelClassName)}>{label}</span>
    </label>
  )
}


/**
 * Component Checkbox
 * version: 1.0.0
 * author: Nafis Mahmud Ayon
 * license: MIT
 * repository: https://github.com/NafisMahmudAyon/aspect-ui
 */