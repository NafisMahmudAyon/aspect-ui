// ./app/src/components/Navbar/NavbarItem.tsx
'use client'

import React, { ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface NavbarItemProps {
  children: ReactNode
  className?: string
}

export const NavbarItem: React.FC<NavbarItemProps> = ({ children, className = '', ...rest }) => {
  return <button className={cn('px-2 py-1 inline-flex text-text hover:bg-bg-light rounded-md transition-colors ease-in-out focus-visible:bg-bg-light', className)} {...rest}>{children}</button>
}
