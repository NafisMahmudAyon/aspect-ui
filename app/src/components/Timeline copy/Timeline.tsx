import React, { ReactNode } from 'react'

export interface TimelineItemProps {
  date: string
  title: string
  description: ReactNode
  icon?: ReactNode
}

interface TimelineProps {
  items: TimelineItemProps[]
  position: 'left' | 'right'
  lineStyle?: 'solid' | 'dashed' | string
}

const TimelineItem: React.FC<
  TimelineItemProps & { position: 'left' | 'right' }
> = ({ date, title, description, icon, position }) => {
  return (
    <div
      className={`flex ${position === 'right' ? '' : 'flex-row-reverse'} mb-8 items-start`}
    >
      <div
        className={`flex-1 ${position == 'left' ? 'text-start' : 'text-end'} ${position === 'right' ? 'pr-4' : 'pl-4'}`}
      >
        <div className='text-sm text-gray-500'>{date}</div>
        <h3 className='text-lg font-semibold'>{title}</h3>
        <div className='mt-2'>{description}</div>
      </div>
      <div className='z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500'>
        {icon || <div className='h-3 w-3 rounded-full bg-white' />}
      </div>
    </div>
  )
}

export const Timeline: React.FC<TimelineProps> = ({
  items,
  position,
  lineStyle = 'solid'
}) => {
  const lineClasses = `absolute ${position === 'left' ? 'left-4' : 'right-4'} top-0 w-px h-full ${
    lineStyle === 'dashed'
      ? 'border-l-2 border-dashed border-gray-300'
      : 'bg-gray-300'
  }`

  return (
    <div className='relative'>
      <div
        className={lineClasses}
        style={
          lineStyle !== 'solid' && lineStyle !== 'dashed'
            ? { borderLeft: lineStyle }
            : {}
        }
      ></div>
      {items.map((item, index) => (
        <TimelineItem key={index} {...item} position={position} />
      ))}
    </div>
  )
}
