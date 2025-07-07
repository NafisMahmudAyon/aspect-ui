'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
import { useTabs } from './TabsContext';
export const TabItem = ({ children, id, disabled, className = '', activeClassName = '', disabledClassName = '', onClick, ...rest }) => {
    const { activeTab, setActiveTab } = useTabs();
    return (_jsx("button", { className: cn('rounded-md border border-transparent px-3 py-1.5 text-sm font-medium whitespace-nowrap', activeTab === id
            ? cn('bg-bg-light border-border', activeClassName)
            : disabled && cn('pointer-events-none opacity-50', disabledClassName), className), onClick: () => {
            if (!disabled) {
                setActiveTab(id);
                onClick?.();
            }
        }, ...rest, children: children }));
};
