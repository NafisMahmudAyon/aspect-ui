'use client'
import { gettingStartedRoutes, routes, templatesRoutes, variationsRoutes } from '@/routes/routes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
// import { Accordion
//   // AccordionContainer, AccordionContent, AccordionPanel, AccordionTitle 
// } from ''
import { Accordion, AccordionContent, AccordionHeader, AccordionItem } from '@/app/src'
import { cn } from '@/app/src/utils/cn'

const DocSidebar = () => {
  const pathname = usePathname()

  const IsActive = (str: string) => {
    const lastPart = pathname.toLowerCase().split('/').pop()
    const strPart = str.toLowerCase().split('/').pop()
    return strPart === lastPart
  }
  var activeItem: string[] = []
  if (pathname.includes('docs')) {
    activeItem = ['item-1', 'item-3']
  } else if (pathname.includes('variations')) {
    activeItem = ['item-4']
  } else if (pathname.includes('template')) {
    activeItem = ['item-5']
  }
  return (
    <div className="h-[calc(100vh-100px)] overflow-auto sticky top-[80px]  hidden lg:col-span-3 lg:block xl:col-span-2 light-scrollbar pr-2">
      <aside
        id="componentListSidebar"
        className=" space-y-5 2xl:py-6 2xl:pl-8">
        <Accordion multiple={true} activeItem={activeItem ?? ['item-1']}>
          {/* <AccordionPanel className="border-b-0!"> */}
          <AccordionItem id="item-1" className="p-0 border-none mb-3">
            <AccordionHeader className="text-body1 font-semibold text-primary-900 dark:text-primary-100 bg-transparent dark:bg-transparent px-0 py-2 hover:bg-transparent dark:hover:bg-transparent">
              Getting Started
            </AccordionHeader>
            <AccordionContent className=" border-t-0 p-0 bg-transparent dark:bg-transparent">
              <ul className="mt-3 space-y-1.5 border-l border-l-primary-100 dark:border-l-primary-800">
                {gettingStartedRoutes.map((route) => (
                  <li key={route.id}>
                    <Link
                      className={cn("-ml-px border-l border-l-transparent pl-3 text-body-4 font-medium text-primary-700 hover:-ml-px hover:border-l hover:border-primary-500 hover:text-primary-800 dark:text-primary-400 dark:hover:border-white dark:hover:text-primary-200", IsActive(route.href)
                        ? 'border-l border-primary-500! text-primary-800 transition-colors duration-150 hover:text-primary-800 dark:border-white! dark:text-primary-200 dark:hover:text-primary-200'
                        : ''
                      )}
                      href={route.href}>
                      {route.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          {/* </AccordionPanel> */}
          {/* <AccordionItem id="item-2" className="p-0 border-none mb-3">
            <AccordionHeader className="text-body1 font-semibold text-primary-900 dark:text-primary-100 bg-transparent dark:bg-transparent px-0 py-2 hover:bg-transparent dark:hover:bg-transparent">
              Layout
            </AccordionHeader>
            <AccordionContent className="border-t-0 p-0 bg-transparent dark:bg-transparent">
              <ul className="mt-3 space-y-1.5 border-l border-l-primary-100 dark:border-l-primary-800">
                {layoutRoutes.map((route) => (
                  <li key={route.id}>
                    <Link
                      className={cn("-ml-px border-l border-l-transparent pl-3 text-body-4 font-medium text-primary-700 hover:-ml-px hover:border-l hover:border-primary-500 hover:text-primary-800 dark:text-primary-400 dark:hover:border-white dark:hover:text-primary-200", IsActive(route.href)
                        ? 'border-l border-primary-500! text-primary-800 transition-colors duration-150 hover:text-primary-800 dark:border-white! dark:text-primary-200 dark:hover:text-primary-200'
                        : ''
                      )}
                      href={route.href}>
                      {route.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem> */}
          <AccordionItem id="item-3" className="p-0 border-none mb-3">
            <AccordionHeader className="text-body1 font-semibold text-primary-900 dark:text-primary-100 bg-transparent dark:bg-transparent px-0 py-2 hover:bg-transparent dark:hover:bg-transparent">
              Components
            </AccordionHeader>
            <AccordionContent className="border-t-0 p-0 bg-transparent dark:bg-transparent">
              <ul className="mt-3 space-y-1.5 border-l border-l-primary-100 dark:border-l-primary-800">
                {routes.map((route) => (
                  <li key={route.id}>
                    <Link
                      className={cn("-ml-px border-l border-l-transparent pl-3 text-body-4 font-medium text-primary-700 hover:-ml-px hover:border-l hover:border-primary-500 hover:text-primary-800 dark:text-primary-400 dark:hover:border-white dark:hover:text-primary-200", IsActive(route.href)
                        ? 'border-l border-primary-500! text-primary-800 transition-colors duration-150 hover:text-primary-800 dark:border-white! dark:text-primary-200 dark:hover:text-primary-200'
                        : ''
                      )}
                      href={route.href}>
                      {route.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem id="item-4" className="p-0 border-none mb-3">
            <AccordionHeader className="text-body1 font-semibold text-primary-900 dark:text-primary-100 bg-transparent dark:bg-transparent px-0 py-2 hover:bg-transparent dark:hover:bg-transparent">
              Variations
            </AccordionHeader>
            <AccordionContent className="border-t-0 p-0 bg-transparent dark:bg-transparent">
              <ul className="mt-3 space-y-1.5 border-l border-l-primary-100 dark:border-l-primary-800">
                {variationsRoutes.map((route) => (
                  <li key={route.id}>
                    <Link
                      className={cn("-ml-px border-l border-l-transparent pl-3 text-body-4 font-medium text-primary-700 hover:-ml-px hover:border-l hover:border-primary-500 hover:text-primary-800 dark:text-primary-400 dark:hover:border-white dark:hover:text-primary-200", IsActive(route.href)
                        ? 'border-l border-primary-500! text-primary-800 transition-colors duration-150 hover:text-primary-800 dark:border-white! dark:text-primary-200 dark:hover:text-primary-200'
                        : ''
                      )}
                      href={route.href}>
                      {route.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem id="item-5" className="p-0 border-none mb-3">
            <AccordionHeader className="text-body1 font-semibold text-primary-900 dark:text-primary-100 bg-transparent dark:bg-transparent px-0 py-2 hover:bg-transparent dark:hover:bg-transparent">
              Templates
            </AccordionHeader>
            <AccordionContent className="border-t-0 p-0 bg-transparent dark:bg-transparent">
              <ul className="mt-3 space-y-1.5 border-l border-l-primary-100 dark:border-l-primary-800">
                {templatesRoutes.map((route) => (
                  <li key={route.id}>
                    <Link
                      className={cn("-ml-px border-l border-l-transparent pl-3 text-body-4 font-medium text-primary-700 hover:-ml-px hover:border-l hover:border-primary-500 hover:text-primary-800 dark:text-primary-400 dark:hover:border-white dark:hover:text-primary-200", IsActive(route.href)
                        ? 'border-l border-primary-500! text-primary-800 transition-colors duration-150 hover:text-primary-800 dark:border-white! dark:text-primary-200 dark:hover:text-primary-200'
                        : ''
                      )}
                      href={route.href}>
                      {route.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </aside>
    </div>
  )
}

export default DocSidebar
