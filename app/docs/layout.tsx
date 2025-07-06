import Breadcrumb from '@/components/Breadcrumb'
import DocSidebar from '@/components/DocSidebar'
import Navbar from '@/components/Navigation'
import DynamicTableOfContent from '@/components/DynamicTableOfContent'
// import RightSideBar from '@/components/RightSideBar'
import TableOfContent from '@/components/TableOfContent'
import { AspectThemeProvider } from '@/components/ThemeProvider'
import TopProgressBar from '@/components/TopProgressBar'
import { ReactNode } from 'react'
import { TOCProvider } from '@/context/TOCContext'

const DocsLayout = ({ children }: { children: ReactNode }) => {
  return (

    <AspectThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <TOCProvider>
      <Navbar />
      <section>
        {/* <div className="sticky top-20 z-30 hidden h-4 w-full bg-primary-25 lg:block 2xl:h-20 dark:bg-[#0D1015]"></div> */}
        <div className="docs-page"></div>
        <div className="container mx-auto lg:hidden mt-[90px] w-full px-3">
          <Breadcrumb />
        </div>
        <div className="container relative z-20 grid grid-cols-12 lg:grid-cols-14 gap-5 lg:mt-[70px] mx-auto px-3 md:px-auto">
          <DocSidebar />
          <div className="col-span-12 py-6 pt-6 2xl:pt-10 lg:col-span-8 xl:col-span-10 2xl:py-4">
            <div id="linkPage" className="overflow-y-auto">
              {children}
            </div>
          </div>
          {/* <RightSideBar /> */}
          {/* <DynamicTableOfContent /> */}
          <TableOfContent />
        </div>
      </section>
      <TopProgressBar />
      </TOCProvider>
    </AspectThemeProvider>
  )
}

export default DocsLayout
