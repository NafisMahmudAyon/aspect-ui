import { Alert, Skeleton } from '@/app/src'
import React from 'react'

const AlertExample = () => {
  return (
    <div className='space-y-3 w-full'>
      <Alert type="success" closeable={false}>
        <Skeleton variation='text' width='80%' className='bg-gray-400 dark:bg-gray-500' />
      </Alert>
      <Alert type="info" closeable={false}>
        <Skeleton variation='text' width='80%' className='bg-gray-400 dark:bg-gray-500' />
      </Alert>
      <Alert type="warning" closeable={false}>
        <Skeleton variation='text' width='80%' className='bg-gray-400 dark:bg-gray-500' />
      </Alert>
      <Alert type="error" closeable={false}>
        <Skeleton variation='text' width='80%' className='bg-gray-400 dark:bg-gray-500' />
      </Alert>
    </div>
  )
}

export default AlertExample