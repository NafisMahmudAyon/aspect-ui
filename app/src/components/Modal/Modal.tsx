'use client'

import React, { ReactNode, useCallback, useEffect, useState } from 'react'
import { ModalProvider } from './ModalContext'

interface ModalProps {
  children: ReactNode
  handleOpen: () => void
}

export const Modal: React.FC<ModalProps> = ({ children, handleOpen }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenModal = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [setIsOpen])
  
  if(!handleOpen) {
    handleOpen = handleOpenModal
  }

  useEffect(() => {
    const handleEscapeKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        isOpen && setIsOpen(false)
      }
    }

    const handleClickOutsideModal = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest('.aspect-ui-modal')) {
        isOpen && setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKeyPress)
      document.addEventListener('mousedown', handleClickOutsideModal)
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKeyPress)
      document.removeEventListener('mousedown', handleClickOutsideModal)
    }
  }, [isOpen, setIsOpen])

  return (
    <ModalProvider value={{ isOpen, handleOpen }}>{children}</ModalProvider>
  )
}
