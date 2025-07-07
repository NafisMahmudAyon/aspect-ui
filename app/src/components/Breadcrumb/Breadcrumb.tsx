'use client'
import { ChevronRight } from 'lucide-react'
import React, { Children, HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

interface BreadcrumbProps extends HTMLAttributes<HTMLUListElement> {
  className?: string
  children: React.ReactNode
  separator?: React.ReactNode
  separatorClassName?: string
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  children,
  className = '',
  separator = <ChevronRight />,
  separatorClassName = '',
  ...rest
}) => {
  // Safely convert children to an array
  const childrenArray = Children.toArray(children)

  return (
    <ul
      className={cn(
        'text-muted flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5',
        className
      )}
      {...rest}
    >
      {childrenArray.map((child: React.ReactNode, index: number) => (
        <React.Fragment key={index}>
          {child}
          {index < childrenArray.length - 1 && (
            <span className={cn('text-muted mx-2', separatorClassName)}>
              {separator}
            </span>
          )}
        </React.Fragment>
      ))}
    </ul>
  )
}

Breadcrumb.displayName = 'Breadcrumb'
