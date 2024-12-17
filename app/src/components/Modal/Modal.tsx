'use client'

import React, { ReactNode, useCallback, useEffect, useState } from 'react'
import { ModalProvider } from './ModalContext'

interface ModalProps {
  children: ReactNode
  isOpenExternal?: boolean
  onToggle?: (isOpen: boolean) => void
}

export const Modal: React.FC<ModalProps> = ({ children, isOpenExternal, onToggle }) => {
  const [isOpenInternal, setIsOpenInternal] = useState(false)

  const isOpen = isOpenExternal ?? isOpenInternal

  const handleOpen = useCallback(() => {
    const newState = !isOpen
    if (onToggle) {
      onToggle(newState)
    } else {
      setIsOpenInternal(newState)
    }
  }, [isOpen, onToggle])

  useEffect(() => {
    const handleEscapeKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        isOpen && handleOpen()
      }
    }

    const handleClickOutsideModal = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest('.aspect-ui-modal')) {
        isOpen && handleOpen()
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
  }, [isOpen, handleOpen])

  return (
    <ModalProvider value={{ isOpen, handleOpen }}>{children}</ModalProvider>
  )
}
