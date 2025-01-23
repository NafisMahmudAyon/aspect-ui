'use client'
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../../utils/cn';

type Position = 'top' | 'bottom' | 'left' | 'right';

interface PopoverProps {
  children?: React.ReactNode;
  content: React.ReactNode;
  position?: Position;
  className?: string;
  onHover?: boolean;
  showCloseButton?: boolean;
  offset?: number;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  forceDirection?: boolean; // If true, won't auto-flip
  contentClassName?: string;
  closeButtonClassName?: string;
}

const spacing = 10; // Minimum spacing from viewport edges

export const Popover = ({
  children,
  content,
  position = 'bottom',
  className = '',
  onHover = false,
  showCloseButton = false,
  offset = 8,
  isOpen: controlledIsOpen,
  onOpenChange,
  forceDirection = false,
  contentClassName = '',
  closeButtonClassName = '',
}: PopoverProps) => {
  const [uncontrolledIsOpen, setUncontrolledIsOpen] = useState(false);
  const [popoverStyles, setPopoverStyles] = useState({
    top: 0,
    left: 0,
  });
  const [currentPosition, setCurrentPosition] = useState(position);

  const triggerRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const isControlled = controlledIsOpen !== undefined;
  const isOpen = isControlled ? controlledIsOpen : uncontrolledIsOpen;

  const handleOpenChange = (newIsOpen: boolean) => {
    if (isControlled) {
      onOpenChange?.(newIsOpen);
    } else {
      setUncontrolledIsOpen(newIsOpen);
    }
  };

  // const getOppositePosition = (pos: Position): Position => {
  //   const opposites: Record<Position, Position> = {
  //     top: 'bottom',
  //     bottom: 'top',
  //     left: 'right',
  //     right: 'left',
  //   };
  //   return opposites[pos];
  // };

  const updatePosition = useCallback(() => {
    if (isOpen && triggerRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const popoverRect = popoverRef.current?.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;

      if (!popoverRect) return;

      // Check if we need to flip the position
      let finalPosition = position;
      if (!forceDirection) {
        switch (position) {
          case 'bottom':
            if (triggerRect.bottom + popoverRect.height + offset > viewportHeight - spacing) {
              if (triggerRect.top - popoverRect.height - offset > spacing) {
                finalPosition = 'top';
              }
            }
            break;
          case 'top':
            if (triggerRect.top - popoverRect.height - offset < spacing) {
              if (triggerRect.bottom + popoverRect.height + offset < viewportHeight - spacing) {
                finalPosition = 'bottom';
              }
            }
            break;
          case 'right':
            if (triggerRect.right + popoverRect.width + offset > viewportWidth - spacing) {
              if (triggerRect.left - popoverRect.width - offset > spacing) {
                finalPosition = 'left';
              }
            }
            break;
          case 'left':
            if (triggerRect.left - popoverRect.width - offset < spacing) {
              if (triggerRect.right + popoverRect.width + offset < viewportWidth - spacing) {
                finalPosition = 'right';
              }
            }
            break;
        }
      }

      setCurrentPosition(finalPosition);

      let top = 0;
      let left = 0;

      // Calculate position based on final direction
      switch (finalPosition) {
        case 'top':
          top = triggerRect.top - popoverRect.height - offset;
          left = triggerRect.left + triggerRect.width / 2;
          break;
        case 'bottom':
          top = triggerRect.bottom + offset;
          left = triggerRect.left + triggerRect.width / 2;
          break;
        case 'left':
          top = triggerRect.top + triggerRect.height / 2;
          left = triggerRect.left - popoverRect.width - offset;
          break;
        case 'right':
          top = triggerRect.top + triggerRect.height / 2;
          left = triggerRect.right + offset;
          break;
      }

      // Adjust for viewport boundaries
      if (left + popoverRect.width > viewportWidth) {
        left = viewportWidth - popoverRect.width - spacing;
      }
      if (left < spacing) {
        left = spacing;
      }
      if (top + popoverRect.height > viewportHeight) {
        top = viewportHeight - popoverRect.height - spacing;
      }
      if (top < spacing) {
        top = spacing;
      }

      setPopoverStyles({ top, left });
    }
  }, [isOpen, position, forceDirection, offset]);

  useEffect(() => {
    if (isOpen) {
      // Initial position update
      updatePosition();
      // Secondary update after a short delay to ensure content is rendered
      const timeoutId = setTimeout(updatePosition, 0);
      return () => clearTimeout(timeoutId);
    }
  }, [isOpen, content, updatePosition]);

  useEffect(() => {
    if (isOpen) {
      const handleUpdate = () => {
        requestAnimationFrame(updatePosition);
      };

      window.addEventListener('scroll', handleUpdate, true);
      window.addEventListener('resize', handleUpdate);

      return () => {
        window.removeEventListener('scroll', handleUpdate, true);
        window.removeEventListener('resize', handleUpdate);
      };
    }
  }, [isOpen, updatePosition]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !onHover &&
        !triggerRef.current?.contains(event.target as Node) &&
        !popoverRef.current?.contains(event.target as Node)
      ) {
        handleOpenChange(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onHover]);

  const getPopoverStyles = (): string => {
    const baseStyles = 'fixed bg-white rounded-lg shadow-lg border border-gray-200';

    const positionStyles = {
      top: '-translate-x-1/2',
      bottom: '-translate-x-1/2',
      left: '-translate-y-1/2',
      right: '-translate-y-1/2',
    };

    return `${baseStyles} ${positionStyles[currentPosition]} ${className}`;
  };

  const handleTrigger = () => {
    if (!onHover) {
      handleOpenChange(!isOpen);
    }
  };

  const handleMouseEnter = () => {
    if (onHover) {
      handleOpenChange(true);
    }
  };

  const handleMouseLeave = () => {
    if (onHover) {
      handleOpenChange(false);
    }
  };

  console.log(getPopoverStyles(), popoverStyles)

  return (
    <>
      <div
        className={cn("relative inline-block", className)}
        ref={triggerRef}
        onClick={handleTrigger}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
      {isOpen &&
        createPortal(
          <div
            ref={popoverRef}
            className={cn(getPopoverStyles(), contentClassName)}
            style={{
              ...popoverStyles,
              zIndex: 9999,
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {showCloseButton && (
              <button
                onClick={() => handleOpenChange(false)}
                className={cn("absolute top-2 right-2 text-gray-500 hover:text-gray-700", closeButtonClassName)}
              >
                &times;
              </button>
            )}
            {content}
          </div>,
          document.body
        )}
    </>
  );
};
