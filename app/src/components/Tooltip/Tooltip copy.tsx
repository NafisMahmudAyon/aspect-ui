'use client'
import React, { ReactNode, useState } from 'react'
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
}

interface TooltipContentProps {
  children: ReactNode
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  direction = 'top',
  showOnClick = false,
  className = '',
  arrowColor = '#847ef3',
  arrowSize = 10,
  contentClassName = '',
  actionClassName = '',
  ...rest
}) => {
  const [isVisible, setIsVisible] = useState(false)

  const showTooltip = () => setIsVisible(true)
  const hideTooltip = () => setIsVisible(false)

  const handleClick = () => {
    if (showOnClick) {
      setIsVisible(!isVisible)
    }
  }

  const getTooltipStyle = (): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
      position: 'absolute',
      zIndex: 10,
    }

    switch (direction) {
      case 'top':
        return {
          ...baseStyle,
          bottom: 'calc(100% + 10px)',
          left: '50%',
          transform: 'translateX(-50%)'
        }
      case 'right':
        return {
          ...baseStyle,
          left: 'calc(100% + 10px)',
          top: '50%',
          transform: 'translateY(-50%)'
        }
      case 'bottom':
        return {
          ...baseStyle,
          top: 'calc(100% + 10px)',
          left: '50%',
          transform: 'translateX(-50%)'
        }
      case 'left':
        return {
          ...baseStyle,
          right: 'calc(100% + 10px)',
          top: '50%',
          transform: 'translateY(-50%)'
        }
    }
  }

  const getArrowStyle = (): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
      position: 'absolute',
      width: '0',
      height: '0',
      border: '5px solid transparent'
    }

    switch (direction) {
      case 'top':
        return {
          ...baseStyle,
          bottom: '-10px',
          left: '50%',
          transform: 'translateX(-50%)',
          borderTopColor: arrowColor
        }
      case 'right':
        return {
          ...baseStyle,
          left: '-10px',
          top: '50%',
          transform: 'translateY(-50%)',
          borderRightColor: arrowColor
        }
      case 'bottom':
        return {
          ...baseStyle,
          top: '-10px',
          left: '50%',
          transform: 'translateX(-50%)',
          borderBottomColor: arrowColor
        }
      case 'left':
        return {
          ...baseStyle,
          right: '-10px',
          top: '50%',
          transform: 'translateY(-50%)',
          borderLeftColor: arrowColor
        }
    }
  }

  const [actionElement, contentElement] = React.Children.toArray(children) as [
    React.ReactElement<TooltipActionProps>,
    React.ReactElement<TooltipContentProps>
  ]

  return (
    <div className={cn('relative inline-block', className)} {...rest}>
      <div className={cn('', actionClassName)}
        onMouseEnter={showOnClick ? undefined : showTooltip}
        onMouseLeave={showOnClick ? undefined : hideTooltip}
        onClick={handleClick}
      >
        {actionElement}
      </div>
      {isVisible && (
        <div className={cn('bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-2 py-1 rounded-md text-body2 w-max', contentClassName)} style={getTooltipStyle()}>
          {contentElement}
          <div style={getArrowStyle()}></div>
          {/* <div className={cn("absolute size-0 border-[5px] border-solid border-transparent", direction === 'top' && "bottom-[-10px] left-1/2 -translate-x-1/2 ", ``)}></div> */}
        </div>
      )}
    </div>
  )
}

const TooltipAction: React.FC<TooltipActionProps> = ({ children }) => {
  return <>{children}</>
}

const TooltipContent: React.FC<TooltipContentProps> = ({ children }) => {
  return <>{children}</>
}

export { Tooltip, TooltipAction, TooltipContent }
