import type { Metadata, NextPage } from 'next'
import Introduction from './index'
import { DocsContentLayout } from '@/components/DocContentLayout'
import EditPage from '@/components/EditPage'

export const metadata: Metadata = {
  title: 'Alert - Aspect UI',
  description:
    'The `Alert` component is used to display important messages or status updates to users, such as success, warning, error, or informational messages. It supports different variants with corresponding icons and colors, ensuring clear and effective communication. Alerts can be styled, dismissed, or customized for different use cases, including system notifications, form feedback, or contextual messages. Fully accessible and easy to integrate into any UI.'
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
