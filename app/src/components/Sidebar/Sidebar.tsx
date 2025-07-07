'use client'

import React, { ReactNode } from 'react'
import { cn } from '../../utils/cn'
import { useSidebar } from './SidebarContext'

interface SidebarProps {
  children: ReactNode
  className?: string
  breakPoint?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}

export const Sidebar: React.FC<SidebarProps> = ({
  children,
  className = '',
  breakPoint = 'md',
  ...rest
}) => {
  const { isOpen } = useSidebar()

  const breakpointStyle = (breakPoint: 'sm' | 'md' | 'lg' | 'xl' | '2xl') => {
    switch (breakPoint) {
      case 'sm':
        return 'md:flex md:translate-x-0 md:relative'
      case 'md':
        return 'lg:flex lg:translate-x-0 lg:relative'
      case 'lg':
        return 'xl:flex xl:translate-x-0 xl:relative'
      case 'xl':
        return '2xl:flex 2xl:translate-x-0 2xl:relative'
      case '2xl':
        return ''
      default:
        return 'lg:flex lg:translate-x-0 lg:relative'
    }
  }

  return (
    <aside
      className={cn(
        'bg-bg fixed top-0 left-0 z-40 h-screen w-64 flex-col p-5 transition-all duration-300 ease-in-out',
        breakpointStyle(breakPoint),
        isOpen ? 'translate-x-0' : '-translate-x-full',
        className
      )}
      {...rest}
    >
      {children}
    </aside>
  )
}
