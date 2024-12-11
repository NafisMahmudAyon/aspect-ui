import DocSidebar from '@/components/DocSidebar'
import RightSideBar from '@/components/RightSideBar'
import { ReactNode } from 'react'

const DocsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section>
      {/* <div className="sticky top-20 z-30 hidden h-4 w-full bg-primary-25 lg:block 2xl:h-20 dark:bg-[#0D1015]"></div> */}
      <div className="docs-page"></div>
      <div className="container relative z-20 grid grid-cols-12 gap-5 px-2 bg-primary-50 dark:bg-primary-950 mt-[70px] mx-auto">
        <DocSidebar />
        <div className="col-span-12 py-6 pt-6 2xl:pt-10 lg:col-span-9 xl:col-span-8 2xl:py-4 text-primary-900 dark:text-primary-200">
          <div id="linkPage" className="overflow-y-auto">
            {children}
          </div>
        </div>
        <RightSideBar />
      </div>
    </section>
  )
}

export default DocsLayout
