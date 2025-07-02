'use client'
import React, { ReactNode } from 'react'
import { NavbarProvider } from './NavbarContext'
import { cn } from '../../utils/cn'

interface NavbarProps {
  children: ReactNode
  className?: string
  collapseBreakpoint?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'all'
}

export const Navbar: React.FC<NavbarProps> = ({ children, className = '', collapseBreakpoint ='md', ...rest }) => {
  return (
    <NavbarProvider collapseBreakpoint={collapseBreakpoint}>
      <nav className={cn('relative bg-primary-100 dark:bg-primary-900 shadow-md', className)} {...rest}>
        {children}
      </nav>
    </NavbarProvider>
  )
}