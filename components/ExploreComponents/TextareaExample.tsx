import { Textarea } from '@/app/src'

const TextareaExample = () => {
  return (
    <div className='w-full'>
      <Textarea
        label='Comments'
        placeholder='Enter your comments here'
        rows={4}
      />
    </div>
  )
}

export default TextareaExample