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
      className={cn('cursor-pointer p-2.5 flex items-center gap-3 rounded-md text-body1 font-normal transition-all duration-200 ease-in-out hover:bg-primary-800  text-primary-800 hover:text-primary-200  dark:hover:bg-primary-200 dark:text-primary-200 dark:hover:text-primary-800', className)}
      onClick={onClick}
      {...rest}
    >
      {children}
    </div>
  )
}
