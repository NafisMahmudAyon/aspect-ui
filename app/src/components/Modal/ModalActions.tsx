'use client'

import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../utils/cn'
import { useModal } from './ModalContext'

interface ModalActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
}

export const ModalAction: React.FC<ModalActionProps> = ({
  children,
  className = '',
  ...rest
}) => {
  const { handleOpen } = useModal()

  return (
    <button
      className={cn(
        'focus-visible:border-ring focus-visible:ring-border bg-bg-light text-text inline-flex cursor-pointer items-center justify-center gap-2 rounded-md px-4 py-2 font-medium transition duration-200 ease-in-out focus:outline-hidden focus-visible:ring-1',
        className
      )}
      onClick={handleOpen}
      {...rest}
    >
      {children}
    </button>
  )
}
