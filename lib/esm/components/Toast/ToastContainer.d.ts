import React from 'react';
interface ToastAction {
    label: string;
    onClick: () => void;
    buttonClassName?: string;
}
interface ToastOptions {
    className?: string;
    containerClassName?: string;
    message: string;
    description?: string;
    messageClassName?: string;
    descriptionClassName?: string;
    type?: 'success' | 'error' | 'info' | 'warning';
    duration?: number;
    action?: ToastAction;
}
export declare const useToast: () => {
    addToast: (options: ToastOptions) => void;
    ToastContainer: React.FC<{}>;
    promise: <T>(promise: Promise<T>, options: {
        loading: string;
        loadingDescription?: string;
        success: string;
        successDescription?: string;
        error: string;
        errorDescription?: string;
    }) => Promise<T>;
};
export {};
