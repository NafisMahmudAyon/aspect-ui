interface StarProps extends React.SVGProps<SVGSVGElement> {
  className?: string
  rest?: React.SVGProps<SVGSVGElement>
  size?: number
}

const Star = ({ className = '', size = 24, ...rest }: StarProps) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 24 22'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
    {...rest}
  >
    <g clipPath='url(#a)'>
      <path
        d='M11.996 0c.383 0 .733.217.9.563l2.858 5.887 6.384.942a.99.99 0 0 1 .804.679c.116.362.02.754-.246 1.02l-4.63 4.592 1.092 6.484a1.002 1.002 0 0 1-1.458 1.05l-5.708-3.05-5.7 3.045a.99.99 0 0 1-1.054-.07 1.01 1.01 0 0 1-.405-.98l1.092-6.483-4.63-4.587A1 1 0 0 1 1.05 8.07c.117-.358.43-.621.804-.68l6.384-.941L11.096.563a1 1 0 0 1 .9-.563m0 3.292L9.808 7.8a1.01 1.01 0 0 1-.754.554l-4.929.725 3.58 3.546c.228.23.337.554.282.875l-.845 4.988 4.383-2.342a1 1 0 0 1 .942 0l4.383 2.342-.842-4.984a.99.99 0 0 1 .284-.875l3.579-3.546-4.93-.729a1 1 0 0 1-.754-.554z'
        fill='currentColor'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='currentColor' d='M0 0h24v21.333H0z' />
      </clipPath>
    </defs>
  </svg>
)

export { Star }
