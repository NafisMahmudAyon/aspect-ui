// ./app/src/components/Sidebar/SidebarToggleButton.tsx
'use client'

import { Menu } from 'lucide-react'
import React, { ReactNode } from 'react'
import { cn } from '../../utils/cn'
import { Button } from '../Button'
import { useSidebar } from './SidebarContext'

interface SidebarToggleButtonProps {
  className?: string
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'link'
    | 'outline'
    | 'ghost'
    | 'icon'
    | 'withIcon'
    | 'default'
  size?: 'small' | 'medium' | 'large'
  icon?: ReactNode
}

export const SidebarToggleButton: React.FC<SidebarToggleButtonProps> = ({
  className = '',
  variant = 'default',
  size = 'medium',
  icon = <Menu />,
  ...rest
}) => {
  const { toggleSidebar } = useSidebar()

  return (
    <Button
      onClick={toggleSidebar}
      className={cn(className)}
      variant={variant}
      size={size}
      icon={icon}
      {...rest}
    />
  )
}
