export const defaultCircularProgressBar = {
  'CircularProgressBarComponent.tsx': `import { CircularProgressBar } from '@/components/aspect-ui/CircularProgressBar'

const DefaultCircularProgressBar = () => {
  return (
    <CircularProgressBar value={78} />
  )
}

export default DefaultCircularProgressBar
  `,
  'CircularProgressBarComponent.jsx': `import { CircularProgressBar } from '@/components/aspect-ui/CircularProgressBar'

const DefaultCircularProgressBar = () => {
  return (
    <CircularProgressBar value={78} />
  )
}

export default DefaultCircularProgressBar
  `
}

export const OnVisibleCircularProgressBar = {
  'CircularProgressBarComponent.tsx': `import { CircularProgressBar } from '@/components/aspect-ui/CircularProgressBar'

const OnVisibleCircularProgressBar = () => {
  return (
    <CircularProgressBar value={78} onVisible />
  )
}

export default OnVisibleCircularProgressBar
  `,
  'CircularProgressBarComponent.jsx': `import { CircularProgressBar } from '@/components/aspect-ui/CircularProgressBar'

const OnVisibleCircularProgressBar = () => {
  return (
    <CircularProgressBar value={78} onVisible />
  )
}

export default OnVisibleCircularProgressBar
  `
}

export const circularProgressBarPropsData = [
  {
    prop: 'value',
    type: 'number',
    default: '75',
    description: 'The value of the progress bar.'
  },
  {
    prop: 'className',
    type: 'string',
    default: '-',
    description: 'Additional CSS classes for the component.'
  },
  {
    prop: 'onVisible',
    type: 'boolean',
    default: 'false',
    description: 'Determines whether the progress bar is visible.'
  },
  {
    prop: 'duration',
    type: 'number',
    default: '2',
    description: 'Duration of the progress animation in seconds.'
  },
  {
    prop: 'strokeColor',
    type: 'string',
    default: '#CCCCCC',
    description: 'Color of the background circle.'
  },
  {
    prop: 'strokeFillColor',
    type: 'string',
    default: '#333333',
    description: 'Color of the progress arc.'
  },
  {
    prop: 'strokeWidth',
    type: 'number',
    default: '2',
    description: 'Width of the circle stroke.'
  },
  {
    prop: 'contentClassName',
    type: 'string',
    default: '-',
    description: 'Additional CSS classes for the content container.'
  },
  {
    prop: 'hideValue',
    type: 'boolean',
    default: 'false',
    description: 'Whether to hide the percentage value.'
  },
  {
    prop: 'children',
    type: 'React.ReactNode',
    default: '',
    description: 'Custom content to display inside the circle.'
  }
]
