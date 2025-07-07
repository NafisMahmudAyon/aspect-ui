// ./app/src/components/Navbar/NavbarList.tsx
'use client'

import React, { ReactNode } from 'react'
import { cn } from '../../utils/cn'
import { useNavbar } from './NavbarContext'

interface NavbarListProps {
  children: ReactNode
  className?: string
  // position: 'left' | 'right'
}

export const NavbarList: React.FC<NavbarListProps> = ({
  children,
  className = '',
  ...rest
}) => {
  const { collapseBreakpoint } = useNavbar()
  return (
    <ul
      className={cn(
        'items-center space-x-4',
        `hidden ${collapseBreakpoint === 'sm' && 'sm:flex'} ${collapseBreakpoint === 'md' && 'md:flex'} ${collapseBreakpoint === 'lg' && 'lg:flex'} ${collapseBreakpoint === 'xl' && 'xl:flex'} ${collapseBreakpoint === '2xl' && '2xl:flex'}`,
        className
      )}
      {...rest}
    >
      {children}
    </ul>
  )
}
