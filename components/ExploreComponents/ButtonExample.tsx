import { Button, Skeleton } from '@/app/src'
import { CircleChevronRight } from 'lucide-react'

const ButtonExample = () => {
  return (
    <div className='w-full flex gap-3 justify-center'>
      <Button className='min-w-[120px]'>
        <Skeleton variation='text' width='80%' className='bg-gray-400 dark:bg-gray-500 w-4/5' />
      </Button>
      <Button className='min-w-[120px]' icon={<CircleChevronRight />} iconPosition='right'>
        <Skeleton variation='text' width='80%' className='bg-gray-400 dark:bg-gray-500 w-4/5' />
      </Button>
    </div>
  )
}

export default ButtonExample