'use client'
import React, { ReactNode } from 'react'
import { cn } from '../../utils/cn'
import { NavbarProvider } from './NavbarContext'

interface NavbarProps {
  children: ReactNode
  className?: string
  collapseBreakpoint?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'all'
}

export const Navbar: React.FC<NavbarProps> = ({
  children,
  className = '',
  collapseBreakpoint = 'md',
  ...rest
}) => {
  return (
    <NavbarProvider collapseBreakpoint={collapseBreakpoint}>
      <nav className={cn('bg-bg relative shadow-md', className)} {...rest}>
        {children}
      </nav>
    </NavbarProvider>
  )
}
