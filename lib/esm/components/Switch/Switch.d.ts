import React from 'react';
interface SwitchProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
    label?: string;
    className?: string;
    switchClassName?: string;
    activeClassName?: string;
    deactiveClassName?: string;
    activeSwitchClassName?: string;
    deactiveSwitchClassName?: string;
    labelClassName?: string;
    switchIconEnabled?: boolean;
    activeSwitchIcon?: React.ReactNode;
    deactiveSwitchIcon?: React.ReactNode;
    size?: "small" | "medium" | "large";
}
export declare const Switch: React.FC<SwitchProps>;
export {};
