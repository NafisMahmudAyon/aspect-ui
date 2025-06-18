import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import { UserContextProvider } from '@/context/UserContext'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true} className={`bg-primary-50 dark:bg-primary-950 font-sans scrollbar-thin`}>
        <ClerkProvider>
          <UserContextProvider>
            {children}
          </UserContextProvider>
        </ClerkProvider>
      </body>
    </html>
  )
}
