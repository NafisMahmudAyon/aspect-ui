import { Button } from '@/app/src'
import { PlusIcon, ArrowRightIcon } from 'lucide-react'

export default function IconButtons() {
  return (
    <div className='flex flex-wrap gap-4'>
      <Button icon={<PlusIcon className='h-4 w-4' />}>Add New</Button>
      <Button
        icon={<ArrowRightIcon className='h-4 w-4' />}
        iconPosition='right'
      >
        Next
      </Button>
      <Button variant='outline' icon={<PlusIcon className='h-4 w-4' />} />
    </div>
  )
}
