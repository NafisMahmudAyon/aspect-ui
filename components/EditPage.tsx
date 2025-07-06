'use client'
import { Button } from '@/app/src'
import { routes } from '@/routes/routes'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC, useEffect, useState } from 'react'
// import { buttonVariants } from '../src'

interface EditPageProps {
  pageLink: string
  nextPageName: string
  nextPageLink: string
  isComponents?: boolean
}

const EditPage: FC<EditPageProps> = ({ pageLink, nextPageName, nextPageLink, isComponents = true }) => {
  const pathname = usePathname()
  console.log(pathname)
  const githubPageLink = `https://github.com/NafisMahmudAyon/aspect-ui/tree/main/app${pageLink}`

  const [nextPage, setNextPage] = useState<{ name: string, link: string } | null>(null)
  const [prevPage, setPrevPage] = useState<{ name: string, link: string } | null>(null)
  useEffect(() => {
    if (isComponents) {
      const route = routes.find((route) => route.href === pathname)
      if (route) {
        const index = routes.indexOf(route)
        setNextPage({ name: routes[index + 1]?.name ?? "", link: routes[index + 1]?.href ?? "" })
        setPrevPage({ name: routes[index - 1]?.name ?? "", link: routes[index - 1]?.href ?? "" })
      }
    }
  }, [pathname])

  return (
    <div className="my-12">
      <div className="flex items-center justify-between">
        {/* <Link target="_blank" href={githubPageLink} className={`disabled:pointer-events-none disabled:opacity-50 transition-all focus-visible:outline-hidden inline-flex items-center justify-center whitespace-nowrap disabled:cursor-not-allowed capitalize text-body2 px-4 py-2.5 h-10 font-medium rounded-lg bg-transparent border border-primary-300 dark:border-primary-800 hover:bg-transparent dark:hover:bg-transparent dark:hover:text-primary-300 dark:text-primary-300 hover:text-primary-500 text-primary-600 disabled:bg-transparent disabled:text-primary-200 disabled:border-primary-200 dark:disabled:text-white focus-visible:ring-2 focus-visible:ring-primary-200 ring-offset-4 dark:ring-offset-primary-900`}>
          Edit this page
        </Link> */}
        {prevPage && prevPage.link && (<Button variant='outline' className='p-0'>
          <Link href={prevPage && prevPage.link} className={`flex items-center gap-2 px-4 py-2`}>
            <ChevronLeft />
            <span>{prevPage.name}</span>
          </Link>
        </Button>)}
        {nextPage && nextPage.link && (<Button variant='outline' className='p-0'>
          <Link href={nextPage && nextPage.link} className={`flex items-center gap-2 px-4 py-2`}>
            <span>{nextPage.name}</span>
            <ChevronRight />
          </Link>
        </Button>)}
      </div>
    </div>
  )
}

export default EditPage
