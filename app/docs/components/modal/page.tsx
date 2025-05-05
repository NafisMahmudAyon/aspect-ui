import type { Metadata, NextPage } from 'next'
import Introduction from './index'
import { DocsContentLayout } from '@/components/DocContentLayout'
import EditPage from '@/components/EditPage'

export const metadata: Metadata = {
  title: 'Modal - Aspect UI',
  description:
    'The `Modal` component displays content in a dialog overlay. It supports animations, accessibility, focus trapping, close buttons, and scroll locking for focused user interactions.',
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
