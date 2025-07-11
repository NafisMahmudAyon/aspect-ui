import Breadcrumb from '@/components/Breadcrumb'
import DocSidebar from '@/components/DocSidebar'
import DynamicTableOfContent from '@/components/DynamicTableOfContent'
import Navbar from '@/components/Navigation'
// import RightSideBar from '@/components/RightSideBar'
// import TableOfContent from '@/components/TableOfContent'
import { AspectThemeProvider } from '@/components/ThemeProvider'
import TopProgressBar from '@/components/TopProgressBar'
import { TOCProvider } from '@/context/TOCContext'
import { ReactNode } from 'react'

const DocsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <AspectThemeProvider
      attribute='class'
      defaultTheme='light'
      enableSystem
      disableTransitionOnChange
    >
      <TOCProvider>
        <Navbar />
        <section>
          {/* <div className="sticky top-20 z-30 hidden h-4 w-full bg-primary-25 lg:block 2xl:h-20 dark:bg-[#0D1015]"></div> */}
          <div className='docs-page'></div>
          <div className='container mx-auto mt-[90px] w-full px-3 lg:hidden'>
            <Breadcrumb />
          </div>
          <div className='md:px-auto relative z-20 container mx-auto grid grid-cols-12 gap-5 px-2 lg:mt-[70px] lg:grid-cols-14 xl:grid-cols-12'>
            <DocSidebar />
            <div className='col-span-12 py-6 pt-6 lg:col-span-8 2xl:py-4 2xl:pt-10'>
              <div id='linkPage' className='overflow-y-auto'>
                {children}
              </div>
            </div>
            {/* <RightSideBar /> */}
            {/* <TableOfContent /> */}
            <DynamicTableOfContent />
          </div>
        </section>
        <TopProgressBar />
      </TOCProvider>
    </AspectThemeProvider>
  )
}

export default DocsLayout
