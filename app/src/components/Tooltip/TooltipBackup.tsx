'use client'
import React, { ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import { cn } from '../../utils/cn'

type TooltipDirection = 'top' | 'right' | 'bottom' | 'left'

interface TooltipProps {
  children: [
    React.ReactElement<TooltipActionProps>,
    React.ReactElement<TooltipContentProps>
  ]
  direction?: TooltipDirection
  showOnClick?: boolean
  className?: string
  arrowColor?: string
  arrowSize?: number
  contentClassName?: string
  actionClassName?: string
}

interface TooltipActionProps {
  children: ReactNode
  className?: string
}

interface TooltipContentProps {
  children: ReactNode
  className?: string
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  direction = 'top',
  showOnClick = false,
  className = '',
  arrowColor = 'var(--primary)',
  arrowSize = 10,
  contentClassName = '',
  actionClassName = '',
  ...rest
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [tooltipPosition, setTooltipPosition] = useState<{ top: number; left: number } | null>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)
  const [actionElement, contentElement] = React.Children.toArray(children) as [
    React.ReactElement<TooltipActionProps>,
    React.ReactElement<TooltipContentProps>
  ]

  let showTimeout: NodeJS.Timeout | null = null
  let hideTimeout: NodeJS.Timeout | null = null

  const updateTooltipPosition = useCallback(() => {
    if (!tooltipRef.current || !triggerRef.current) return
    const rect = triggerRef.current.getBoundingClientRect()
    const tooltipRect = tooltipRef.current.getBoundingClientRect()
    const offset = 10 // Spacing between the tooltip and the element

    switch (direction) {
      case 'top':
        setTooltipPosition({
          top: rect.top - tooltipRect.height - offset + window.scrollY,
          left: rect.left + rect.width / 2 - tooltipRect.width / 2 + window.scrollX,
        })
        break
      case 'right':
        setTooltipPosition({
          top: rect.top + rect.height / 2 - tooltipRect.height / 2 + window.scrollY,
          left: rect.right + offset + window.scrollX,
        })
        break
      case 'bottom':
        setTooltipPosition({
          top: rect.bottom + offset + window.scrollY,
          left: rect.left + rect.width / 2 - tooltipRect.width / 2 + window.scrollX,
        })
        break
      case 'left':
        setTooltipPosition({
          top: rect.top + rect.height / 2 - tooltipRect.height / 2 + window.scrollY,
          left: rect.left - tooltipRect.width - offset + window.scrollX,
        })
        break
    }
  }, [direction])

  const showTooltip = () => {
    if (hideTimeout) {
      clearTimeout(hideTimeout)
    }
    showTimeout = setTimeout(() => {
      setIsVisible(true)
      setTooltipPosition(null) // Reset position to allow recalculation
    }, 100) // Add a small delay
  }

  const hideTooltip = () => {
    if (showTimeout) {
      clearTimeout(showTimeout)
    }
    hideTimeout = setTimeout(() => {
      setIsVisible(false)
    }, 100) // Add a small delay
  }

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      tooltipRef.current &&
      !tooltipRef.current.contains(event.target as Node) &&
      triggerRef.current &&
      !triggerRef.current.contains(event.target as Node)
    ) {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    if (isVisible && !tooltipPosition) {
      updateTooltipPosition()
    }

    if (isVisible) {
      document.addEventListener('scroll', updateTooltipPosition, true) // Capture scroll events
    }

    if (showOnClick) {
      document.addEventListener('click', handleOutsideClick)
    }

    return () => {
      document.removeEventListener('scroll', updateTooltipPosition, true)
      document.removeEventListener('click', handleOutsideClick)
      if (showTimeout) clearTimeout(showTimeout)
      if (hideTimeout) clearTimeout(hideTimeout)
    }
  }, [isVisible, tooltipPosition, showOnClick, hideTimeout, showTimeout, updateTooltipPosition])

  const getArrowStyle = (): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
      position: 'absolute',
      width: '0',
      height: '0',
      border: `${arrowSize}px solid transparent`
    }

    switch (direction) {
      case 'top':
        return { ...baseStyle, bottom: `-${arrowSize * 2}px`, left: '50%', transform: 'translateX(-50%)', borderTopColor: arrowColor }
      case 'right':
        return { ...baseStyle, left: `-${arrowSize * 2}px`, top: '50%', transform: 'translateY(-50%)', borderRightColor: arrowColor }
      case 'bottom':
        return {
          ...baseStyle, top: `-${arrowSize * 2}px`, left: '50%', transform: 'translateX(-50%)', borderBottomColor: arrowColor
        }
      case 'left':
        return {
          ...baseStyle, right: `-${arrowSize * 2}px`, top: '50%', transform: 'translateY(-50%)', borderLeftColor: arrowColor
        }
    }
  }
  // console.log(getArrowStyle())

  return (
    <div className={cn('relative inline-block', className)} {...rest}>
      <div
        ref={triggerRef}
        className={cn('', actionClassName)}
        onMouseEnter={showOnClick ? undefined : showTooltip}
        onMouseLeave={showOnClick ? undefined : hideTooltip}
        onClick={showOnClick ? showTooltip : undefined}
      >
        {actionElement}
      </div>
      {isVisible &&
        ReactDOM.createPortal(
          <div
            ref={tooltipRef}
            className={cn('absolute',
              // 'absolute rounded-md text-body2 w-max', reset ? "" : "bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200",
              contentClassName
            )}
            style={{
              top: tooltipPosition?.top ?? '-9999px',
              left: tooltipPosition?.left ?? '-9999px',
              position: 'absolute',
              visibility: tooltipPosition ? 'visible' : 'hidden',
            }}
          >
            {contentElement}
            <div style={getArrowStyle()}></div>
          </div>,
          document.body
        )}
    </div>
  )
}


const TooltipAction: React.FC<TooltipActionProps> = ({ children, className = '', ...rest }) => <div className={className} {...rest}>{children}</div>
const TooltipContent: React.FC<TooltipContentProps> = ({ children, className = '', ...rest }) => <div className={cn(
  'rounded-md px-2 py-1 text-body2 w-max bg-primary text-primary-foreground',
  className)} {...rest}>{children}</div>

export { Tooltip, TooltipAction, TooltipContent }
