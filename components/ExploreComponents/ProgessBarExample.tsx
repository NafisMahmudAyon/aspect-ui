import { ProgressBar } from '@/app/src/components/ProgressBar'

const ProgessBarExample = () => {
  return (
    <div className='w-full'>
      <ProgressBar
        value={85}
        animateOnVisible
        duration={3}
        className=''
        containerClassName=''
        fillClassName=''
        contentClassName=''
      />
    </div>
  )
}

export default ProgessBarExample