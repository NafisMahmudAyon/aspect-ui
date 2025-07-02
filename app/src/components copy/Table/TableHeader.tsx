'use client'

import React, { ReactNode } from 'react'

interface TableHeaderProps {
  children: ReactNode
  className?: string
}

export const TableHeader: React.FC<TableHeaderProps> = ({
  children,
  className = '',
  ...rest
}) => {
  return <thead className={`border-0 border-b border-b-primary-100 hover:border-b-primary-50 dark:border-b-primary-800 dark:hover:border-b-primary-800 bg-primary-100 hover:bg-primary-50 dark:bg-primary-800 transition-colors duration-150 ease-in-out ${className}`} {...rest}>{children}</thead>
}
