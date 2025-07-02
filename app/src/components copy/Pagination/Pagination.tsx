'use client'
import React, { useState } from 'react'
import { cn } from '../../utils/cn'

interface PaginationProps {
  count: number
  defaultPage?: number
  boundaryCount?: number
  siblingCount?: number
  showFirstLast?: boolean
  showNextPrev?: boolean
  firstButton?: React.ReactNode
  lastButton?: React.ReactNode
  nextButton?: React.ReactNode
  previousButton?: React.ReactNode
  firstButtonClassName?: string
  lastButtonClassName?: string
  nextButtonClassName?: string
  previousButtonClassName?: string
  className?: string
  buttonClassName?: string
  activeClassName?: string
  ellipsisClassName?: string 
  numberType?: 'normal' | 'roman' | 'custom'
  numbers?: string[]
  onChange: (page: number) => void
}

export const Pagination: React.FC<PaginationProps> = ({
  count,
  defaultPage = 1,
  boundaryCount = 1,
  siblingCount = 1,
  showFirstLast = true,
  showNextPrev = true,
  firstButton = 'First',
  lastButton = 'Last',
  nextButton = 'Next',
  previousButton = 'Previous',
  firstButtonClassName = '',
  lastButtonClassName = '',
  nextButtonClassName = '',
  previousButtonClassName = '',
  className = '',
  buttonClassName = '',
  activeClassName = '',
  ellipsisClassName = '',
  numberType = 'normal',
  numbers = [],
  onChange
}) => {
  const [currentPage, setCurrentPage] = useState(defaultPage)

  const convertToRoman = (num: number): string => {
    const romanNumerals = [
      { value: 1000, symbol: 'M' },
      { value: 900, symbol: 'CM' },
      { value: 500, symbol: 'D' },
      { value: 400, symbol: 'CD' },
      { value: 100, symbol: 'C' },
      { value: 90, symbol: 'XC' },
      { value: 50, symbol: 'L' },
      { value: 40, symbol: 'XL' },
      { value: 10, symbol: 'X' },
      { value: 9, symbol: 'IX' },
      { value: 5, symbol: 'V' },
      { value: 4, symbol: 'IV' },
      { value: 1, symbol: 'I' }
    ]
    
    let result = ''
    let remaining = num
    
    for (let i = 0; i < romanNumerals.length; i++) {
      while (remaining >= romanNumerals[i].value) {
        result += romanNumerals[i].symbol
        remaining -= romanNumerals[i].value
      }
    }
    
    return result.toLowerCase()
  }

  const range = (start: number, end: number) => {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i)
  }

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= count) {
      setCurrentPage(page)
      onChange(page)
    }
  }

  const generatePaginationItems = () => {
    const startPages = range(1, Math.min(boundaryCount, count))
    const endPages = range(
      Math.max(count - boundaryCount + 1, boundaryCount + 1),
      count
    )

    const siblingsStart = Math.max(
      Math.min(
        currentPage - siblingCount,
        count - boundaryCount - siblingCount * 2 - 1
      ),
      boundaryCount + 2
    )
    const siblingsEnd = Math.min(
      Math.max(
        currentPage + siblingCount,
        boundaryCount + siblingCount * 2 + 2
      ),
      endPages.length > 0 ? endPages[0] - 2 : count - 1
    )

    const showStartEllipsis = siblingsStart > boundaryCount + 2
    const showEndEllipsis = siblingsEnd < count - boundaryCount - 1

    const paginationItems = [
      ...(showFirstLast ? ['first'] : []),
      ...(showNextPrev ? ['previous'] : []),
      ...startPages,
      ...(showStartEllipsis
        ? ['start-ellipsis']
        : boundaryCount + 1 < count - boundaryCount
          ? [boundaryCount + 1]
          : []),
      ...range(siblingsStart, siblingsEnd),
      ...(showEndEllipsis
        ? ['end-ellipsis']
        : count - boundaryCount > boundaryCount
          ? [count - boundaryCount]
          : []),
      ...endPages,
      ...(showNextPrev ? ['next'] : []),
      ...(showFirstLast ? ['last'] : [])
    ]

    return paginationItems
  }

  const buttonPage = (type: string) => {
    switch (type) {
      case 'first':
        return 1
      case 'previous':
        return currentPage - 1
      case 'next':
        return currentPage + 1
      case 'last':
        return count
      default:
        return null
    }
  }

  const paginationItems = generatePaginationItems()

  return (
    <nav className={cn('flex items-center justify-center space-x-2 flex-wrap', className)}>
      {paginationItems.map((item, index) => (
        <React.Fragment key={index}>
          {item === 'start-ellipsis' || item === 'end-ellipsis' ? (
            <span className={cn('px-3 py-1 text-primary-800 dark:text-primary-100', ellipsisClassName)}>...</span>
          ) : (
            <button
              onClick={() =>
                handlePageChange(
                  typeof item === 'string' ? buttonPage(item)! : item
                )
              }
              disabled={
                typeof item === 'string'
                  ? (item === 'previous' && currentPage === 1) ||
                    (item === 'next' && currentPage === count)
                  : false
              }
                className={cn('rounded-md px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 hover:bg-primary-200 dark:hover:bg-primary-800 disabled:opacity-50 hover:text-primary-900 dark:hover:text-primary-100', currentPage === item
                  && 'bg-primary-500 dark:bg-primary-600 dark:text-primary-50 text-primary-200', item === 'first' && firstButtonClassName, item === 'last' && lastButtonClassName, item === 'next' && nextButtonClassName, item === 'previous' && previousButtonClassName, currentPage === item && activeClassName, buttonClassName)}
            >
              {item === 'first' && firstButton}
              {item === 'previous' && previousButton}
              {item === 'next' && nextButton}
              {item === 'last' && lastButton}
              {typeof item === 'number' && (
                numberType === 'roman' 
                  ? convertToRoman(item)
                  : numberType === 'custom' && numbers.length >= count
                    ? numbers[item - 1]
                    : item
              )}
            </button>
          )}
        </React.Fragment>
      ))}
    </nav>
  )
}