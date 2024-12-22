// import { AccordionHeader } from '@/app/src/components/Accordion/AccordionHeader'
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem
} from '@/app/src/components/Accordion'
import React from 'react'

const AccordionDemo = () => {
  interface ItemProps {
    title: string
    content: React.ReactNode
  }
  const accordionItems: ItemProps[] = [
    {
      title: 'Accordion Item #1',
      content: (
        <div>
          <p>This is the content of Accordion Item #1.</p>
          <button className='mt-2 rounded bg-blue-500 p-2 text-white'>
            Click me
          </button>
        </div>
      )
    },
    {
      title: 'Accordion Item #2',
      content: <p>This is the content of Accordion Item #2 with just text.</p>
    },
    {
      title: 'Accordion Item #3',
      content: (
        <div>
          <h3>Subheading for Item 3</h3>
          <ul className='ml-4 list-disc'>
            <li>Point 1</li>
            <li>Point 2</li>
            <li>Point 3</li>
          </ul>
        </div>
      )
    }
  ]
  return (
    <div>
      <h2 className='mb-4 text-xl font-semibold'>Multiple Open Accordions</h2>

      {/* <Accordion
        className='space-y-4'
        activeItem={['item1', 'item2']}
        iconEnabled={true}
        iconPosition='right'
      >
        <AccordionItem id='item1'>
          <AccordionHeader headerClassName='bg-red-400' activeHeaderClassName='text-red-600'>Header text 1</AccordionHeader>
          <AccordionContent className='bg-red-400'>
            Content text 1
          </AccordionContent>
        </AccordionItem>
        <AccordionItem id='item2'>
          <AccordionHeader>Header text 2</AccordionHeader>
          <AccordionContent>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              iste, esse sunt hic consequatur temporibus incidunt nemo deleniti
              harum dolorum optio sapiente quisquam ea sed, neque officiis
              suscipit nostrum obcaecati. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Aspernatur itaque aperiam repellat minima
              debitis autem sint quo perspiciatis id, laboriosam rerum
              asperiores consectetur vero dicta, fugit inventore blanditiis
              ducimus aut.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem disabled={true} id='item3'>
          <AccordionHeader iconEnabled={false}>
            Header text 3 (no icon)
          </AccordionHeader>
          <AccordionContent>Content text 3</AccordionContent>
        </AccordionItem>
      </Accordion> */}
      {/* <Accordion
        className='space-y-4'
        activeHeaderClassName=''
        headerClassName=''
        iconEnabled={true}
        iconPosition='right'
      >
        <AccordionItem id='item1'>
          <AccordionHeader >Header text 1</AccordionHeader>
          <AccordionContent className='bg-red-400'>
            Content text 1
          </AccordionContent>
        </AccordionItem>
        <AccordionItem id='item2'>
          <AccordionHeader>Header text 2</AccordionHeader>
          <AccordionContent>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              iste, esse sunt hic consequatur temporibus incidunt nemo deleniti
              harum dolorum optio sapiente quisquam ea sed, neque officiis
              suscipit nostrum obcaecati. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Aspernatur itaque aperiam repellat minima
              debitis autem sint quo perspiciatis id, laboriosam rerum
              asperiores consectetur vero dicta, fugit inventore blanditiis
              ducimus aut.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem disabled={true} id='item3'>
          <AccordionHeader iconEnabled={false}>
            Header text 3 (no icon)
          </AccordionHeader>
          <AccordionContent>Content text 3</AccordionContent>
        </AccordionItem>
      </Accordion> */}

      {/* <Accordion iconEnabled={true} iconPosition="right" multiple={true}>
        <AccordionItem id="item1">
          <AccordionHeader>Header text 1</AccordionHeader>
          <AccordionContent>Content text 1</AccordionContent>
        </AccordionItem>
        <AccordionItem id="item2">
          <AccordionHeader>Header text 2</AccordionHeader>
          <AccordionContent>Content text 2</AccordionContent>
        </AccordionItem>
        <AccordionItem id="item3" disabled>
          <AccordionHeader>Header text 3 (disabled)</AccordionHeader>
          <AccordionContent>Content text 3</AccordionContent>
        </AccordionItem>
      </Accordion> */}

      <Accordion className='space-y-4'>
        {accordionItems.map((item, index) => (
          <AccordionItem key={index} id={`item-${index + 1}`}>
            <AccordionHeader headerClassName='bg-red-400' activeHeaderClassName='text-red-600'>{item.title}</AccordionHeader>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

export default AccordionDemo
