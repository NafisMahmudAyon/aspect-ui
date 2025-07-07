// ./app/src/components/Toggle/ToggleButtonGroup.tsx
'use client'

import { cn } from '../../utils/cn'
import { ToggleButtonGroupProvider } from './ToggleButtonGroupContext'

interface ToggleButtonGroupProps {
  children: React.ReactNode
  type: 'single' | 'multiple'
  defaultValue?: string | string[]
  onChange?: (value: string | string[]) => void
  className?: string
  outline?: boolean
  disabled?: boolean
}

export const ToggleButtonGroup: React.FC<ToggleButtonGroupProps> = ({
  children,
  type,
  defaultValue,
  onChange,
  className = '',
  outline = false,
  disabled = false,
  ...rest
}) => {
  return (
    <ToggleButtonGroupProvider
      type={type}
      defaultValue={defaultValue}
      onChange={onChange}
      outline={outline}
      disabled={disabled}
    >
      <div
        className={cn(
          'flex items-center rounded-md',
          outline && 'shadow-xs',
          className
        )}
        {...rest}
      >
        {children}
      </div>
    </ToggleButtonGroupProvider>
  )
}
