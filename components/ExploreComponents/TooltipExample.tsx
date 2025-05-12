'use client'
import { Tooltip, TooltipAction, TooltipContent } from '@/app/src'
import { useTheme } from 'next-themes'
import React from 'react'

const TooltipExample = () => {
    const { theme } = useTheme()
  const arrowColor = theme === 'dark' ? '#2c5c60' : '#65a3a9'
  return (
    <div className='grid grid-cols-2 place-items-center gap-3 gap-y-10'>
        <Tooltip direction='left' showOnClick showOnLoad={true} arrowColor={arrowColor} closeOnClickOutside={false}>
          <TooltipAction>Left</TooltipAction>
          <TooltipContent>
            <p className=''>
              Tooltips - Title here
            </p>
          </TooltipContent>
        </Tooltip>
      <Tooltip direction='top' showOnClick showOnLoad={true} arrowColor={arrowColor} closeOnClickOutside={false}>
          <TooltipAction>Top</TooltipAction>
          <TooltipContent>
            <p className=''>
              Tooltips - Title here
            </p>
          </TooltipContent>
        </Tooltip>
        <Tooltip direction='bottom' showOnClick showOnLoad={true} arrowColor={arrowColor} closeOnClickOutside={false}>
          <TooltipAction>Bottom</TooltipAction>
          <TooltipContent>
            <p className=''>
              Tooltips - Title here
            </p>
          </TooltipContent>
        </Tooltip>
      <Tooltip direction='right' showOnClick showOnLoad={true} arrowColor={arrowColor} closeOnClickOutside={false}>
        <TooltipAction>Right</TooltipAction>
        <TooltipContent className=''>
          <p className=''>
            Tooltips - Title here
          </p>
        </TooltipContent>
      </Tooltip>
    </div>
  )
}

export default TooltipExample