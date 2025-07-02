// ./app/src/components/Toggle/ToggleButtonGroupContext.tsx

'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

type ToggleButtonGroupType = 'single' | 'multiple'

interface ToggleButtonGroupContextType {
  type: ToggleButtonGroupType
  selectedValues: string | string[]
  handleChange: (value: string) => void
  outline?: boolean
  disabled?: boolean
  size?: 'small' | 'medium' | 'large'
}

const ToggleButtonGroupContext = createContext<
  ToggleButtonGroupContextType | undefined
>(undefined)

export const useToggleButtonGroup = () => {
  const context = useContext(ToggleButtonGroupContext)
  if (!context) {
    throw new Error(
      'useToggleButtonGroup must be used within a ToggleButtonGroupProvider'
    )
  }
  return context
}

interface ToggleButtonGroupProviderProps {
  children: ReactNode
  type: ToggleButtonGroupType
  defaultValue?: string | string[]
  onChange?: (value: string | string[]) => void
  outline?: boolean
  disabled?: boolean
  size?: 'small' | 'medium' | 'large'
}


export const ToggleButtonGroupProvider: React.FC<
  ToggleButtonGroupProviderProps
> = ({
  children,
  type,
  defaultValue = type === 'single' ? '' : [],
  onChange,
  outline = false,
  disabled = false,
  size = 'medium'
}) => {
  const [selectedValues, setSelectedValues] = useState<string | string[]>(
    defaultValue
  )

  const handleChange = (value: string) => {
    let newValues: string | string[]

    if (type === 'single') {
      newValues = value === selectedValues ? '' : value
    } else {
      newValues = Array.isArray(selectedValues) ? [...selectedValues] : []
      const index = newValues.indexOf(value)
      if (index === -1) {
        newValues.push(value)
      } else {
        newValues.splice(index, 1)
      }
    }

    setSelectedValues(newValues)
    onChange?.(newValues)
  }

  return (
    <ToggleButtonGroupContext.Provider
      value={{ type, selectedValues, handleChange, outline, disabled, size }}
    >
      {children}
    </ToggleButtonGroupContext.Provider>
  )
}
