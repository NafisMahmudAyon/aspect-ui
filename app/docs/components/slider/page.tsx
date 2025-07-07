import type { Metadata, NextPage } from 'next'
import Introduction from './index'
import { DocsContentLayout } from '@/components/DocContentLayout'
import EditPage from '@/components/EditPage'

export const metadata: Metadata = {
  title: 'Slider - Aspect UI',
  description:
    'The `Slider` component allows users to select a value or range from a defined scale. It supports custom steps, marks, tooltips, vertical orientation, and is ideal for filters and settings.'
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
