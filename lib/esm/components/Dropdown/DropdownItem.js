'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
import { useDropdown } from "./DropdownContext";
export const DropdownItem = ({ children, className = '', activeClassName = '', onClick, isSelected = false, isLink = false, ...rest }) => {
    const { closeDropdown } = useDropdown();
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
        closeDropdown();
    };
    if (isLink === true) {
        return (_jsx("a", { href: '#', className: cn('block px-4 py-2 text-sm text-nowrap hover:bg-bg-light/80', className, isSelected ? cn("bg-bg-light", activeClassName) : ''), role: 'option', "area-selected": isSelected, onClick: handleClick, "data-selected": isSelected, ...rest, children: children }));
    }
    return (_jsx("div", { className: cn('block px-4 py-2 text-sm text-nowrap hover:bg-bg-light/80', className, isSelected ? cn("bg-bg-light", activeClassName) : ''), "are-selected": isSelected, role: 'option', onClick: handleClick, "data-selected": isSelected, ...rest, children: children }));
};
