import { Button } from '@/app/src'

export default function ButtonSizes() {
  return (
    <div className='flex flex-wrap items-center gap-4'>
      <Button size='small'>Small</Button>
      <Button size='medium'>Medium</Button>
      <Button size='large'>Large</Button>
    </div>
  )
}
