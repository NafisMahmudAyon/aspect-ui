'use client'
import { cn } from '@/app/src/utils/cn'
import { useTOC } from '@/context/TOCContext'
import { useEffect, useState } from 'react'

export default function DynamicTableOfContent() {
  const { toc } = useTOC()
  const [activeSection, setActiveSection] = useState<string>('')
  console.log(toc)

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY

      for (const section of toc) {
        const element = document.getElementById(section.id)
        if (element) {
          const offsetTop = element.offsetTop
          if (currentPosition >= offsetTop && currentPosition < offsetTop + element.clientHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [toc])
  if (toc.length === 0) return null

  return (
    <div className="hidden lg:col-span-3 lg:block xl:col-span-2">
      <aside id="linkPage" className="sticky top-28 h-[80vh] 2xl:top-60">
        <div className="2xl:pl-5">
          <div className="flex flex-col justify-between overflow-y-auto">
            <h4 className="mb-2 text-body-1 font-semibold uppercase text-text">On this page</h4>
            <nav id="">
              <ul className="list-none">
                {toc.map((item) => (
                  <li key={item.id}>
                    <div className={cn("border-l-2 border-border block pl-3 py-1.5 text-caption", activeSection === item.id ? 'border-l-primary-foreground' : '')}>

                      <a href={`#${item.id}`} data-disable-nprogress="true" className={cn(activeSection === item.id ? 'text-primary-foreground' : '')}>
                        {item.title}
                      </a>
                    </div>
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
