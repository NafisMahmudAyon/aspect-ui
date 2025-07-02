import { Tooltip, TooltipAction, TooltipContent } from '@/app/src'

const TooltipExample = () => {
  return (
    <div className='grid grid-cols-2 place-items-center gap-3 gap-y-10'>
      <Tooltip defaultOpen={true} open={true}>
        <TooltipAction outline={true}>Left</TooltipAction>
        <TooltipContent side='left'>
          <p className=''>
            Tooltips
          </p>
        </TooltipContent>
      </Tooltip>
      <Tooltip defaultOpen={true} open={true}>
        <TooltipAction outline={true}>Top</TooltipAction>
        <TooltipContent side='top'>
          <p className=''>
            Tooltips
          </p>
        </TooltipContent>
      </Tooltip>
      <Tooltip defaultOpen={true} open={true}>
        <TooltipAction outline={true}>Bottom</TooltipAction>
        <TooltipContent side='bottom'>
          <p className=''>
            Tooltips
          </p>
        </TooltipContent>
      </Tooltip>
      <Tooltip defaultOpen={true} open={true}>
        <TooltipAction outline={true}>Right</TooltipAction>
        <TooltipContent side='right' className=''>
          <p className=''>
            Tooltips
          </p>
        </TooltipContent>
      </Tooltip>
    </div>
  )
}

export default TooltipExample