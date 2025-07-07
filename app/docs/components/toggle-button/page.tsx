import type { Metadata, NextPage } from 'next'
import Introduction from './index'
import { DocsContentLayout } from '@/components/DocContentLayout'
import EditPage from '@/components/EditPage'

export const metadata: Metadata = {
  title: 'ToggleButton - Aspect UI',
  description:
    'The `ToggleButton` component switches between active/inactive states. Useful for toggling filters, views, or modes, it supports icons, accessibility, and group behavior.'
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
