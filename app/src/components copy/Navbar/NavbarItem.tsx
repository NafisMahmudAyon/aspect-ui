// ./app/src/components/Navbar/NavbarItem.tsx
'use client'

import React, { ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface NavbarItemProps {
  children: ReactNode
  className?: string 
}

export const NavbarItem: React.FC<NavbarItemProps> = ({ children, className = '', ...rest }) => {
  return <div className={cn('px-2 py-1 text-primary-800 dark:text-primary-200 hover:text-primary-900 dark:hover:text-primary-100', className)} {...rest}>{children}</div>
}
