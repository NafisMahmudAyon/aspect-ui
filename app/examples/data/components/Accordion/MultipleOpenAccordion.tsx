import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem
} from '@/app/src'

// https://localhost:3000/examples/components/accordion/multiple-open-accordion
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
