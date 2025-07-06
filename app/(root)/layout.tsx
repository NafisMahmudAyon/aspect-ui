
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import Navbar from '@/components/Navigation'
import { AspectThemeProvider } from '@/components/ThemeProvider'
// import '../globals.css'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aspect UI',
  description: 'Aspect UI is a React component library that provides a set of pre-built components for building modern, responsive, and accessible user interfaces.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (

    <AspectThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <div className={`font-sans`}>
        <Navbar />
        {children}
        </div>
    </AspectThemeProvider>
  )
}
