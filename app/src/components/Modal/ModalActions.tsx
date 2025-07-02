'use client'

import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../utils/cn'
import { useModal } from './ModalContext'

interface ModalActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
}

export const ModalAction: React.FC<ModalActionProps> = ({ children, className = '', ...rest }) => {
  const { handleOpen } = useModal()

  return (
    <button
      className={cn('inline-flex gap-2 items-center justify-center font-medium rounded-md focus:outline-hidden focus-visible:border-ring focus-visible:ring-border transition ease-in-out duration-200 focus-visible:ring-1 px-4 py-2 bg-bg-light text-text cursor-pointer', className)}
      onClick={handleOpen}
      {...rest}
    >
      {children}
    </button>
  )
}
