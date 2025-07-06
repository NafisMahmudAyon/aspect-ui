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
      <Root>
        {items.map((item, index) => {
          var link = ""
            if (item === 'docs' || item === 'variations' || item === 'template') {
              link =`/${item}`
            } else {
              link =``
            }
      
          return (
            <BreadcrumbItem key={index} className={`${link === "" && 'cursor-default'}`}>
              {link === "" ?
                item :
                <Link href={link}>{item}</Link>
              }
            </BreadcrumbItem>
          )
        })}
      </Root>
    </div>
  )
}

export default Breadcrumb