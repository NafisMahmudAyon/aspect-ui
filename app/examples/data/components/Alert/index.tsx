'use client'
import { Alert } from '@/app/src'
import React, { useEffect, useState } from 'react'

// https://localhost:3000/examples/data/components/alert/default-alert
export const DefaultAlert = () => {
  const [visible, setVisible] = useState(true)

  const handleClose = () => {
    setVisible(false)
  }

  useEffect(() => {
    if (!visible) {
      const timer = setTimeout(() => {
        setVisible(true)
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [visible])

  return (
    <>
      {visible && (
        <Alert type='success' onClose={handleClose}>
          Operation completed successfully!
        </Alert>
      )}
    </>
  )
}

// https://localhost:3000/examples/data/components/alert/multiple-type-alert
export const MultipleTypeAlert = () => {
  return (
    <div className='space-y-3'>
      <Alert type='success' closeable={false}>
        Operation completed successfully!
      </Alert>
      <Alert type='info' closeable={false}>
        This is an informational message for your reference.
      </Alert>
      <Alert type='warning' closeable={false}>
        Warning: This action requires your attention!
      </Alert>
      <Alert type='error' closeable={false}>
        Error: Operation failed! Please try again.
      </Alert>
    </div>
  )
}
