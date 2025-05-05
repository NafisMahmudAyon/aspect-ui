import type { Metadata, NextPage } from 'next'
import Introduction from './index'
import { DocsContentLayout } from '@/components/DocContentLayout'
import EditPage from '@/components/EditPage'

export const metadata: Metadata = {
  title: 'Table - Aspect UI',
  description:
    'The `Table` component displays data in rows and columns. It supports sorting, pagination, filtering, sticky headers, and responsive layouts for structured information.',
};



const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <Introduction />
      <EditPage
        pageLink="/docs/components/accordion"
        nextPageLink="/docs/components/accordion"
        nextPageName="Typography"
      />
    </DocsContentLayout>
  )
}

export default page
