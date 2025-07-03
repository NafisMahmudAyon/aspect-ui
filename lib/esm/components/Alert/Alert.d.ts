import React from 'react';
type AlertType = 'success' | 'warning' | 'error' | 'info';
interface AlertProps {
    type: AlertType;
    children: React.ReactNode;
    closeable?: boolean;
    onClose?: () => void;
    className?: string;
    icon?: React.ReactNode;
}
export declare const Alert: React.FC<AlertProps>;
export {};
