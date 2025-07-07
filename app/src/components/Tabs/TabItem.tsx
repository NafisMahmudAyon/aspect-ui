'use client'

import React, { ReactNode } from 'react'
import { cn } from '../../utils/cn'
import { useTabs } from './TabsContext'

interface TabItemProps {
  children: ReactNode
  id: string
  disabled?: boolean
  className?: string
  activeClassName?: string
  disabledClassName?: string
  onClick?: () => void
}

export const TabItem: React.FC<TabItemProps> = ({
  children,
  id,
  disabled,
  className = '',
  activeClassName = '',
  disabledClassName = '',
  onClick,
  ...rest
}) => {
  const { activeTab, setActiveTab } = useTabs()

  return (
    <button
      className={cn(
        'rounded-md border border-transparent px-3 py-1.5 text-sm font-medium whitespace-nowrap',
        activeTab === id
          ? cn('bg-bg-light border-border', activeClassName)
          : disabled && cn('pointer-events-none opacity-50', disabledClassName),
        className
      )}
      onClick={() => {
        if (!disabled) {
          setActiveTab(id)
          onClick?.()
        }
      }}
      {...rest}
    >
      {children}
    </button>
  )
}
