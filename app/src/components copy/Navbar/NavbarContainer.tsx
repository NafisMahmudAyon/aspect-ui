// ./app/src/components/Navbar/NavbarContainer.tsx
'use client'

import React, { ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface NavbarContainerProps {
  children: ReactNode
  className?: string
}

export const NavbarContainer: React.FC<NavbarContainerProps> = ({
  children,
  className = '',
  ...rest
}) => {
  return (
    <div className={cn('container mx-auto flex items-center justify-between py-4 px-4', className)} {...rest}>
      {children}
    </div>
  )
}
