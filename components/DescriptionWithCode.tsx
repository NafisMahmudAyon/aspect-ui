import React from 'react'

const DescriptionWithCode = ({description}: {description: string}) => {
  return (
    <p className="text-body1 mt-4">
      {description.split(/(`[^`]+`)/).map((part, index) =>
        part.startsWith('`') && part.endsWith('`') ? (
          <span key={index} className="code mb-1">{part.slice(1, -1)}</span>
        ) : (
          part
        )
      )}
    </p>
  )
}

export default DescriptionWithCode