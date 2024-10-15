'use client'
import React, { useState, useEffect, useRef } from 'react';

interface NumberCounterProps {
  end: number;
  duration: number;
  decimals?: number;
  onVisible?: boolean;
}

export const NumberCounter: React.FC<NumberCounterProps> = ({ end, duration, decimals = 0, onVisible = false }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const startCounting = () => {
      let start = 0;
      const increment = end / (duration / 16); // 16ms is roughly 60fps
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(start);
        }
      }, 16);
    };

    if (onVisible) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            startCounting();
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      if (counterRef.current) {
        observer.observe(counterRef.current);
      }

      return () => observer.disconnect();
    } else {
      startCounting();
    }
  }, [end, duration, onVisible]);

  return (
    <div ref={counterRef}>
      {count.toFixed(decimals)}
    </div>
  );
};
