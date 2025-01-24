import Link from 'next/link'
import { FC } from 'react'
// import { buttonVariants } from '../src'

interface EditPageProps {
  pageLink: string
  nextPageName: string
  nextPageLink: string
}

const EditPage: FC<EditPageProps> = ({ pageLink, nextPageName, nextPageLink }) => {
  const githubPageLink = `https://github.com/StaticMania/aspect-ui/tree/main/app${pageLink}`
  return (
    <div className="my-12">
      <div className="flex items-center justify-between">
        <Link target="_blank" href={githubPageLink} className={`disabled:pointer-events-none disabled:opacity-50 transition-all focus-visible:outline-hidden inline-flex items-center justify-center whitespace-nowrap disabled:cursor-not-allowed capitalize text-body2 px-4 py-2.5 h-10 font-medium rounded-lg bg-transparent border border-primary-300 dark:border-primary-800 hover:bg-transparent dark:hover:bg-transparent dark:hover:text-primary-300 dark:text-primary-300 hover:text-primary-500 text-primary-600 disabled:bg-transparent disabled:text-primary-200 disabled:border-primary-200 dark:disabled:text-white focus-visible:ring-2 focus-visible:ring-primary-200 ring-offset-4 dark:ring-offset-primary-900`}>
          Edit this page
        </Link>
        <Link href={nextPageLink} className={`w-max gap-2 disabled:pointer-events-none disabled:opacity-50 transition-all focus-visible:outline-hidden inline-flex items-center justify-center whitespace-nowrap disabled:cursor-not-allowed capitalize text-body2 px-4 py-2.5 h-10 font-medium rounded-lg bg-transparent border border-primary-300 dark:border-primary-800 hover:bg-transparent dark:hover:bg-transparent dark:hover:text-primary-300 dark:text-primary-300 hover:text-primary-500 text-primary-600 disabled:bg-transparent disabled:text-primary-200 disabled:border-primary-200 dark:disabled:text-white focus-visible:ring-2 focus-visible:ring-primary-200 ring-offset-4 dark:ring-offset-primary-900`}>
          <span>{nextPageName}</span>
          <span>
            <svg
              width={14}
              height={14}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.555 13.554a2.2 2.2 0 0 0 0-3.113L8.76 1.644a2.19 2.19 0 0 0-2.398-.474A2.2 2.2 0 0 0 5 3.204v17.593a2.202 2.202 0 0 0 3.76 1.56l8.795-8.796z"
                fill="currentColor"
              />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  )
}

export default EditPage
