import { ReactNode } from "react";
interface DropdownItemProps {
    children: ReactNode;
    onClick?: () => void;
    className?: string;
    activeClassName?: string;
    isSelected?: boolean;
}
export declare const DropdownItem: React.FC<DropdownItemProps>;
export {};
