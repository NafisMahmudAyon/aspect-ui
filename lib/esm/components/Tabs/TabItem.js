'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useTabs } from './TabsContext';
import { cn } from '../../utils/cn';
export const TabItem = ({ children, value, disabled, className = "", activeClassName = "", disabledClassName = "", ...rest }) => {
    const { activeTab, setActiveTab } = useTabs();
    return (_jsx("button", { className: cn('rounded px-4 py-2 text-primary-800 dark:text-primary-200 hover:text-primary-900 dark:hover:text-primary-100', activeTab === value
            ? cn('bg-primary-200 dark:bg-primary-900', activeClassName)
            : 'bg-primary-100 hover:bg-primary-200 dark:bg-primary-800 dark:hover:bg-primary-900', disabled && cn("bg-primary-100/50 dark:bg-primary-800/50 hover:bg-primary-100/50 dark:hover:bg-primary-800/50 hover:text-primary-800 dark:hover:text-primary-200", disabledClassName), className), onClick: () => { if (!disabled) {
            setActiveTab(value);
        } }, ...rest, children: children }));
};
