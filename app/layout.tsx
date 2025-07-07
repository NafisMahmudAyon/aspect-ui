import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import { UserContextProvider } from '@/context/UserContext'
import { Montserrat } from 'next/font/google'
import { SidebarProvider } from './src'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat'
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning={true}>
      <body
        suppressHydrationWarning={true}
        className={`text-text-muted scrollbar-thin font-sans ${montserrat.className}`}
      >
        <ClerkProvider>
          <UserContextProvider>
            <SidebarProvider>{children}</SidebarProvider>
          </UserContextProvider>
        </ClerkProvider>
      </body>
    </html>
  )
}
