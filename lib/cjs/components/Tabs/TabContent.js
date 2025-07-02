'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
import { useTabs } from './TabsContext';
export const TabContent = ({ children, id, className = "", ...rest }) => {
    const { activeTab } = useTabs();
    if (activeTab !== id)
        return null;
    return _jsx("div", { className: cn(className), ...rest, children: children });
};
