import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';
import { UserContextProvider } from '@/context/UserContext';
import { Montserrat } from 'next/font/google';
import { SidebarProvider } from './src';
import RouteProgress from '@/components/RouteProgress';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="6Nf-bb3_ExXyV1qd2_tYr2BUJr5S5Wum-aY-8jnzSvI" />
        </head>
      <body className={`text-text-muted scrollbar-thin font-sans ${montserrat.className}`} suppressHydrationWarning>
        <RouteProgress /> {/* Place early for better timing */}
        <ClerkProvider>
          <UserContextProvider>
            <SidebarProvider>{children}</SidebarProvider>
          </UserContextProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
