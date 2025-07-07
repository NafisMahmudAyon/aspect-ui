import type { Metadata, NextPage } from 'next'
import Introduction from './index'
import { DocsContentLayout } from '@/components/DocContentLayout'
import EditPage from '@/components/EditPage'

export const metadata: Metadata = {
  title: 'BackToTop - Aspect UI',
  description:
    'The `BackToTop` component provides users with a convenient way to quickly scroll back to the top of the page. It becomes visible after the user scrolls past a certain point and typically appears as a floating button. Fully customizable, it supports smooth scrolling, icon integration, and positioning options, enhancing user experience on long or content-heavy pages.'
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
