'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

export default function RouteProgress() {
  const pathname = usePathname();
  const prevPath = useRef(pathname);

  useEffect(() => {
    NProgress.configure({ showSpinner: false, speed: 400, easing: 'ease-in-out' });

    // Trigger on link clicks before navigation happens
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a')) {
        NProgress.start();
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    if (prevPath.current !== pathname) {
      // Complete the progress bar after route change
      setTimeout(() => {
        NProgress.done();
      }, 30);
      prevPath.current = pathname;
    }
  }, [pathname]);

  return null;
}
