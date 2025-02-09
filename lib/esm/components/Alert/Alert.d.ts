import React from 'react';
type AlertType = 'success' | 'warning' | 'error' | 'info';
interface AlertProps {
    type: AlertType;
    children: React.ReactNode;
    closeable?: boolean;
    onClose?: () => void;
    className?: string;
}
export declare const Alert: React.FC<AlertProps>;
export {};
