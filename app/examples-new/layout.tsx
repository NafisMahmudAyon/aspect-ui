import React from 'react'
import './example.css'
import { AspectThemeProvider } from '@/components/ThemeProvider'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body className={`font-sans`} suppressHydrationWarning={true}>
        <AspectThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </AspectThemeProvider>
      </body>
    </html>
  )
}

export default layout
