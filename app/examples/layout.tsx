import { AspectThemeProvider } from '@/components/ThemeProvider'
import React from 'react'
import './example.css'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (

    <AspectThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>{children}</AspectThemeProvider>
  )
}

export default layout