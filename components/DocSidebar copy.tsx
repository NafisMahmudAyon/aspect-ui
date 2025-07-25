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
  const firstPart = pathname.toLowerCase().split('/')[1] ?? ""
  const secondPart = pathname.toLowerCase().split('/')[2] ?? ""
  var activeItem: string[] = []
  if (pathname.includes('docs')) {
    activeItem = ['item-1', 'item-3']
  } else if (pathname.includes('variations')) {
    activeItem = ['item-4']
  } else if (pathname.includes('template')) {
    activeItem = ['item-5']
  }
  return (
    <div className={cn("h-[calc(100vh-100px)] overflow-auto sticky top-[80px]  hidden lg:col-span-3 lg:block xl:col-span-2 border-r p-2 no-scrollbar")}>
      <aside
        id="componentListSidebar"
        className=" space-y-5 2xl:py-6 2xl:pl-5">
        <Accordion multiple={true} activeItem={activeItem ?? ['item-1']}>
          {/* <AccordionPanel className="border-b-0!"> */}
          <AccordionItem id="item-1" className="p-0 border-none mb-3">
            <AccordionHeader className="text-body-1 text-text font-semibold bg-transparent px-0 py-2">
              Getting Started
            </AccordionHeader>
            <AccordionContent className="border-t-0 p-0 bg-transparent">
              <ul className="mt-3">
                {gettingStartedRoutes.map((route) => (
                  <li key={route.id}>
                    <div className={cn("border-l-2 border-border block pl-3 py-1.5 hover:border-l-primary-foreground", IsActive(route.href) && firstPart === "docs" && secondPart === "getting-started" && "border-l-primary-foreground")}>

                      <Link
                        className={cn("pl-3 text-body-2 font-medium text-text-muted ", IsActive(route.href)
                          && firstPart === "docs" && secondPart === "getting-started" && 'text-primary-foreground'
                        )}
                        href={route.href}>
                        {route.name}
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem id="item-3" className="p-0 border-none mb-3">
            <AccordionHeader className="text-body-1 text-text font-semibold bg-transparent px-0 py-2">
              Components
            </AccordionHeader>
            <AccordionContent className="border-t-0 p-0 bg-transparent">
              <ul className="mt-3">
                {routes.map((route) => (
                  <li key={route.id}>
                    <div className={cn("border-l-2 border-border block pl-3 py-1.5 hover:border-l-primary-foreground", IsActive(route.href) && firstPart === "docs" && secondPart === "components" && "border-l-primary-foreground")}>

                      <Link
                        className={cn("pl-3 text-body-2 font-medium text-text-muted ", IsActive(route.href)
                          && firstPart === "docs" && secondPart === "components" && 'text-primary-foreground'
                        )}
                        href={route.href}>
                        {route.name}
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem id="item-4" className="p-0 border-none mb-3">
            <AccordionHeader className="text-body-1 text-text font-semibold bg-transparent px-0 py-2">
              Variations
            </AccordionHeader>
            <AccordionContent className="border-t-0 p-0 bg-transparent">
              <ul className="mt-3">
                {variationsRoutes.map((route) => (
                  <li key={route.id}>
                    <div className={cn("border-l-2 border-border block pl-3 py-1.5 hover:border-l-primary-foreground", IsActive(route.href) && firstPart === "variations" && "border-l-primary-foreground")}>

                      <Link
                        className={cn("pl-3 text-body-2 font-medium text-text-muted ", IsActive(route.href)
                          && firstPart === "variations" && 'text-primary-foreground'
                        )}
                        href={route.href}>
                        {route.name}
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem id="item-5" className="p-0 border-none mb-3">
            <AccordionHeader className="text-body-1 text-text font-semibold bg-transparent px-0 py-2">
              Templates
            </AccordionHeader>
            <AccordionContent className="border-t-0 p-0 bg-transparent">
              <ul className="mt-3">
                {templatesRoutes.map((route) => (
                  <li key={route.id}>
                    <div className={cn("border-l-2 border-border block pl-3 py-1.5 hover:border-l-primary-foreground", IsActive(route.href) && "border-l-primary-foreground")}>

                      <Link
                        className={cn("pl-3 text-body-2 font-medium text-text-muted ", IsActive(route.href)
                          && 'text-primary-foreground'
                        )}
                        href={route.href}>
                        {route.name}
                      </Link>
                    </div>
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
