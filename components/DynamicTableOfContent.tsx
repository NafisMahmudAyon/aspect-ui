'use client'
import { useTOC } from '@/context/TOCContext'

export default function DynamicTableOfContent() {
  const { toc } = useTOC()

  if (toc.length === 0) return null

  return (
    <div className="hidden lg:col-span-3 lg:block xl:col-span-2">
      <aside id="linkPage" className="sticky top-28 h-[80vh] 2xl:top-60">
        <div className="2xl:pl-5">
          <div className="flex flex-col justify-between overflow-y-auto">
            <h4 className="mb-2 text-body-4 font-semibold uppercase text-primary-900 dark:text-primary-200">On this page</h4>
            <nav id="visible-table-of-contents">
              <ul className="border-l border-l-primary-200 dark:border-l-primary-800">
                {toc.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} data-disable-nprogress="true">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </aside>
    </div>
  )
}
