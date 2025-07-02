import React from 'react'

interface AvatarProps extends React.SVGProps<SVGSVGElement> {
  className?: string
  rest?: React.SVGProps<SVGSVGElement>
  size?: number
}

export const Avatar = ({ className = '', size = 24, ...rest }: AvatarProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...rest}
    >
      <path
        d='M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-4 7c-2.848 0-5.35 1.302-6.767 3.264-.75 1.038-1.125 1.556-.568 2.646S6.148 21 8 21h8c1.851 0 2.777 0 3.334-1.09s.182-1.608-.568-2.646C17.35 15.302 14.848 14 12 14Z'
        stroke='currentColor'
        strokeWidth={1.6}
      />
    </svg>
  )
}
