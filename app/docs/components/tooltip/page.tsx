import type { Metadata, NextPage } from 'next'
import Introduction from './index'
import { DocsContentLayout } from '@/components/DocContentLayout'
import EditPage from '@/components/EditPage'

export const metadata: Metadata = {
  title: 'Tooltip - Aspect UI',
  description:
    'The `Tooltip` component displays helpful text when users hover or focus on an element. It supports delays, positioning, rich content, and accessibility features.'
}

const page: NextPage = () => {
  return (
    <DocsContentLayout
      description={`${metadata.description}`}
      title={`${metadata.title}`}
    >
      <Introduction />
      <EditPage
        pageLink='/docs/components/accordion'
        nextPageLink='/docs/components/accordion'
        nextPageName='Typography'
      />
    </DocsContentLayout>
  )
}

export default page
