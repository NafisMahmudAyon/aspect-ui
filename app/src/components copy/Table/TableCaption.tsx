'use client'

import React, { ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface TableCaptionProps {
  children: ReactNode
  className?: string
  position?: "top" | "bottom"
}

export const TableCaption: React.FC<TableCaptionProps> = ({
  children,
  className = '',
  position = "top",
  ...rest
}) => {
  return (
    <caption className={cn("mb-2 text-sm text-primary-800 dark:text-primary-200", position === "top" ? "caption-top" : "caption-bottom", className)} {...rest}>
      {children}
    </caption>
  )
}
