import React from 'react';
interface DatePickerProps {
    onChange: (dates: Date[]) => void;
    initialDates?: Date[] | string[];
    isRange?: boolean;
    shape?: 'rounded-sm' | 'square' | 'circle';
    placeholder?: string;
    className?: string;
    show?: boolean;
    calendarContainerClassName?: string;
}
export declare const DatePicker: React.FC<DatePickerProps>;
export {};
