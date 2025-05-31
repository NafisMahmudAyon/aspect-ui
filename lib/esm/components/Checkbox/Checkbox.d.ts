import React from 'react';
interface CheckboxProps {
    /**
     * Label for the checkbox
     * @default ""
     * @example
     * ```tsx
     * <Checkbox label="Label"/>
     * ```
     */
    label?: string;
    /**
     * Whether the checkbox is checked or not
     * @default false
     * @example
     * ```tsx
     * <Checkbox checked={true} />
     * ```
     */
    checked: boolean;
    /**
     * Additional CSS classes to apply to the checkbox
     * @default ""
     * @example
     * ```tsx
     * <Checkbox checkboxClassName="w-5 h-5" />
     * ```
     */
    checkboxClassName?: string;
    /**
     * Callback function to be called when the checkbox state changes
     * @default undefined
     * @example
     * ```tsx
     * <Checkbox onChange={(checked) => console.log(checked)} />
     * ```
     */
    onChange?: (checked: boolean) => void;
    /**
     * Whether the checkbox is disabled or not
     * @default false
     * @example
     * ```tsx
     * <Checkbox disabled={true} />
     * ```
     */
    disabled?: boolean;
    /**
     * Additional CSS classes to apply to the checkbox container
     * @default ""
     * @example
     * ```tsx
     * <Checkbox className="w-5 h-5" />
     * ```
     */
    className?: string;
    /**
     * Additional CSS classes to apply to the label
     * @default ""
     * @example
     * ```tsx
     * <Checkbox labelClassName="text-lg" />
     * ```
     */
    labelClassName?: string;
}
/**
 * Checkbox component
 * @param {CheckboxProps} props - The props for the checkbox component
 * @returns {JSX.Element} The checkbox component
 * @link https://aspect-ui.vercel.app/docs/components/checkbox
 * @example
 * ```tsx
 * import { Checkbox } from '@/components/aspect-ui/Checkbox'
 * <Checkbox label="Label" checked={true} onChange={(checked) => console.log(checked)} />
 * ```
 */
export declare const Checkbox: React.FC<CheckboxProps>;
export {};
/**
 * Component Checkbox
 * version: 1.0.0
 * author: Nafis Mahmud Ayon
 * license: MIT
 * repository: https://github.com/NafisMahmudAyon/aspect-ui
 */ 
