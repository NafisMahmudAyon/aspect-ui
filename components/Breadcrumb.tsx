'use client'
import { BreadcrumbItem, Breadcrumb as Root, SidebarToggleButton } from '@/app/src'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Breadcrumb = () => {
  const pathname = usePathname()
  const items = pathname.split('/').filter((item) => item !== '')
  return (
    <div className='flex items-center gap-2 '>
      <SidebarToggleButton variant="ghost" size="small" />
      <Root className='gap-0 flex-1 overflow-x-auto no-scrollbar flex-nowrap' separatorClassName='mx-1'>
        {items.map((item, index) => {
          var link = ""
          if (item === 'docs' || item === 'variations' || item === 'template') {
            link = `/${item}`
          } else {
            link = ``
          }

          const fixTitle = (item: string) => {
            return item.split('-').map((item) => item.charAt(0).toUpperCase() + item.slice(1)).join(' ')
          }

          return (
            <BreadcrumbItem key={index} className={`text-nowrap ${link === "" && 'cursor-default '}`}>
              {link === "" ?
                fixTitle(item) :
                <Link href={link}>{fixTitle(item)}</Link>
              }
            </BreadcrumbItem>
          )
        })}
      </Root>
    </div>
  )
}

export default Breadcrumb