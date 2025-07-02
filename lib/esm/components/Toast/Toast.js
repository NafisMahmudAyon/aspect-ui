'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import { cn } from '../../utils/cn';
const Toast = ({ className = '', containerClassName = '', message, description, messageClassName = '', messageAreaClassName = '', descriptionClassName = '', type = 'info', duration = 3000, onClose, action, isNew = false, toastId, }) => {
    useEffect(() => {
        if (duration === Infinity)
            return;
        const timer = setTimeout(() => {
            if (onClose)
                onClose();
        }, duration);
        return () => clearTimeout(timer);
    }, [duration, onClose]);
    const handleClose = () => {
        if (onClose)
            onClose();
    };
    const getBackgroundColor = () => {
        switch (type) {
            case 'success':
                return 'bg-success text-success-foreground';
            case 'error':
                return 'bg-error text-error-foreground';
            case 'warning':
                return 'bg-warning text-warning-foreground';
            default:
                return 'bg-bg text-text';
        }
    };
    return (_jsx(motion.div, { layoutId: toastId, layout: true, initial: isNew ? {
            opacity: 0,
            x: 300, // Only new toasts slide in from right
            scale: 0.9
        } : false, animate: {
            opacity: 1,
            x: 0,
            scale: 1,
        }, exit: {
            opacity: 0,
            x: 300, // Only removed toast slides out to right
            scale: 0.9
        }, transition: {
            duration: 0.3,
            ease: [0.4, 0.0, 0.2, 1],
            layout: { duration: 0.2, ease: 'easeInOut' }
        }, className: cn('w-[280px] rounded-md shadow-lg transition-colors', getBackgroundColor(), className), children: _jsxs("div", { className: cn('flex items-start justify-between p-4', containerClassName), children: [_jsxs("div", { className: messageAreaClassName, children: [_jsx("div", { className: cn('font-medium', messageClassName), children: message }), description && (_jsx("div", { className: cn('mt-1 text-sm text-text-muted', descriptionClassName), children: description }))] }), action ? (_jsx("button", { onClick: action.onClick, className: cn('ml-4 rounded-md px-2 py-1 text-sm font-medium', action.buttonClassName), children: action.label })) : (_jsx("button", { onClick: handleClose, className: "ml-4 text-lg font-bold opacity-60 hover:opacity-100", "aria-label": "Close", children: "\u00D7" }))] }) }));
};
export const useToast = () => {
    const [toasts, setToasts] = useState([]);
    const toast = useCallback((options) => {
        const id = options.id || `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        const newToast = {
            ...options,
            id,
            isNew: true,
            timestamp: Date.now()
        };
        setToasts(prev => {
            // Mark all existing toasts as not new
            const updatedPrev = prev.map(toast => ({ ...toast, isNew: false }));
            // Add new toast at the beginning (bottom visually)
            return [newToast, ...updatedPrev];
        });
        // Mark toast as not new after initial animation
        setTimeout(() => {
            setToasts(prev => prev.map(toast => toast.id === id ? { ...toast, isNew: false } : toast));
        }, 300);
    }, []);
    const removeToast = useCallback((id) => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
    }, []);
    async function promise(promise, options) {
        const loadingId = `loading-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        toast({
            id: loadingId,
            message: options.loading,
            description: options.loadingDescription,
            type: 'info',
            duration: Infinity,
        });
        try {
            const result = await promise;
            removeToast(loadingId);
            toast({
                message: options.success,
                description: options.successDescription,
                type: 'success',
            });
            return result;
        }
        catch (error) {
            removeToast(loadingId);
            toast({
                message: options.error,
                description: options.errorDescription,
                type: 'error',
            });
            throw error;
        }
    }
    const ToastContainer = ({ limit = 5 }) => (_jsx("div", { className: "fixed bottom-4 right-4 flex flex-col-reverse gap-2 z-[9999]", children: _jsx(AnimatePresence, { children: toasts.slice(0, limit).map((toastItem) => (_jsx(Toast, { toastId: toastItem.id, ...toastItem, onClose: () => removeToast(toastItem.id) }, toastItem.id))) }) }));
    return { toast, ToastContainer, promise };
};
