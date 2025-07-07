// ./app/src/components/Navbar/NavbarCollapse.tsx
'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { AnimatePresence, motion } from 'framer-motion';
import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { useNavbar } from './NavbarContext';
export const NavbarCollapseComponent = forwardRef(({ children, className, ...rest }, ref) => {
    const { isCollapsed } = useNavbar();
    return (_jsx(AnimatePresence, { children: !isCollapsed && (_jsx(motion.div, { initial: { y: '20px', opacity: 0 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.3, ease: 'anticipate' }, exit: { opacity: 0, y: '20px' }, ref: ref, ...rest, className: cn(`bg-bg border-border absolute top-full right-0 left-0 z-[1000] rounded-md rounded-t-none border p-4 shadow-md ${isCollapsed ? 'hidden' : 'flex flex-col'}`, className), children: children })) }));
});
NavbarCollapseComponent.displayName = 'NavbarCollapse';
export const NavbarCollapse = NavbarCollapseComponent;
