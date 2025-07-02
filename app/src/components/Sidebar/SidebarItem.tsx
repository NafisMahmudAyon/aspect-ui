// ./app/src/components/Sidebar/SidebarItem.tsx
'use client'

import React, { ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface SidebarItemProps {
  children: ReactNode
  onClick?: () => void
  className?: string
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
  children,
  onClick,
  className = '',
  ...rest
}) => {
  return (
    <div
      className={cn('cursor-pointer p-2.5 flex items-center gap-3 rounded-md text-body1 font-normal transition-all duration-150 ease-in-out hover:bg-bg-light text-text', className)}
      onClick={onClick}
      {...rest}
    >
      {children}
    </div>
  )
}
