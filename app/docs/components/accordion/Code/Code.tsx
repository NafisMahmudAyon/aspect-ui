import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem
} from '@/app/src/components/Accordion'
import { CircleChevronDown, CircleChevronUp } from 'lucide-react'

export const defaultAccordion = {
  'AccordionComponent.tsx': `import { Accordion, AccordionContent, AccordionHeader, AccordionItem } from "@/components/aspect-ui/Accordion"

export const DefaultAccordion = () => {
  return (
    <Accordion className='space-y-4' activeItem={['item-1']}>
      <AccordionItem id='item-1'>
        <AccordionHeader>Header text 1</AccordionHeader>
        <AccordionContent>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantdium magni maiores eveniet, dignissimos fugit illo neque sunt aspernatur asperiores? Numquam commodi, cupiditate eveniet odit vitae facere quo culpa earum nostrum.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem id='item-2'>
        <AccordionHeader>Header text 2</AccordionHeader>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt est repellat hic ab nisi. Nam inventore commodi in dolor nisi soluta deserunt, aut amet quod unde cum. Perferendis, consequatur cumque.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
  `,
  'AccordionComponent.jsx': `import { Accordion, AccordionContent, AccordionHeader, AccordionItem } from "@/components/aspect-ui/Accordion"

export const DefaultAccordion = () => {
  return (
    <Accordion className='space-y-4' activeItem={['item-1']}>
      <AccordionItem id='item-1'>
        <AccordionHeader>Header text 1</AccordionHeader>
        <AccordionContent>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantdium magni maiores eveniet, dignissimos fugit illo neque sunt aspernatur asperiores? Numquam commodi, cupiditate eveniet odit vitae facere quo culpa earum nostrum.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem id='item-2'>
        <AccordionHeader>Header text 2</AccordionHeader>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt est repellat hic ab nisi. Nam inventore commodi in dolor nisi soluta deserunt, aut amet quod unde cum. Perferendis, consequatur cumque.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
  `
}

export const DefaultAccordion = () => {
  return (
    <Accordion className='space-y-4' activeItem={['item-1']}>
      <AccordionItem id='item-1'>
        <AccordionHeader>Header text 1</AccordionHeader>
        <AccordionContent>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
          magni maiores eveniet, dignissimos fugit illo neque sunt aspernatur
          asperiores? Numquam commodi, cupiditate eveniet odit vitae facere quo
          culpa earum nostrum.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem id='item-2'>
        <AccordionHeader>Header text 2</AccordionHeader>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt est
          repellat hic ab nisi. Nam inventore commodi in dolor nisi soluta
          deserunt, aut amet quod unde cum. Perferendis, consequatur cumque.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export const customIconAccordion = {
  'AccordionComponent.tsx': `import { Accordion, AccordionContent, AccordionHeader, AccordionItem } from "@/components/aspect-ui/Accordion"

export const CustomIconAccordion = () => {
  return (
    <Accordion className='space-y-4' activeItem={['item-1']} activeIcon={<CircleChevronUp />} inactiveIcon={<CircleChevronDown />}>
      <AccordionItem id='item-1'>
        <AccordionHeader>Header text 1</AccordionHeader>
        <AccordionContent>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantdium magni maiores eveniet, dignissimos fugit illo neque sunt aspernatur asperiores? Numquam commodi, cupiditate eveniet odit vitae facere quo culpa earum nostrum.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem id='item-2'>
        <AccordionHeader>Header text 2</AccordionHeader>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt est repellat hic ab nisi. Nam inventore commodi in dolor nisi soluta deserunt, aut amet quod unde cum. Perferendis, consequatur cumque.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
  `,
  'AccordionComponent.jsx': `import { Accordion, AccordionContent, AccordionHeader, AccordionItem } from "@/components/aspect-ui/Accordion"

export const CustomIconAccordion = () => {
  return (
    <Accordion className='space-y-4' activeItem={['item-1']} activeIcon={<CircleChevronUp />} inactiveIcon={<CircleChevronDown />}>
      <AccordionItem id='item-1'>
        <AccordionHeader>Header text 1</AccordionHeader>
        <AccordionContent>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantdium magni maiores eveniet, dignissimos fugit illo neque sunt aspernatur asperiores? Numquam commodi, cupiditate eveniet odit vitae facere quo culpa earum nostrum.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem id='item-2'>
        <AccordionHeader>Header text 2</AccordionHeader>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt est repellat hic ab nisi. Nam inventore commodi in dolor nisi soluta deserunt, aut amet quod unde cum. Perferendis, consequatur cumque.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
  `
}

export const CustomIconAccordion = () => {
  return (
    <Accordion
      className='space-y-4'
      activeItem={['item-1']}
      activeIcon={<CircleChevronUp />}
      inactiveIcon={<CircleChevronDown />}
    >
      <AccordionItem id='item-1'>
        <AccordionHeader>Header text 1</AccordionHeader>
        <AccordionContent>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
          magni maiores eveniet, dignissimos fugit illo neque sunt aspernatur
          asperiores? Numquam commodi, cupiditate eveniet odit vitae facere quo
          culpa earum nostrum.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem id='item-2'>
        <AccordionHeader>Header text 2</AccordionHeader>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt est
          repellat hic ab nisi. Nam inventore commodi in dolor nisi soluta
          deserunt, aut amet quod unde cum. Perferendis, consequatur cumque.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
export const multipleOpenAccordion = {
  'AccordionComponent.tsx': `import { Accordion, AccordionContent, AccordionHeader, AccordionItem } from "@/components/aspect-ui/Accordion"

export const MultipleOpenAccordion = () => {
  return (
    <Accordion className='space-y-4' activeItem={['item-1']} multiple={true}>
      <AccordionItem id='item-1'>
        <AccordionHeader>Header text 1</AccordionHeader>
        <AccordionContent>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantdium magni maiores eveniet, dignissimos fugit illo neque sunt aspernatur asperiores? Numquam commodi, cupiditate eveniet odit vitae facere quo culpa earum nostrum.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem id='item-2'>
        <AccordionHeader>Header text 2</AccordionHeader>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt est repellat hic ab nisi. Nam inventore commodi in dolor nisi soluta deserunt, aut amet quod unde cum. Perferendis, consequatur cumque.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
  `,
  'AccordionComponent.jsx': `import { Accordion, AccordionContent, AccordionHeader, AccordionItem } from "@/components/aspect-ui/Accordion"

export const MultipleOpenAccordion = () => {
  return (
    <Accordion className='space-y-4' activeItem={['item-1']} multiple={true}>
      <AccordionItem id='item-1'>
        <AccordionHeader>Header text 1</AccordionHeader>
        <AccordionContent>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantdium magni maiores eveniet, dignissimos fugit illo neque sunt aspernatur asperiores? Numquam commodi, cupiditate eveniet odit vitae facere quo culpa earum nostrum.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem id='item-2'>
        <AccordionHeader>Header text 2</AccordionHeader>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt est repellat hic ab nisi. Nam inventore commodi in dolor nisi soluta deserunt, aut amet quod unde cum. Perferendis, consequatur cumque.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
  `
}

export const MultipleOpenAccordion = () => {
  return (
    <Accordion className='space-y-4' activeItem={['item-1']} multiple={true}>
      <AccordionItem id='item-1'>
        <AccordionHeader>Header text 1</AccordionHeader>
        <AccordionContent>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
          magni maiores eveniet, dignissimos fugit illo neque sunt aspernatur
          asperiores? Numquam commodi, cupiditate eveniet odit vitae facere quo
          culpa earum nostrum.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem id='item-2'>
        <AccordionHeader>Header text 2</AccordionHeader>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt est
          repellat hic ab nisi. Nam inventore commodi in dolor nisi soluta
          deserunt, aut amet quod unde cum. Perferendis, consequatur cumque.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export const accordionPropsData = [
  {
    prop: 'children',
    type: 'ReactNode',
    default: '-',
    description:
      'The content of the accordion, typically AccordionItem components'
  },
  {
    prop: 'iconEnabled',
    type: 'boolean',
    default: 'true',
    description: 'Whether to show toggle icons'
  },
  {
    prop: 'iconPosition',
    type: `'left' | 'right'`,
    default: `'right'`,
    description: 'Position of the toggle icon'
  },
  {
    prop: 'iconClassName',
    type: 'string',
    default: `''`,
    description: 'Additional CSS class for the icon'
  },
  {
    prop: 'activeIconClassName',
    type: 'string',
    default: `''`,
    description: 'Additional CSS class for the active state icon'
  },
  {
    prop: 'activeItem',
    type: 'string[]',
    default: '-',
    description: 'Array of active item IDs (controlled mode)'
  },
  {
    prop: 'activeIcon',
    type: 'ReactNode',
    default: '-',
    description: 'Custom icon to show when item is expanded'
  },
  {
    prop: 'inactiveIcon',
    type: 'ReactNode',
    default: '-',
    description: 'Custom icon to show when item is collapsed'
  },
  {
    prop: 'multiple',
    type: 'boolean',
    default: 'false',
    description: 'Whether multiple items can be expanded simultaneously'
  },
  {
    prop: 'className',
    type: 'string',
    default: `''`,
    description: 'Additional CSS class for the accordion container'
  },
  {
    prop: 'labelClassName',
    type: 'string',
    default: `''`,
    description: 'Additional CSS class for item labels'
  },
  {
    prop: 'activeLabelClassName',
    type: 'string',
    default: `''`,
    description: 'Additional CSS class for active item labels'
  },
  {
    prop: 'headerClassName',
    type: 'string',
    default: `''`,
    description: 'Additional CSS class for item headers'
  },
  {
    prop: 'activeHeaderClassName',
    type: 'string',
    default: `''`,
    description: 'Additional CSS class for active item headers'
  },
  {
    prop: 'contentClassName',
    type: 'string',
    default: `''`,
    description: 'Additional CSS class for item content areas'
  },
  {
    prop: 'reset',
    type: 'boolean',
    default: 'false',
    description: 'Whether to reset/close all items when this prop changes'
  },
  {
    prop: '...rest',
    type: 'HTMLAttributes',
    default: '-',
    description: 'Any other props will be spread to the root element'
  }
]

export const accordionHeaderPropsData = [
  {
    prop: 'children',
    type: 'ReactNode',
    default: '-',
    description: 'The content of the header, typically a label or title.'
  },
  {
    prop: 'isOpen',
    type: 'boolean',
    default: 'false',
    description: 'Controls whether the accordion item is open.'
  },
  {
    prop: 'onToggle',
    type: '() => void',
    default: '-',
    description: 'Callback function triggered when the header is clicked.'
  },
  {
    prop: 'iconEnabled',
    type: 'boolean',
    default: 'true',
    description: 'Whether to show toggle icons.'
  },
  {
    prop: 'iconPosition',
    type: `'left' | 'right'`,
    default: `'right'`,
    description: 'Position of the toggle icon.'
  },
  {
    prop: 'iconClassName',
    type: 'string',
    default: `''`,
    description: 'Additional CSS class for the icon.'
  },
  {
    prop: 'activeIconClassName',
    type: 'string',
    default: `''`,
    description: 'Additional CSS class for the active state icon.'
  },
  {
    prop: 'activeIcon',
    type: 'ReactNode',
    default: '-',
    description: 'Custom icon to display when the item is expanded.'
  },
  {
    prop: 'inactiveIcon',
    type: 'ReactNode',
    default: '-',
    description: 'Custom icon to display when the item is collapsed.'
  },
  {
    prop: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Disables the toggle functionality if set to true.'
  },
  {
    prop: 'className',
    type: 'string',
    default: `''`,
    description: 'Additional class for the outer wrapper.'
  },
  {
    prop: 'labelClassName',
    type: 'string',
    default: `''`,
    description: 'Additional class for the label.'
  },
  {
    prop: 'activeLabelClassName',
    type: 'string',
    default: `''`,
    description: 'Additional class when label is active.'
  },
  {
    prop: 'headerClassName',
    type: 'string',
    default: `''`,
    description: 'Additional class for the header container.'
  },
  {
    prop: 'activeHeaderClassName',
    type: 'string',
    default: `''`,
    description: 'Additional class for active header.'
  },
  {
    prop: 'reset',
    type: 'boolean',
    default: 'false',
    description: 'Whether to reset when the parent Accordion resets.'
  },
  {
    prop: 'tagName',
    type: `'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div' | 'button'`,
    default: `'h2'`,
    description: 'HTML tag to use for the header element.'
  }
]

export const accordionItemPropsData = [
  {
    prop: 'children',
    type: 'ReactNode',
    default: '-',
    description:
      'Content inside the accordion item (usually header and content).'
  },
  {
    prop: 'id',
    type: 'string',
    default: '-',
    description: 'Unique identifier for the accordion item.'
  },
  {
    prop: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'If true, the item cannot be toggled.'
  },
  {
    prop: 'className',
    type: 'string',
    default: `''`,
    description: 'Additional CSS classes for the accordion item.'
  }
]

export const accordionContentPropsData = [
  {
    prop: 'children',
    type: 'ReactNode',
    default: '-',
    description: 'The content to display inside the accordion when expanded.'
  },
  {
    prop: 'isOpen',
    type: 'boolean',
    default: 'false',
    description: 'Controls whether the content is shown.'
  },
  {
    prop: 'className',
    type: 'string',
    default: `''`,
    description: 'Additional CSS classes for the content wrapper.'
  },
  {
    prop: 'reset',
    type: 'boolean',
    default: 'false',
    description: 'If true, resets internal state when the prop changes.'
  }
]
