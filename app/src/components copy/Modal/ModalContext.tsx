'use client'

import React, { createContext, useContext } from 'react'

interface ModalContextType {
  isOpen: boolean
  handleOpen: () => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export const ModalProvider: React.FC<{
  children: React.ReactNode
  value: ModalContextType
}> = ({ children, value }) => {
  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
}

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext)
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider')
  }
  return context
}
