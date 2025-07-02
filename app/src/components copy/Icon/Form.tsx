import React from 'react'

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string
  rest?: React.SVGProps<SVGSVGElement>
  size?: number
}

export const Mail = ({ className = '', size = 24, ...rest }: IconProps) => {
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
        d="m3.549 6.733 4.218 2.63c2.059 1.282 3.088 1.923 4.233 1.923s2.174-.642 4.232-1.925l4.23-2.638M11 20h2c3.771 0 5.657 0 6.828-1.172S21 15.771 21 12s0-5.657-1.172-6.828S16.771 4 13 4h-2C7.229 4 5.343 4 4.172 5.172S3 8.229 3 12s0 5.657 1.172 6.828S7.229 20 11 20"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export const Show = ({ className = '', size = 24, ...rest }: IconProps) => {
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
        d="M2.454 13.846a3.78 3.78 0 0 1 0-3.602C4.295 6.85 7.88 4.544 12 4.544s7.705 2.305 9.545 5.7a3.79 3.79 0 0 1 0 3.602c-1.84 3.395-5.425 5.699-9.545 5.699s-7.705-2.304-9.546-5.7Z"
        stroke="currentColor"
        strokeWidth={1.6}
      />
      <path
        d="M15.013 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        stroke="currentColor"
        strokeWidth={1.6}
      />
    </svg>
  )
}
export const Hide = ({ className = '', size = 24, ...rest }: IconProps) => {
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
        d="m2.48 2 19.07 19.07M9.768 4.308c2.724-.46 8.356.279 11.833 6.04.248.413.373.619.396 1.138.023.52-.048.663-.189.952-.318.65-.885 1.476-1.836 2.316m-2.794 2.065c-6.19 4.755-12.097-.478-14.816-4.4-.229-.33-.343-.496-.359-1.106s.04-.7.151-.877C3.02 9.04 5.088 7.088 6.343 6.01m7.18 7.4A2.915 2.915 0 0 1 9.4 9.288"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
      />
    </svg>
  )
}
export const Down = ({ className = '', size = 24, ...rest }: IconProps) => {
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
        d="m18 9-6 6-6.004-6.004"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
