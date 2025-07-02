'use client'
import { HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

export interface BreadcrumbItemProps extends HTMLAttributes<HTMLLIElement> {
  children: React.ReactNode
  className?: string
}

export const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  children,
  className = "",
  ...rest
}) => {
  return (
    <li className={cn("flex cursor-pointer items-center", className)} {...rest} >
      {children}
    </li>
  )
}

BreadcrumbItem.displayName = 'BreadcrumbItem'
