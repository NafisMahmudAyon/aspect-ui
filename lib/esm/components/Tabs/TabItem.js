'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
import { useTabs } from './TabsContext';
export const TabItem = ({ children, id, disabled, className = "", activeClassName = "", disabledClassName = "", onClick, ...rest }) => {
    const { activeTab, setActiveTab } = useTabs();
    return (_jsx("button", { className: cn('rounded-md px-3 py-1.5 border border-transparent text-sm font-medium whitespace-nowrap', activeTab === id
            ? cn('bg-bg-light border-border', activeClassName)
            : disabled && cn("opacity-50 pointer-events-none", disabledClassName), className), onClick: () => { if (!disabled) {
            setActiveTab(id);
            onClick?.();
        } }, ...rest, children: children }));
};
