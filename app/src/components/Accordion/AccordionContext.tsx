'use client'

import React, { createContext, useContext, ReactNode } from 'react'

interface AccordionContextType {
  openItems: string[]
  toggleItem: (itemId: string) => void
  iconEnabled: boolean
  iconPosition: 'left' | 'right'
  iconClassName: string
  activeIconClassName: string
  activeIcon?: ReactNode
  inactiveIcon?: ReactNode
  labelClassName?: string
  activeLabelClassName?: string
  headerClassName?: string
  activeHeaderClassName?: string
  contentClassName?: string
  reset?: boolean
}

const AccordionContext = createContext<AccordionContextType | undefined>(
  undefined
)

export const AccordionProvider: React.FC<{
  children: React.ReactNode
  value: AccordionContextType
}> = ({ children, value }) => {
  return (
    <AccordionContext.Provider value={value}>
      {children}
    </AccordionContext.Provider>
  )
}

export const useAccordion = (): AccordionContextType => {
  const context = useContext(AccordionContext)
  if (context === undefined) {
    throw new Error('useAccordion must be used within an AccordionProvider')
  }
  return context
}
