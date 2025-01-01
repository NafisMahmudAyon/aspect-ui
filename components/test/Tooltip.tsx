import { Button } from '@/app/src'
import {
  Tooltip,
  TooltipAction,
  TooltipContent
} from '@/app/src/components/Tooltip/Tooltip'
import React from 'react'

const TooltipDemo = () => {
  return (
    <div>
      <h1 className='mb-4 text-2xl font-bold'>Tooltip Example</h1>
      <div className='space-x-4'>
        <Tooltip direction='right' showOnClick>
          <TooltipAction>Right</TooltipAction>
          <TooltipContent>
            <p className='text-body1 font-medium'>
              Tooltips - Title here
            </p>
          </TooltipContent>
        </Tooltip>
        <Tooltip direction='top'>
          <TooltipAction>Top</TooltipAction>
          <TooltipContent>
            <p className='text-body-5 font-medium text-black'>
              Tooltips - Title here
            </p>
          </TooltipContent>
        </Tooltip>
        <Tooltip direction='bottom'>
          <TooltipAction>Bottom</TooltipAction>
          <TooltipContent>
            <p className='text-body-5 font-medium text-black'>
              Tooltips - Title here
            </p>
          </TooltipContent>
        </Tooltip>
        <Tooltip direction='left'>
          <TooltipAction>Left</TooltipAction>
          <TooltipContent>
            <p className='text-body-5 font-medium text-black'>
              Tooltips - Title here
            </p>
          </TooltipContent>
        </Tooltip>
      </div>
      <Tooltip direction="left" showOnClick={true} arrowSize={10} arrowColor="#a9cdcf">
        <TooltipAction>
          <Button className="handle bg-primary-200 hover:bg-primary-200 dark:bg-primary-200 dark:hover:bg-primary-200 px-10 py-1 text-primary-900 dark:text-primary-900 hover:text-primary-900 dark:hover:text-primary-900 rounded-md cursor-move">
            aa
          </Button>
        </TooltipAction>
        <TooltipContent>
          <p
            className="text-body1 !text-[11px]"
            aria-label="Drag to reorder">
            Drag to reorder
          </p>
        </TooltipContent>
      </Tooltip>
    </div>
  )
}

export default TooltipDemo
