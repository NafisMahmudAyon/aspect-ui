export const defaultDatePicker = {
  'DatePickerComponent.tsx': `'use client'
  import { DatePicker } from '@/components/aspect-ui/DatePicker'
  
  const DefaultDatePicker = () => {
    return (
      <DatePicker onChange={(dates: Date[]) => console.log(dates)} />
    )
  }
  
  export default DefaultDatePicker
  `,
  'DatePickerComponent.jsx': `'use client'
  import { DatePicker } from '@/components/aspect-ui/DatePicker'
  
  const DefaultDatePicker = () => {
    return (
      <DatePicker onChange={(dates) => console.log(dates)} />
    )
  }
  
  export default DefaultDatePicker
  `
}

export const datePickerPropsData = [
  {
    prop: 'onChange',
    type: '(dates: Date[]) => void',
    default: '',
    description: 'Function called when date selection changes',
  },
  {
    prop: 'initialDates',
    type: 'Date[]',
    default: '[]',
    description: 'Array of pre-selected dates',
  },
  {
    prop: 'isRange',
    type: 'boolean',
    default: 'false',
    description: 'Enable date range selection mode',
  },
  {
    prop: 'shape',
    type: "'rounded-sm' | 'square' | 'circle'",
    default: "'circle'",
    description: 'Shape of date cells in the calendar',
  },
  {
    prop: 'placeholder',
    type: 'string',
    default: "'Select your date'",
    description: 'Placeholder text when no date is selected',
  },
  {
    prop: 'className',
    type: 'string',
    default: "-",
    description: 'Additional CSS classes for the component',
  },
  {
    prop: 'show',
    type: 'boolean',
    default: 'false',
    description: 'Show the date picker',
  },
  {
    prop: 'calendarContainerClassName',
    type: 'string',
    default: "-",
    description: 'Additional CSS classes for the calendar container',
  },
]
