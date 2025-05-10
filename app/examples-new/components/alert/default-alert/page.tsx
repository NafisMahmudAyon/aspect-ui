'use client'
import { useEffect, useState } from 'react'
import { Alert } from '@/app/src'

const Page = () => {
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
        <Alert type="success" onClose={handleClose}>
          Operation completed successfully!
        </Alert>
      )}
    </>
  )
}

export default Page
