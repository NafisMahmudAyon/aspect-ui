'use client'
import { Accordion, AccordionContent, AccordionHeader, AccordionItem, NavbarCollapse, NavbarItem } from '@/app/src'
import { cn } from '@/app/src/utils/cn'
import { gettingStartedRoutes, navbarRoutes, routes, templatesRoutes, variationsRoutes } from '@/routes/routes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const MobileMenu = () => {
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
    <NavbarCollapse className='gap-4 max-h-[calc(100vh-120px)] overflow-auto'>


      {/* <NavbarList className='flex flex-col gap-2 items-start'> */}
      {navbarRoutes.map((nav) => (
        <NavbarItem key={nav.id}>
          <Link href={nav.href} target='_self' className='w-full h-full block text-text hover:text-primary-foreground text-start'>
            {nav.name}
          </Link>
        </NavbarItem>
      ))}
      {/* </NavbarList> */}
      {/* <NavbarList> */}
      {/* <Accordion multiple={true} activeItem={activeItem ?? ['item-1']}>
        <AccordionItem id="item-1" className="p-0 border-none mb-3">
          <AccordionHeader className="text-body-1 text-text font-semibold bg-transparent px-0 py-2">
            Getting Started
          </AccordionHeader>
          <AccordionContent className="border-t-0 p-0">
            <ul className="mt-3">
              {gettingStartedRoutes.map((route) => (
                <li key={route.id}>
                  <NavbarItem className={cn("border-l-2 border-border block pl-3 py-1.5 hover:border-l-primary-foreground rounded-none w-full", IsActive(route.href) && firstPart === "docs" && secondPart === "getting-started" && "border-l-primary-foreground")}>

                    <Link
                      className={cn("pl-3 text-body-2 font-medium text-text-muted w-full h-full block text-start", IsActive(route.href)
                        && firstPart === "docs" && secondPart === "getting-started" && 'text-primary-foreground'
                      )}
                      href={route.href}>
                      {route.name}
                    </Link>
                  </NavbarItem>
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
                  <div className={cn("border-l-2 border-border block pl-3 py-1.5 hover:border-l-primary-foreground rounded-none w-full", IsActive(route.href) && firstPart === "docs" && secondPart === "components" && "border-l-primary-foreground")}>

                    <Link
                      className={cn("pl-3 text-body-2 font-medium text-text-muted w-full h-full block text-start", IsActive(route.href)
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
                  <div className={cn("border-l-2 border-border block pl-3 py-1.5 hover:border-l-primary-foreground rounded-none w-full ", IsActive(route.href) && firstPart === "variations" && "border-l-primary-foreground")}>

                    <Link
                      className={cn("pl-3 text-body-2 font-medium text-text-muted w-full h-full block text-start", IsActive(route.href)
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
                  <div className={cn("border-l-2 border-border block pl-3 py-1.5 hover:border-l-primary-foreground rounded-none w-full", IsActive(route.href) && "border-l-primary-foreground")}>

                    <Link
                      className={cn("pl-3 text-body-2 font-medium text-text-muted w-full h-full block text-start", IsActive(route.href)
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
      </Accordion> */}
      {/* </NavbarList> */}

      {/* <NavbarList className='flex items-center'>
        <ThemeSwitcher />
      </NavbarList> */}

    </NavbarCollapse>
  )
}

export default MobileMenu