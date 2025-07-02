// ./app/src/components/Sidebar/SidebarHeader.tsx
'use client'

import React, { ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface SidebarHeaderProps {
  children: ReactNode
  className?: string
}

export const SidebarHeader: React.FC<SidebarHeaderProps> = ({ children, className = "", ...rest }) => {
  return <div className={cn('border-b-2 border-border text-text transition-all duration-200 ease-in-out px-2.5 py-3', className)} {...rest}>{children}</div>
}
