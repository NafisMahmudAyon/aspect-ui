'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useTabs } from './TabsContext';
import { cn } from '../../utils/cn';
export const TabContent = ({ children, id, className = "", ...rest }) => {
    const { activeTab } = useTabs();
    if (activeTab !== id)
        return null;
    return _jsx("div", { className: cn('text-primary-800 dark:text-primary-200 ', className), ...rest, children: children });
};
