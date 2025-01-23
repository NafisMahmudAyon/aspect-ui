import React from 'react';
interface DatePickerProps {
    onChange: (dates: Date[]) => void;
    initialDates?: Date[];
    isRange?: boolean;
    shape?: 'rounded-sm' | 'square' | 'circle';
    placeholder?: string;
    className?: string;
}
export declare const DatePicker: React.FC<DatePickerProps>;
export {};
