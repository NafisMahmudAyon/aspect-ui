'use client'
import React, { Children, useState } from 'react';

type AlertType = 'success' | 'warning' | 'error' | 'info';

interface AlertProps {
  type: AlertType;
  children: React.ReactNode;
  closeable?: boolean;
  onClose?: () => void;
}

export const Alert: React.FC<AlertProps> = ({ type, children, closeable = true, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) {
      onClose();
    }
  };

  if (!isVisible) return null;

  const getAlertStyles = (): string => {
    const baseStyles = 'px-4 py-3 rounded relative';
    switch (type) {
      case 'success':
        return `${baseStyles} bg-green-100 border border-green-400 text-green-700`;
      case 'warning':
        return `${baseStyles} bg-yellow-100 border border-yellow-400 text-yellow-700`;
      case 'error':
        return `${baseStyles} bg-red-100 border border-red-400 text-red-700`;
      case 'info':
        return `${baseStyles} bg-blue-100 border border-blue-400 text-blue-700`;
      default:
        return baseStyles;
    }
  };

  const getIconStyles = (): string => {
    switch (type) {
      case 'success':
        return 'text-green-500';
      case 'warning':
        return 'text-yellow-500';
      case 'error':
        return 'text-red-500';
      case 'info':
        return 'text-blue-500';
      default:
        return '';
    }
  };

  const getIcon = (): JSX.Element => {
    switch (type) {
      case 'success':
        return <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>;
      case 'warning':
        return <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>;
      case 'error':
        return <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path></svg>;
      case 'info':
        return <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>;
      default:
        return <></>;
    }
  };

  return (
    <div className={getAlertStyles()} role="alert">
      <div className="flex items-center">
        <span className={`mr-2 ${getIconStyles()}`}>
          {getIcon()}
        </span>
        <span className="block sm:inline">{children}</span>
      </div>
      {closeable && (
        <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={handleClose}>
          <svg className="fill-current h-6 w-6 text-gray-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </span>
      )}
    </div>
  );
};