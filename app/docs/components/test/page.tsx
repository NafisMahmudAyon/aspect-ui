import type { Metadata, NextPage } from 'next'
import Introduction from './index'
import { DocsContentLayout } from '@/components/DocContentLayout'
import EditPage from '@/components/EditPage'

export const metadata: Metadata = {
  title: 'Avatar - Aspect UI',
  description:
    'The `Avatar` component is used to represent a user or entity with a visual element, typically an image, initials, or icon. It is commonly used in user profiles, comments, and lists. The component supports customizable sizes, fallback content, status indicators, and accessibility features. It can be easily integrated with tooltips, badges, and other UI elements for enhanced user context.',
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
