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
          <Alert type="success" onClose={handleClose}>
            Operation completed successfully!
          </Alert>
        )}
      </>
    )
  }