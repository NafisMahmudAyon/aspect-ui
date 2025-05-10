import { Divider } from '@/app/src'

const DividerExample = () => {
  return (
    <div className='w-full'>
      <Divider variant='start'>Left Align</Divider>
      <Divider variant='center'>Center Align</Divider>
      <Divider variant='end'>Right Align</Divider>
    </div>
  )
}

export default DividerExample