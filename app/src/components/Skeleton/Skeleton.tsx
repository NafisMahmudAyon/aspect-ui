'use client'
import React from 'react'
import { cn } from '../../utils/cn'
// import { motion } from 'framer-motion';

type SkeletonVariation = 'text' | 'circular' | 'rectangular' | 'rounded-sm'
// type AnimationType = 'pulse' | 'wave' | 'shimmer';

interface SkeletonProps {
  variation?: SkeletonVariation
  width?: string | number
  height?: string | number
  className?: string
}

export const Skeleton: React.FC<SkeletonProps> = ({
  variation = 'text',
  width,
  height,
  className = '',
  ...rest
}) => {
  const getVariationStyle = () => {
    switch (variation) {
      case 'circular':
        return 'rounded-full'
      case 'rectangular':
        return 'rounded-none'
      case 'rounded-sm':
        return 'rounded-md'
      case 'text':
      default:
        return 'rounded-sm'
    }
  }
  

  return (
    <div
      className={cn('animate-pulse bg-primary-200 dark:bg-primary-800', getVariationStyle(), className)}
      style={{
        width: width || '100%',
        height: height || (variation === 'text' ? '1em' : '100%')
      }}
      {...rest}
    ></div>
  )
}
