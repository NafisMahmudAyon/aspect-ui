'use client'
import { Divider } from '@/app/src'
import CodeSnippets from '@/components/CodeSnippets'
import { useTOC } from '@/context/TOCContext'
import { useEffect, useState } from 'react'

const ClientPage = ({ slug }: { slug: string }) => {
  const [fetchedData, setFetchedData] = useState([])
  const { setTOC } = useTOC()

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(`/api/get?cats=docs&subcats=${slug}`)
        const json = await res.json()
        setFetchedData(json.data)
      } catch (error) {
        console.error('Fetch failed:', error)
      }
    }

    getData()
  }, [slug])
  useEffect(() => {
    if (!fetchedData.length) return

    const newTOC = fetchedData.map((item: any) => ({
      id: item.title.replace(/\s+/g, '-').toLowerCase(),
      title: item.title,
    }))
    setTOC(newTOC)
  }, [fetchedData])
  return (
    <div>
      {fetchedData && fetchedData.map((item: any) => {
        const generatedID = item.title.replace(/\s+/g, '-').toLowerCase()
        const generatedContent = {
          "tsx": JSON.parse(JSON.stringify(item.codeTsx)),
          "jsx": JSON.parse(JSON.stringify(item.codeJsx))
        }
        return (
          <div key={item._id}>
            <h2 className="section-title group relative font-semibold text-h5" id={generatedID}>{item.title}
              <a
                aria-label={`Link to this section: ${item.title}`}
                href={`#${generatedID}`}
                className="ml-2 text-metal-500 opacity-0 transition-opacity group-hover:opacity-100">
                #
              </a>
            </h2>
            <Divider />
            <CodeSnippets styles="mt-4" content={generatedContent} lang="javascript" url={item.url} >
            </CodeSnippets>
          </div>
        )
      })}
    </div>
  )
}

export default ClientPage