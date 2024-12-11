import type { MDXComponents } from 'mdx/types'

export const useMDXComponents: (components: MDXComponents) => MDXComponents = (components) => {
  return {
    h2: (props) => (
      <h2
        className="section-title group relative font-semibold text-h5"
        {...props}>
        {props.children}
        <a
          aria-label={`Link to this section: ${props.children}`}
          href={`#${props.id}`}
          className="ml-2 text-metal-500 opacity-0 transition-opacity group-hover:opacity-100">
          #
        </a>
      </h2>
    ),
    ...components,
  }
}
