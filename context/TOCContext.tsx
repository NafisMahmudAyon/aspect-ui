// context/TOCContext.tsx
'use client'
import { createContext, useContext, useState } from 'react'

type TOCItem = { id: string; title: string }
type TOCContextType = {
  toc: TOCItem[]
  setTOC: (toc: TOCItem[]) => void
}

const TOCContext = createContext<TOCContextType | undefined>(undefined)

export const TOCProvider = ({ children }: { children: React.ReactNode }) => {
  const [toc, setTOC] = useState<TOCItem[]>([])
  // console.log(toc)
  return (
    <TOCContext.Provider value={{ toc, setTOC }}>
      {children}
    </TOCContext.Provider>
  )
}

export const useTOC = () => {
  const context = useContext(TOCContext)
  if (!context) throw new Error('useTOC must be used within TOCProvider')
  return context
}
