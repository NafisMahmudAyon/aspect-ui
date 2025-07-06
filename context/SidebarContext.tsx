'use client'
import { createContext, useContext, useState } from 'react'

const SidebarContext = createContext(undefined)

export const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  return (
    <SidebarContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebarContext = () => {
  const context = useContext(SidebarContext)
  if (!context) throw new Error('useSidebarContext must be used within SidebarProvider')
  return context
}
