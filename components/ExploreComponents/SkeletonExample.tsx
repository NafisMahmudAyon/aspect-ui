import { Skeleton } from '@/app/src'

const SkeletonExample = () => {
  return (
    <div className='w-full space-y-2'>
      <Skeleton variation='text' width='80%' className='mb-2.5' />
      <Skeleton variation='text' width='70%' className='mb-2.5' />
      <Skeleton variation='text' width='60%' className='mb-2.5' />

      <Skeleton variation='circular' width={50} height={50} />
      <Skeleton variation='rectangular' width='100%' height={100} />
      <Skeleton variation='rounded-sm' width='60%' height={30} />
    </div>
  )
}

export default SkeletonExample