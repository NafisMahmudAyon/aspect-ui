'use client'
import React, { Children, HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'
import { Right } from '../Icon/Arrow'

interface BreadcrumbProps extends HTMLAttributes<HTMLUListElement> {
  className?: string
  children: React.ReactNode
  separator?: React.ReactNode
  separatorClassName?: string
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  children,
  className = "",
  separator = <Right />,
  separatorClassName = '',
  ...rest
}) => {
  // Safely convert children to an array
  const childrenArray = Children.toArray(children)

  return (
    <ul
      className={cn("flex max-w-max items-center gap-3 px-3.5 py-2.5 text-primary-800 dark:text-primary-100", className)}
      {...rest}
    >
      {childrenArray.map((child: React.ReactNode, index: number) => (
        <React.Fragment key={index}>
          {child}
          {index < childrenArray.length - 1 && (
            <span className={cn('mx-2 text-primary-500', separatorClassName)}>{separator}</span>
          )}
        </React.Fragment>
      ))}
    </ul>
  )
}

Breadcrumb.displayName = 'Breadcrumb'
