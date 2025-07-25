'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { createContext, useContext, useState } from 'react';
const StepperContext = createContext(undefined);
const Stepper = ({ children, initialStep = 0 }) => {
    const [activeStep, setActiveStep] = useState(initialStep);
    const contextValue = {
        activeStep,
        setActiveStep,
        totalSteps: React.Children.count(children)
    };
    return (_jsx(StepperContext.Provider, { value: contextValue, children: _jsx("div", { className: 'flex items-center', children: React.Children.map(children, (child, index) => (_jsxs(React.Fragment, { children: [index > 0 && (_jsx("div", { className: `mx-2 h-0.5 grow ${index <= activeStep ? 'bg-primary' : 'bg-bg'}` })), React.cloneElement(child, {
                        ...child.props,
                        index
                    })] }, index))) }) }));
};
const StepperItem = ({ icon, label, children, index }) => {
    const context = useContext(StepperContext);
    if (!context) {
        throw new Error('StepperItem must be used within a Stepper');
    }
    const { activeStep, setActiveStep } = context;
    const completed = index !== undefined && index < activeStep;
    const active = index === activeStep;
    const getStateStyles = () => {
        if (completed)
            return 'bg-primary text-primary-foreground';
        if (active)
            return 'border-primary text-text';
        return 'bg-bg border-border text-text-muted';
    };
    const handleClick = () => {
        if (index !== undefined) {
            setActiveStep(index);
        }
    };
    return (_jsxs("div", { className: 'flex flex-col items-center', children: [_jsx("div", { className: `flex h-10 w-10 items-center justify-center rounded-full border-2 ${getStateStyles()} cursor-pointer`, onClick: handleClick, children: completed ? '✓' : icon }), _jsx("p", { className: `mt-2 text-sm ${active ? 'text-text font-medium' : 'text-text-muted'}`, children: label }), children && _jsx("div", { className: 'mt-2', children: children })] }));
};
// Custom hook to access the Stepper context
const useStepper = () => {
    const context = useContext(StepperContext);
    if (!context) {
        throw new Error('useStepper must be used within a Stepper');
    }
    return context;
};
export { Stepper, StepperItem, useStepper };
