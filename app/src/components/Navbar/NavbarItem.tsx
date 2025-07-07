// ./app/src/components/Navbar/NavbarItem.tsx
'use client'

import React, { ReactNode } from 'react'
import { cn } from '../../utils/cn'
import { useNavbar } from './NavbarContext'

interface NavbarItemProps {
  children: ReactNode
  className?: string
}

export const NavbarItem: React.FC<NavbarItemProps> = ({
  children,
  className = '',
  ...rest
}) => {
  const { setIsCollapsed } = useNavbar()
  return (
    <button
      className={cn(
        'text-text hover:bg-bg-light focus-visible:bg-bg-light inline-flex rounded-md px-2 py-1 transition-colors ease-in-out',
        className
      )}
      onClick={() => {
        console.log(':')
        setIsCollapsed(false)
      }}
      {...rest}
    >
      {children}
    </button>
  )
}
