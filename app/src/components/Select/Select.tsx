'use client'
import React, { ReactNode, useState } from 'react';
import { Button } from '../Button';
import { Popover } from '../Popover';

interface SelectProps {
  options: { value: string; label: string, disabled?: boolean, icon?: ReactNode }[];
  onChange: (values: string[]) => void;
  multiple?: boolean;
}

export const Select: React.FC<SelectProps> = ({ options, onChange, multiple = false }) => {
  const [selectedValues, setSelectedValues] = useState<string | string[]>(multiple ? [] : '');
  console.log(selectedValues)
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (event) => {
    const { value } = event.target;
    if (multiple) {
      const newValues = [...selectedValues];
      if (newValues.includes(value)) {
        // Remove value if already selected
        newValues.splice(newValues.indexOf(value), 1);
      } else {
        // Add value if not selected
        newValues.push(value);
      }
      setSelectedValues(newValues);
      onChange(newValues);
    } else {
      setSelectedValues(value);
      onChange(value);
    }
  };

  return (
    <div>
      <Popover isOpen={isOpen} offset={0} contentClassName='min-w-[200px]' content={
        <>
          {options.map(option => (
            <div key={option.value} className='text-primary-800 dark:text-primary-200' onClick={
              () => {
                if(option.disabled){
                  return
                }

                const value = option.value
                if (multiple) {
                  const newValues = [...selectedValues];
                  if (newValues.includes(value)) {
                    // Remove value if already selected
                    newValues.splice(newValues.indexOf(value), 1);
                  } else {
                    // Add value if not selected
                    newValues.push(value);
                  }
                  setSelectedValues(newValues);
                  onChange(newValues);
                }
              }}>
              {option.label}
            </div>
          ))}
        </>
      }>
    {!multiple ? (
      <Button onClick={() => setIsOpen(!isOpen)} className='bg-primary-100 dark:bg-primary-900 hover:bg-primary-200 dark:hover:bg-primary-800 text-primary-800 dark:text-primary-200 hover:text-primary-900 dark:hover:text-primary-100'>hello</Button>
    ) : (
        <div onClick={() => setIsOpen(!isOpen)} className='bg-primary-100 dark:bg-primary-900 hover:bg-primary-200 dark:hover:bg-primary-800 text-primary-800 dark:text-primary-200 hover:text-primary-900 dark:hover:text-primary-100 h-10 flex gap-2 items-end pb-1 pt-2 px-4'>
          {selectedValues.map((value) => (
            <div key={value} className='text-primary-200 dark:text-primary-800 flex gap-1 items-center text-sm px-2 py-1 rounded-full
            bg-primary-800 dark:bg-primary-200 '>
              {options.find(option => option.value === value)?.label}
              <span onClick={() => { const newValues = [...selectedValues]; newValues.splice(newValues.indexOf(value), 1); setSelectedValues(newValues); onChange(newValues) }} className='size-4 flex items-center justify-center hover:bg-red-500 rounded-full transition-all duration-300 cursor-pointer leading-none'>&times;</span>
            </div>
          ))}
        </div>
    )}
      
        </Popover>
    </div>
  );
};
