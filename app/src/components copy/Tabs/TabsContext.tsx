'use client'

import React, { createContext, useContext } from 'react'

interface TabsContextType {
  activeTab: string
  setActiveTab: (tab: string) => void
}

const TabsContext = createContext<TabsContextType | undefined>(undefined)

export const TabsProvider: React.FC<{
  children: React.ReactNode
  value: TabsContextType
}> = ({ children, value }) => {
  return <TabsContext.Provider value={value}>{children}</TabsContext.Provider>
}

export const useTabs = (): TabsContextType => {
  const context = useContext(TabsContext)
  if (context === undefined) {
    throw new Error('useTabs must be used within a TabsProvider')
  }
  return context
}
