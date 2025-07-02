// components/Timeline/Timeline.tsx
import React from 'react';
import { cn } from '../../utils/cn';
import { TimelineItem } from './TimelineItem';

type TimelineProps = {
  children: React.ReactNode;
  position?: 'left' | 'right' | 'mixed';
  className?: string;
  lineClassName?: string;
  lineStyle?: 'solid' | 'dashed';
};

export const Timeline: React.FC<TimelineProps> = ({
  children,
  position = 'left',
  lineStyle = 'solid',
  className,
  lineClassName,
  ...rest
}) => {
  const isMixed = position === 'mixed';
  return (
    <div className={cn("relative", isMixed ? 'mx-auto max-w-3xl' : 'w-full', className)} {...rest}>
      <div className={cn("absolute h-full border border-border", position === 'mixed' ? "left-1/2 -translate-x-1/2" : position === 'left' ? "right-0" : "", lineStyle === 'dashed' ? 'border-dashed' : '', lineClassName)}></div>
      <div className="relative">
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement<React.ComponentProps<typeof TimelineItem>>(child) && child.type === TimelineItem) {
            return React.cloneElement(child, {
              position: isMixed ? (index % 2 === 0 ? 'left' : 'right') : position,
              isMixed: isMixed
            });
          }
          return child;
        })}
      </div>
    </div>
  );
};
