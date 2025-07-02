import React, { ReactNode } from 'react';
type ToggleButtonGroupType = 'single' | 'multiple';
interface ToggleButtonGroupContextType {
    type: ToggleButtonGroupType;
    selectedValues: string | string[];
    handleChange: (value: string) => void;
    outline?: boolean;
    disabled?: boolean;
    size?: 'small' | 'medium' | 'large';
}
export declare const useToggleButtonGroup: () => ToggleButtonGroupContextType;
interface ToggleButtonGroupProviderProps {
    children: ReactNode;
    type: ToggleButtonGroupType;
    defaultValue?: string | string[];
    onChange?: (value: string | string[]) => void;
    outline?: boolean;
    disabled?: boolean;
    size?: 'small' | 'medium' | 'large';
}
export declare const ToggleButtonGroupProvider: React.FC<ToggleButtonGroupProviderProps>;
export {};
