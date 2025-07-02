'use client'

import React, { createContext, useContext } from 'react'

interface DropdownContextType {
  isOpen: boolean
  toggleDropdown: () => void
  closeDropdown: () => void
  direction:
    | 'top'
    | 'left'
    | 'right'
    | 'bottom'
    | 'top-right'
    | 'top-left'
    | 'bottom-right'
    | 'bottom-left'
  positionClass: string
}

const DropdownContext = createContext<DropdownContextType | undefined>(
  undefined
)

export const DropdownProvider: React.FC<{
  children: React.ReactNode
  value: DropdownContextType
}> = ({ children, value }) => {
  return (
    <DropdownContext.Provider value={value}>
      {children}
    </DropdownContext.Provider>
  )
}

export const useDropdown = (): DropdownContextType => {
  const context = useContext(DropdownContext)
  if (context === undefined) {
    throw new Error('useDropdown must be used within a DropdownProvider')
  }
  return context
}
