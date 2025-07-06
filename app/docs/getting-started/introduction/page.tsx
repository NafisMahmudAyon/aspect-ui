import type { Metadata, NextPage } from 'next'
import Introduction from '.'
import { DocsContentLayout } from '@/components/DocContentLayout'
import EditPage from '@/components/EditPage'

export const metadata: Metadata = {
  description:
    'Aspect UI is an open-source component library built on top of React and Tailwind CSS. It offers a collection of pre-designed UI components and styles that you can easily integrate into your web applications. With Aspect UI, you get a powerful set of pre-built components, ready-to-use templates, and CLI tools to supercharge your workflow.',
  title: 'Introduction - Aspect UI',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <Introduction />
      <EditPage
        pageLink="/docs/getting-started/introduction"
        nextPageLink="/docs/getting-started/typography"
        nextPageName="Typography"
      />
    </DocsContentLayout>
  )
}

export default page
