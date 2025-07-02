'use client'
import React, { useState, useEffect, ReactNode } from 'react'

interface MasonryProps {
  children: ReactNode[]
  columnCount?: { sm: number; md: number; lg: number; xl: number }
  gap?: number
  className?: string
}

type ColumnWrapper = { [key: number]: React.ReactNode[] }

export const Masonry: React.FC<MasonryProps> = ({
  children,
  columnCount = { sm: 1, md: 2, lg: 3, xl: 4 },
  gap = 4,
  className = "",
  ...rest
}) => {
  const [columns, setColumns] = useState(columnCount.sm)

  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth
      if (width >= 1280) setColumns(columnCount.xl)
      else if (width >= 1024) setColumns(columnCount.lg)
      else if (width >= 768) setColumns(columnCount.md)
      else setColumns(columnCount.sm)
    }

    updateColumns()
    window.addEventListener('resize', updateColumns)
    return () => window.removeEventListener('resize', updateColumns)
  }, [columnCount])

  const columnWrapper: ColumnWrapper = {}
  const result = []

  for (let i = 0; i < children.length; i++) {
    const columnIndex = i % columns
    if (!columnWrapper[columnIndex]) {
      columnWrapper[columnIndex] = []
    }
    columnWrapper[columnIndex].push(children[i])
  }

  for (let i = 0; i < columns; i++) {
    result.push(
      <div
        key={i}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          width: `${100 / columns}%`,
          gap: `${gap * 0.25}rem`
        }}
      >
        {columnWrapper[i]}
      </div>
    )
  }

  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: `${gap * 0.25}rem`
      }}
      {...rest}
    >
      {result}
    </div>
  )
}
