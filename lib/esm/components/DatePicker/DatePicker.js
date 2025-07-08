'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '../../utils/cn';
import { Dropdown, DropdownAction, DropdownContent, DropdownItem, DropdownList } from '../Dropdown';
import { Popover, PopoverAction, PopoverContent } from '../Popover';
export const DatePicker = ({ onChange, initialDates = [], isRange = false, shape = 'circle', placeholder = 'Select your date', className = '', calendarContainerClassName = '' }) => {
    const [currentDate, setCurrentDate] = useState(() => {
        const initDate = Array.isArray(initialDates) && initialDates.length > 0
            ? new Date(initialDates[0])
            : new Date();
        return initDate;
    });
    const [selectedDates, setSelectedDates] = useState(initialDates.map(date => new Date(date)));
    const [years, setYears] = useState([]);
    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    useEffect(() => {
        const currentYear = new Date().getFullYear();
        setYears(Array.from({ length: 201 }, (_, i) => currentYear - 100 + i));
    }, []);
    const daysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = (date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    const generateCalendar = () => {
        const days = daysInMonth(currentDate);
        const startDay = firstDayOfMonth(currentDate);
        const calendarDays = [];
        for (let i = 0; i < startDay; i++) {
            calendarDays.push(null);
        }
        for (let i = 1; i <= days; i++) {
            calendarDays.push(new Date(currentDate.getFullYear(), currentDate.getMonth(), i));
        }
        return calendarDays;
    };
    const handleDateClick = (date) => {
        let newDates = [];
        if (isRange) {
            if (selectedDates.length === 0) {
                newDates = [date];
            }
            else if (selectedDates.length === 1) {
                newDates = [selectedDates[0], date].sort((a, b) => a.getTime() - b.getTime());
            }
            else if (selectedDates.length === 2) {
                if (date.getTime() === selectedDates[0].getTime() ||
                    date.getTime() === selectedDates[1].getTime()) {
                    newDates = [];
                }
                else if (date > selectedDates[0] && date < selectedDates[1]) {
                    newDates = [selectedDates[0], date];
                }
                else if (date < selectedDates[0]) {
                    newDates = [date, selectedDates[1]];
                }
                else {
                    newDates = [selectedDates[0], date];
                }
            }
        }
        else {
            newDates = [date];
        }
        setSelectedDates(newDates);
        onChange(newDates);
    };
    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };
    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };
    const formatDate = (date) => {
        const day = date.getDate();
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();
        const suffix = ['th', 'st', 'nd', 'rd'][day % 10 > 3 ? 0 : (day % 100) - (day % 10) != 10 ? day % 10 : 0];
        return `${month} ${day}${suffix}, ${year}`;
    };
    const formatDateRange = (dates) => {
        if (dates.length === 0)
            return placeholder;
        if (dates.length === 1)
            return formatDate(dates[0]);
        if (isRange && dates.length === 2) {
            return `${formatShortDate(dates[0])} - ${formatShortDate(dates[1])}`;
        }
        return formatDate(dates[0]);
    };
    const formatShortDate = (date) => {
        const monthNames = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ];
        return `${monthNames[date.getMonth()]} ${date.getDate().toString().padStart(2, '0')}, ${date.getFullYear()}`;
    };
    return (_jsx("div", { className: 'relative', children: _jsxs(Popover, { children: [_jsx(PopoverAction, { className: cn('border-border bg-bg focus-visible:outlined w-full rounded-md border px-4 py-2 outline-hidden', className), children: formatDateRange(selectedDates) }), _jsx(PopoverContent, { className: 'w-auto p-0', children: _jsxs("div", { className: cn('bg-bg rounded-md p-4 shadow-lg', calendarContainerClassName), children: [_jsxs("div", { className: 'flex items-center justify-between gap-2 py-2', children: [_jsx("button", { onClick: handlePrevMonth, className: cn('border-border border p-1', shape === 'circle'
                                            ? 'rounded-full'
                                            : shape === 'rounded-sm'
                                                ? 'rounded-md'
                                                : ''), children: _jsx(ChevronLeft, {}) }), _jsxs("div", { className: 'flex flex-1 justify-center gap-3', children: [_jsxs(Dropdown, { children: [_jsx(DropdownAction, { className: '', children: monthNames[currentDate.getMonth()] }), _jsx(DropdownContent, { children: _jsx(DropdownList, { children: monthNames.map((month, index) => (_jsx(DropdownItem, { className: `${currentDate.getMonth() == index ? 'bg-bg-light' : ''}`, onClick: () => {
                                                                    const cDate = new Date();
                                                                    if (cDate.getMonth() === index) {
                                                                        setCurrentDate(new Date(currentDate.getFullYear(), index, cDate.getDate()));
                                                                    }
                                                                    else
                                                                        setCurrentDate(new Date(currentDate.getFullYear(), index, 1));
                                                                }, children: month }, month))) }) })] }), _jsxs(Dropdown, { children: [_jsx(DropdownAction, { className: '', children: currentDate.getFullYear() }), _jsx(DropdownContent, { className: 'overflow-y-auto', style: { maxHeight: '300px' }, children: _jsx(DropdownList, { children: years.map(year => (_jsx(DropdownItem, { className: ``, activeClassName: 'bg-bg-light', onClick: () => {
                                                                    if (year == new Date().getFullYear() &&
                                                                        currentDate.getMonth() == new Date().getMonth()) {
                                                                        const cDate = new Date();
                                                                        setCurrentDate(new Date(year, cDate.getMonth(), cDate.getDate()));
                                                                    }
                                                                    else
                                                                        setCurrentDate(new Date(year, currentDate.getMonth(), 1));
                                                                }, isSelected: year === currentDate.getFullYear(), children: year }, year))) }) })] })] }), _jsx("button", { onClick: handleNextMonth, className: cn('border-border border p-1', shape === 'circle'
                                            ? 'rounded-full'
                                            : shape === 'rounded-sm'
                                                ? 'rounded-md'
                                                : ''), children: _jsx(ChevronRight, {}) })] }), _jsxs("div", { className: 'grid grid-cols-[repeat(7,minmax(2rem,1fr))] gap-1', children: [_jsx("div", { className: 'border-border col-start-1 col-end-8 grid grid-cols-[repeat(7,minmax(2rem,1fr))] gap-1 border-t border-b', children: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (_jsx("div", { className: 'flex size-8 items-center justify-center text-center text-sm font-bold', children: day }, day))) }), generateCalendar().map((date, index) => (_jsx("button", { onClick: () => date && handleDateClick(date), className: cn('h-8 w-8 text-center', shape === 'circle'
                                            ? 'rounded-full'
                                            : shape === 'rounded-sm'
                                                ? 'rounded-md'
                                                : '', !date && 'invisible', date && 'hover:bg-primary hover:text-bg-light', date &&
                                            date.getDate() === currentDate.getDate() &&
                                            ((isRange && selectedDates.length < 2) ||
                                                (!isRange && selectedDates.length === 0)) &&
                                            'bg-bg-light', date &&
                                            selectedDates.some(d => d.toDateString() === date.toDateString()) &&
                                            'bg-primary text-bg-light', date &&
                                            isRange &&
                                            selectedDates.length === 2 &&
                                            date > selectedDates[0] &&
                                            date < selectedDates[1] &&
                                            'bg-primary text-bg-light'), children: date ? date.getDate() : '' }, index)))] })] }) })] }) }));
};
