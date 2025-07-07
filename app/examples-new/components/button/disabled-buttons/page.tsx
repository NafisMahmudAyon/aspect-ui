import { Button } from '@/app/src'

export default function DisabledButtons() {
  return (
    <div className='flex flex-wrap gap-4'>
      <Button disabled>Disabled</Button>
      <Button variant='outline' disabled>
        Disabled Outline
      </Button>
    </div>
  )
}
