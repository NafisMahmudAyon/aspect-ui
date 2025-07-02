'use client'

import React, { createContext, useContext } from 'react'

interface TableContextType {
  // You can add shared properties or methods here if needed
}

const TableContext = createContext<TableContextType | undefined>(undefined)

export const TableProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  return <TableContext.Provider value={{}}>{children}</TableContext.Provider>
}

export const useTable = (): TableContextType => {
  const context = useContext(TableContext)
  if (context === undefined) {
    throw new Error('useTable must be used within a TableProvider')
  }
  return context
}
