// ./app/src/components/Navbar/NavbarContext.tsx
'use client'
import React, { createContext, useContext, useState } from 'react'

interface NavbarContextType {
  isCollapsed: boolean
  toggleCollapse: () => void
  collapseBreakpoint: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'all'
}

const NavbarContext = createContext<NavbarContextType | undefined>(undefined)

export const NavbarProvider: React.FC<{ children: React.ReactNode, collapseBreakpoint: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'all' }> = ({
  children,
  collapseBreakpoint = 'md' // default value
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true)

  const toggleCollapse = () => setIsCollapsed(prev => !prev)

  return (
    <NavbarContext.Provider value={{ isCollapsed, toggleCollapse, collapseBreakpoint }}>
      {children}
    </NavbarContext.Provider>
  )
}

export const useNavbar = (): NavbarContextType => {
  const context = useContext(NavbarContext)
  if (context === undefined) {
    throw new Error('useNavbar must be used within a NavbarProvider')
  }
  return context
}