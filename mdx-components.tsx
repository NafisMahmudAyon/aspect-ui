import type { MDXComponents } from 'mdx/types'
import { Divider } from './app/src'

export const useMDXComponents: (components: MDXComponents) => MDXComponents = (components) => {
  return {
    h2: (props) => (
      <h2
        className="section-title group relative font-semibold text-h5 text-text"
        {...props}>
        {props.children}
        <a
          aria-label={`Link to this section: ${props.children}`}
          href={`#${props.id}`}
          className="ml-2 opacity-0 transition-opacity group-hover:opacity-100">
          #
        </a>
      </h2>
    ),
    h3: (props) => (
      <h3
        className="section-title group relative font-semibold text-h6 text-text"
        {...props}>
        {props.children}
        <a
          aria-label={`Link to this section: ${props.children}`}
          href={`#${props.id}`}
          className="ml-2 opacity-0 transition-opacity group-hover:opacity-100">
          #
        </a>
      </h3>
    ),
    h4: () => (
      <hr className='border-border border-t-[2px] w-full border-solid' />
    ),
    table: (props) => (
      <table className="w-full text-sm text-left border border-border mt-4" {...props} />
    ),
    thead: (props) => <thead className="bg-muted" {...props} />,
    tr: (props) => <tr className="border-b border-border" {...props} />,
    th: (props) => (
      <th className="px-4 py-2 font-semibold text-muted-foreground whitespace-nowrap" {...props} />
    ),
    td: (props) => (
      <td className="px-4 py-2 whitespace-nowrap" {...props} />
    ),

    ...components,
  }
}
