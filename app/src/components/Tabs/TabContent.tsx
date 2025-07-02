'use client'

import React, { ReactNode } from 'react'
import { cn } from '../../utils/cn'
import { useTabs } from './TabsContext'

interface TabContentProps {
  children: ReactNode
  id: string
  className?: string
}

export const TabContent: React.FC<TabContentProps> = ({ children, id, className = "", ...rest }) => {
  const { activeTab } = useTabs()

  if (activeTab !== id) return null

  return <div className={cn(className)} {...rest}>{children}</div>
}
