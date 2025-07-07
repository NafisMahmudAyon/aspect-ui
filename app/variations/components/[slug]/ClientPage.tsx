'use client'
import { Divider, Pagination } from '@/app/src'
import CodeSnippets from '@/components/CodeSnippets'
import ComingSoon from '@/components/ComingSoon'
import { useTOC } from '@/context/TOCContext'
import { useEffect, useState } from 'react'

const ClientPage = ({ slug }: { slug: string }) => {
  const [fetchedData, setFetchedData] = useState([])
  const { setTOC } = useTOC()
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    async function getData() {
      try {
        const res = await fetch(
          `/api/get?cats=variations&subcats=${slug}&page=${page}&limit=5`
        )
        if (!res.ok) {
          setFetchedData([])
          return
        }
        const json = await res.json()
        setFetchedData(json.data)
        setTotalPages(json.totalPages)
        setLoading(false)
      } catch (error) {
        console.error('Fetch failed:', error)
      } finally {
        setLoading(false)
      }
    }

    getData()
  }, [slug, page])
  useEffect(() => {
    if (!fetchedData.length) return

    const newTOC = fetchedData.map((item: any) => ({
      id: item.title.replace(/\s+/g, '-').toLowerCase(),
      title: item.title
    }))
    setTOC(newTOC)
  }, [fetchedData])
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {fetchedData &&
            fetchedData.map((item: any) => {
              const generatedID = item.title.replace(/\s+/g, '-').toLowerCase()
              const generatedContent = {
                tsx: JSON.parse(JSON.stringify(item.codeTsx)),
                jsx: JSON.parse(JSON.stringify(item.codeJsx))
              }
              return (
                <div key={item._id}>
                  <h2
                    className='section-title group text-h5 text-text relative font-semibold'
                    id={generatedID}
                  >
                    {item.title}
                    <a
                      aria-label={`Link to this section: ${item.title}`}
                      href={`#${generatedID}`}
                      className='ml-2 opacity-0 transition-opacity group-hover:opacity-100'
                    >
                      #
                    </a>
                  </h2>
                  <Divider />
                  <CodeSnippets
                    styles='mt-4'
                    content={generatedContent}
                    lang='javascript'
                    url={item.url}
                  ></CodeSnippets>
                </div>
              )
            })}
          {fetchedData.length == 0 && (
            <div>
              <ComingSoon
                heading='Coming Soon'
                subHeading='Coming Soon'
                description='We are currently working on this variations. Please check back later for updates.'
                showLaunchDate={false}
              />
            </div>
          )}
        </>
      )}
      {totalPages > 1 && (
        <Pagination
          count={totalPages}
          defaultPage={page}
          showFirstLast={totalPages > 5 ? true : false}
          showNextPrev={totalPages > 1 ? true : false}
          onChange={page => setPage(page)}
        />
      )}
    </div>
  )
}

export default ClientPage
