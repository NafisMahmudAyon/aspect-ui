import type { Metadata, NextPage } from 'next'
import Introduction from './index'
import { DocsContentLayout } from '@/components/DocContentLayout'
import EditPage from '@/components/EditPage'

export const metadata: Metadata = {
  title: 'Toast - Aspect UI',
  description:
    'The `Toast` component displays brief messages to notify users about app events or actions. It supports different types (success, error, info), animations, positioning, and auto-dismiss.',
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
