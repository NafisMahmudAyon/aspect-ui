
// import { ForwardRefExoticComponent, RefAttributes } from 'react'
import { v4 as generatedID } from 'uuid'

export interface routerPath {
  id: string
  name: string
  href: string
  tag?: boolean
  deprecate?: boolean
  redirect?: boolean
  folderName?: string
  target?: string
  // Icon?: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>
}

export const routes: routerPath[] = [
  {
    id: generatedID(),
    name: 'Accordion',
    href: '/docs/components/accordion',
    tag: false,
    deprecate: false,
    folderName: 'Accordion'
  },
  {
    id: generatedID(),
    name: 'Alert',
    href: '/docs/components/alert',
    tag: false,
    deprecate: false,
    folderName: 'Alert'
  },
  {
    id: generatedID(),
    name: 'Avatar',
    href: '/docs/components/avatar',
    tag: false,
    deprecate: false,
    folderName: 'Avatar'
  },
  {
    id: generatedID(),
    name: 'BackToTop',
    href: '/docs/components/back-to-top',
    tag: false,
    deprecate: false,
    folderName: 'BackToTop'
  },
  {
    id: generatedID(),
    name: 'Badge',
    href: '/docs/components/badge',
    tag: false,
    deprecate: false,
    folderName: 'Badge'
  },
  {
    id: generatedID(),
    name: 'Breadcrumb',
    href: '/docs/components/breadcrumb',
    tag: false,
    deprecate: false,
    folderName: 'Breadcrumb'
  },
  {
    id: generatedID(),
    name: 'Button',
    href: '/docs/components/button',
    tag: false,
    deprecate: false,
    folderName: 'Button'
  },
  {
    id: generatedID(),
    name: 'Card',
    href: '/docs/components/card',
    tag: false,
    deprecate: false,
    folderName: 'Card'
  },
  {
    id: generatedID(),
    name: 'Carousel',
    href: '/docs/components/carousel',
    tag: false,
    deprecate: false,
    folderName: 'Carousel'
  },
  {
    id: generatedID(),
    name: 'Checkbox',
    href: '/docs/components/checkbox',
    tag: false,
    deprecate: false,
    folderName: 'Checkbox'
  },
  {
    id: generatedID(),
    name: 'CircularProgress',
    href: '/docs/components/circular-progress',
    tag: false,
    deprecate: false,
    folderName: 'CircularProgress'
  },
  {
    id: generatedID(),
    name: 'DatePicker',
    href: '/docs/components/date-picker',
    tag: false,
    deprecate: false,
    folderName: 'DatePicker'
  },
  {
    id: generatedID(),
    name: 'Divider',
    href: '/docs/components/divider',
    tag: false,
    deprecate: false,
    folderName: 'Divider'
  },
  {
    id: generatedID(),
    name: 'Dropdown',
    href: '/docs/components/dropdown',
    tag: false,
    deprecate: false,
    folderName: 'Dropdown'
  },
  // {
  //   id: generatedID(),
  //   name: 'Image',
  //   href: '/docs/components/image',
  //   tag: false,
  //   deprecate: false,
  //   folderName: 'Image'
  // },
  {
    id: generatedID(),
    name: 'Input',
    href: '/docs/components/input',
    tag: false,
    deprecate: false,
    folderName: 'Input'
  },
  {
    id: generatedID(),
    name: 'Masonry',
    href: '/docs/components/masonry',
    tag: false,
    deprecate: false,
    folderName: 'Masonry'
  },
  {
    id: generatedID(),
    name: 'Modal',
    href: '/docs/components/modal',
    tag: false,
    deprecate: false,
    folderName: 'Modal'
  },
  {
    id: generatedID(),
    name: 'Navbar',
    href: '/docs/components/navbar',
    tag: false,
    deprecate: false,
    folderName: 'Navbar'
  },
  {
    id: generatedID(),
    name: 'NumberCounter',
    href: '/docs/components/number-counter',
    tag: false,
    deprecate: false,
    folderName: 'NumberCounter'
  },
  {
    id: generatedID(),
    name: 'Pagination',
    href: '/docs/components/pagination',
    tag: false,
    deprecate: false,
    folderName: 'Pagination'
  },
  {
    id: generatedID(),
    name: 'Popover',
    href: '/docs/components/popover',
    tag: false,
    deprecate: false,
    folderName: 'Popover'
  },
  {
    id: generatedID(),
    name: 'ProgressBar',
    href: '/docs/components/progressbar',
    tag: false,
    deprecate: false,
    folderName: 'ProgressBar'
  },
  {
    id: generatedID(),
    name: 'Radio',
    href: '/docs/components/radio',
    tag: false,
    deprecate: false,
    folderName: 'Radio'
  },
  {
    id: generatedID(),
    name: 'Rating',
    href: '/docs/components/rating',
    tag: false,
    deprecate: false,
    folderName: 'Rating'
  },
  // {
  //   id: generatedID(),
  //   name: 'Select',
  //   href: '/docs/components/select',
  //   tag: false,
  //   deprecate: false,
  //   folderName: 'Select'
  // },
  {
    id: generatedID(),
    name: 'Sidebar',
    href: '/docs/components/sidebar',
    tag: false,
    deprecate: false,
    folderName: 'Sidebar'
  },
  {
    id: generatedID(),
    name: 'Skeleton',
    href: '/docs/components/skeleton',
    tag: false,
    deprecate: false,
    folderName: 'Skeleton'
  },
  {
    id: generatedID(),
    name: 'Slider',
    href: '/docs/components/slider',
    tag: false,
    deprecate: false,
    folderName: 'Slider'
  },
  {
    id: generatedID(),
    name: 'Spinner',
    href: '/docs/components/spinner',
    tag: false,
    deprecate: false,
    folderName: 'Spinner'
  },
  {
    id: generatedID(),
    name: 'Stepper',
    href: '/docs/components/stepper',
    tag: false,
    deprecate: false,
    folderName: 'Stepper'
  },
  {
    id: generatedID(),
    name: 'Switch',
    href: '/docs/components/switch',
    tag: false,
    deprecate: false,
    folderName: 'Switch'
  },
  {
    id: generatedID(),
    name: 'Table',
    href: '/docs/components/table',
    tag: false,
    deprecate: false,
    folderName: 'Table'
  },
  {
    id: generatedID(),
    name: 'Tabs',
    href: '/docs/components/tabs',
    tag: false,
    deprecate: false,
    folderName: 'Tabs'
  },
  {
    id: generatedID(),
    name: 'Textarea',
    href: '/docs/components/textarea',
    tag: false,
    deprecate: false,
    folderName: 'Textarea'
  },
  {
    id: generatedID(),
    name: 'Timeline',
    href: '/docs/components/timeline',
    tag: false,
    deprecate: false,
    folderName: 'Timeline'
  },
  {
    id: generatedID(),
    name: 'Toast',
    href: '/docs/components/toast',
    tag: false,
    deprecate: false,
    folderName: 'Toast'
  },
  {
    id: generatedID(),
    name: 'ToggleButton',
    href: '/docs/components/toggle-button',
    tag: false,
    deprecate: false,
    folderName: 'ToggleButton'
  },
  {
    id: generatedID(),
    name: 'Tooltip',
    href: '/docs/components/tooltip',
    tag: false,
    deprecate: false,
    folderName: 'Tooltip'
  },
  {
    id: generatedID(),
    name: 'Typography',
    href: '/docs/components/typography',
    tag: false,
    deprecate: false,
    folderName: 'Typography'
  },
  {
    id: generatedID(),
    name: 'Upload',
    href: '/docs/components/upload',
    tag: false,
    deprecate: false,
    folderName: 'Upload'
  }
]

export const variationsRoutes: routerPath[] = [
  {
    id: generatedID(),
    name: 'Accordion',
    href: '/variations/components/accordion',
    tag: false,
    deprecate: false,
    folderName: 'Accordion'
  },
  {
    id: generatedID(),
    name: 'Alert',
    href: '/variations/components/alert',
    tag: false,
    deprecate: false,
    folderName: 'Alert'
  },
  {
    id: generatedID(),
    name: 'Avatar',
    href: '/variations/components/avatar',
    tag: false,
    deprecate: false,
    folderName: 'Avatar'
  },
  {
    id: generatedID(),
    name: 'BackToTop',
    href: '/variations/components/back-to-top',
    tag: false,
    deprecate: false,
    folderName: 'BackToTop'
  },
  {
    id: generatedID(),
    name: 'Breadcrumb',
    href: '/variations/components/breadcrumb',
    tag: false,
    deprecate: false,
    folderName: 'Breadcrumb'
  },
  {
    id: generatedID(),
    name: 'Button',
    href: '/variations/components/button',
    tag: false,
    deprecate: false,
    folderName: 'Button'
  },
  {
    id: generatedID(),
    name: 'Card',
    href: '/variations/components/card',
    tag: false,
    deprecate: false,
    folderName: 'Card'
  },
  {
    id: generatedID(),
    name: 'Carousel',
    href: '/variations/components/carousel',
    tag: false,
    deprecate: false,
    folderName: 'Carousel'
  },
  {
    id: generatedID(),
    name: 'Checkbox',
    href: '/variations/components/checkbox',
    tag: false,
    deprecate: false,
    folderName: 'Checkbox'
  },
  {
    id: generatedID(),
    name: 'CircularProgress',
    href: '/variations/components/circular-progress',
    tag: false,
    deprecate: false,
    folderName: 'CircularProgress'
  },
  {
    id: generatedID(),
    name: 'DatePicker',
    href: '/variations/components/date-picker',
    tag: false,
    deprecate: false,
    folderName: 'DatePicker'
  },
  {
    id: generatedID(),
    name: 'Divider',
    href: '/variations/components/divider',
    tag: false,
    deprecate: false,
    folderName: 'Divider'
  },
  {
    id: generatedID(),
    name: 'Dropdown',
    href: '/variations/components/dropdown',
    tag: false,
    deprecate: false,
    folderName: 'Dropdown'
  },
  {
    id: generatedID(),
    name: 'Image',
    href: '/variations/components/image',
    tag: false,
    deprecate: false,
    folderName: 'Image'
  },
  {
    id: generatedID(),
    name: 'Input',
    href: '/variations/components/input',
    tag: false,
    deprecate: false,
    folderName: 'Input'
  },
  {
    id: generatedID(),
    name: 'Masonry',
    href: '/variations/components/masonry',
    tag: false,
    deprecate: false,
    folderName: 'Masonry'
  },
  {
    id: generatedID(),
    name: 'Modal',
    href: '/variations/components/modal',
    tag: false,
    deprecate: false,
    folderName: 'Modal'
  },
  {
    id: generatedID(),
    name: 'Navbar',
    href: '/variations/components/navbar',
    tag: false,
    deprecate: false,
    folderName: 'Navbar'
  },
  {
    id: generatedID(),
    name: 'NumberCounter',
    href: '/variations/components/number-counter',
    tag: false,
    deprecate: false,
    folderName: 'NumberCounter'
  },
  {
    id: generatedID(),
    name: 'Pagination',
    href: '/variations/components/pagination',
    tag: false,
    deprecate: false,
    folderName: 'Pagination'
  },
  {
    id: generatedID(),
    name: 'Popover',
    href: '/variations/components/popover',
    tag: false,
    deprecate: false,
    folderName: 'Popover'
  },
  {
    id: generatedID(),
    name: 'ProgressBar',
    href: '/variations/components/progressbar',
    tag: false,
    deprecate: false,
    folderName: 'ProgressBar'
  },
  {
    id: generatedID(),
    name: 'Radio',
    href: '/variations/components/radio',
    tag: false,
    deprecate: false,
    folderName: 'Radio'
  },
  {
    id: generatedID(),
    name: 'Rating',
    href: '/variations/components/rating',
    tag: false,
    deprecate: false,
    folderName: 'Rating'
  },
  // {
  //   id: generatedID(),
  //   name: 'Select',
  //   href: '/variations/components/select',
  //   tag: false,
  //   deprecate: false,
  //   folderName: 'Select'
  // },
  {
    id: generatedID(),
    name: 'Sidebar',
    href: '/variations/components/sidebar',
    tag: false,
    deprecate: false,
    folderName: 'Sidebar'
  },
  {
    id: generatedID(),
    name: 'Skeleton',
    href: '/variations/components/skeleton',
    tag: false,
    deprecate: false,
    folderName: 'Skeleton'
  },
  {
    id: generatedID(),
    name: 'Slider',
    href: '/variations/components/slider',
    tag: false,
    deprecate: false,
    folderName: 'Slider'
  },
  {
    id: generatedID(),
    name: 'Spinner',
    href: '/variations/components/spinner',
    tag: false,
    deprecate: false,
    folderName: 'Spinner'
  },
  {
    id: generatedID(),
    name: 'Stepper',
    href: '/variations/components/stepper',
    tag: false,
    deprecate: false,
    folderName: 'Stepper'
  },
  {
    id: generatedID(),
    name: 'Switch',
    href: '/variations/components/switch',
    tag: false,
    deprecate: false,
    folderName: 'Switch'
  },
  {
    id: generatedID(),
    name: 'Table',
    href: '/variations/components/table',
    tag: false,
    deprecate: false,
    folderName: 'Table'
  },
  {
    id: generatedID(),
    name: 'Tabs',
    href: '/variations/components/tabs',
    tag: false,
    deprecate: false,
    folderName: 'Tabs'
  },
  {
    id: generatedID(),
    name: 'Textarea',
    href: '/variations/components/textarea',
    tag: false,
    deprecate: false,
    folderName: 'Textarea'
  },
  {
    id: generatedID(),
    name: 'Timeline',
    href: '/variations/components/timeline',
    tag: false,
    deprecate: false,
    folderName: 'Timeline'
  },
  {
    id: generatedID(),
    name: 'Toast',
    href: '/variations/components/toast',
    tag: false,
    deprecate: false,
    folderName: 'Toast'
  },
  {
    id: generatedID(),
    name: 'ToggleButton',
    href: '/variations/components/toggle-button',
    tag: false,
    deprecate: false,
    folderName: 'ToggleButton'
  },
  {
    id: generatedID(),
    name: 'Tooltip',
    href: '/variations/components/tooltip',
    tag: false,
    deprecate: false,
    folderName: 'Tooltip'
  },
  {
    id: generatedID(),
    name: 'Typography',
    href: '/variations/components/typography',
    tag: false,
    deprecate: false,
    folderName: 'Typography'
  },
  {
    id: generatedID(),
    name: 'Upload',
    href: '/variations/components/upload',
    tag: false,
    deprecate: false,
    folderName: 'Upload'
  }
]

export const templatesRoutes: routerPath[] = [
  {
    id: generatedID(),
    name: 'All',
    href: '/template/all',
    tag: false,
    deprecate: false,
    folderName: 'All'
  },
  {
    id: generatedID(),
    name: 'Hero',
    href: '/template/hero',
    tag: false,
    deprecate: false,
    folderName: 'Hero'
  },
  {
    id: generatedID(),
    name: 'About',
    href: '/template/about',
    tag: false,
    deprecate: false,
    folderName: 'About'
  },
]

export const gettingStartedRoutes: routerPath[] = [
  {
    id: generatedID(),
    name: 'Introduction',
    href: '/docs/getting-started/introduction',
  },
  {
    id: generatedID(),
    name: 'Typography',
    href: '/docs/getting-started/typography',
  },
  // {
  //   id: generatedID(),
  //   name: 'Colors',
  //   href: '/docs/getting-started/colors',
  // },
  // {
  //   id: generatedID(),
  //   name: 'Dark Mode',
  //   href: '/docs/getting-started/dark-mode',
  // },
]

export const quickAccessRoute: routerPath[] = [
  {
    id: generatedID(),
    name: 'Installation',
    href: '/docs/getting-started/introduction',
    target: '_self',
  },
  {
    id: generatedID(),
    name: 'Typography',
    href: '/docs/getting-started/typography',
    target: '_self',
  },
  {
    id: generatedID(),
    name: 'Colors',
    href: '/docs/getting-started/colors',
    target: '_self',
  },
  {
    id: generatedID(),
    name: 'Layout',
    href: '/docs/layout/column',
    target: '_self',
  },
  {
    id: generatedID(),
    name: 'Dark Mode',
    href: '/docs/getting-started/dark-mode',
    target: '_self',
  },
]

export const layoutRoutes: routerPath[] = [
  {
    id: generatedID(),
    name: 'Container',
    href: '/docs/layout/container',
  },
  {
    id: generatedID(),
    name: 'Column',
    href: '/docs/layout/column',
  },
  {
    id: generatedID(),
    name: 'Flex',
    href: '/docs/layout/flex',
  },
  {
    id: generatedID(),
    name: 'Grid',
    href: '/docs/layout/grid',
  },
]

export const navbarRoutes: routerPath[] = [
  {
    id: generatedID(),
    href: '/docs/getting-started/introduction',
    name: 'Documentation',
    redirect: false
  },
  {
    id: generatedID(),
    href: '/variations/components/accordion',
    name: 'Variations',
    redirect: true
  },
  {
    id: generatedID(),
    href: '/template/all',
    name: 'Template',
    redirect: false
  },
  {
    id: generatedID(),
    href: '#',
    name: 'Full Page',
    redirect: false
  }
]
