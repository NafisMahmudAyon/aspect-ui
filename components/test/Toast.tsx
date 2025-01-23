'use client'
import React from 'react'
import { useToast } from '@/app/src/components/Toast'

const ToastDemo: React.FC = () => {
  const { addToast, ToastContainer, promise } = useToast()

  const handleClick = () => {
    addToast({
      className: "",
      message: 'This is a toast with an action',
      messageClassName: "",
      type: 'info',
      action: {
        label: 'Undo',
        onClick: () => console.log('Undo clicked'),
        buttonClassName: ""
      }
    })
  }

  const handlePromise = () => {
    promise(new Promise(resolve => setTimeout(resolve, 2000)), {
      loading: 'Loading...',
      success: 'Operation successful!',
      error: 'An error occurred'
    })
  }

  const showToast = (type: 'success' | 'error' | 'info' | 'warning') => {
    addToast({
      message: `This is a ${type} toast message!`,
      type,
      duration: 3000
    })
  }

  const handleClicks = () => {
    addToast({
      message: 'File uploaded',
      description: 'Your file has been successfully uploaded to the server.',
      type: 'success',
      action: {
        label: 'View',
        onClick: () => console.log('View clicked')
      }
    })
  }

  const handlePromises = () => {
    promise(new Promise(resolve => setTimeout(resolve, 2000)), {
      loading: 'Uploading file',
      loadingDescription: 'Please wait while we upload your file...',
      success: 'File uploaded',
      successDescription:
        'Your file has been successfully uploaded to the server.',
      error: 'Upload failed',
      errorDescription:
        'An error occurred while uploading your file. Please try again.'
    })
  }

  return (
    <div className='p-4'>
      <h1 className='mb-4 text-2xl font-bold'>Toast Example</h1>
      <div className='space-x-2'>
        <button
          onClick={() => showToast('success')}
          className='rounded-sm bg-green-500 px-4 py-2 text-white'
        >
          Show Success Toast
        </button>
        <button
          onClick={() => showToast('error')}
          className='rounded-sm bg-red-500 px-4 py-2 text-white'
        >
          Show Error Toast
        </button>
        <button
          onClick={() => showToast('info')}
          className='rounded-sm bg-blue-500 px-4 py-2 text-white'
        >
          Show Info Toast
        </button>
        <button
          onClick={() => showToast('warning')}
          className='rounded-sm bg-yellow-500 px-4 py-2 text-white'
        >
          Show Warning Toast
        </button>
      </div>
      <button onClick={handleClick}>Show Toast with Action</button>
      <button onClick={handlePromise}>Start Promise</button>

      <button onClick={handleClicks}>Show Toast with Description</button>
      <button onClick={handlePromises}>Start Promise with Description</button>
      <ToastContainer />
    </div>
  )
}

export default ToastDemo
