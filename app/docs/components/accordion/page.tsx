import type { Metadata, NextPage } from 'next'
import Introduction from './index'
import { DocsContentLayout } from '@/components/DocContentLayout'
import EditPage from '@/components/EditPage'

export const metadata: Metadata = {
  description:
    'The `Accordion` component allows you to display collapsible content panels that users can expand and collapse individually. It is ideal for organizing large amounts of content into a clean, user-friendly format, such as FAQs, menus, or detailed information sections. Each accordion item includes a trigger (header) and a content panel, supporting smooth transitions and optional control over multiple open panels. The component is fully accessible and customizable, supporting icons, animation, nested items, and more.',
  title: 'Accordion - Aspect UI'
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
