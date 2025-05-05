import type { Metadata, NextPage } from 'next'
import Introduction from './index'
import { DocsContentLayout } from '@/components/DocContentLayout'
import EditPage from '@/components/EditPage'

export const metadata: Metadata = {
  title: 'Rating - Aspect UI',
  description:
    'The `Rating` component enables users to provide feedback using a star or icon-based scale. It supports half-stars, tooltips, read-only states, and custom icons.',
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
