'use client'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'

const TopProgressBar = () => {
  return (
    
      <ProgressBar height="2px" color="#1C222B" options={{ showSpinner: false }} shallowRouting />
  )
}

export default TopProgressBar