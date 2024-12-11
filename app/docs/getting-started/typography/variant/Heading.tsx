const Heading = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-h1">The quick brown fox</h1>
      <h2 className="text-h2">The quick brown fox</h2>
      <h3 className="text-h3">The quick brown fox</h3>
      <h4 className="text-h4">The quick brown fox</h4>
      <h5 className="text-h5">The quick brown fox</h5>
      <h6 className="text-h6">The quick brown fox</h6>
    </div>
  )
}

const HeadingCode = {
  Code: `
export const HeadingTypography = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-h1">The quick brown fox</h1>
      <h2 className="text-h2">The quick brown fox</h2>
      <h3 className="text-h3">The quick brown fox</h3>
      <h4 className="text-h4">The quick brown fox</h4>
      <h5 className="text-h5">The quick brown fox</h5>
      <h6 className="text-h6">The quick brown fox</h6>
    </div>
  )
}
`,
}

export { Heading, HeadingCode }
