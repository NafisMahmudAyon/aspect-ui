const BodyTypo = () => {
  return (
    <div className='space-y-4'>
      <p className='text-body1'>The quick brown fox jumps over the lazy dog</p>
      <p className='text-body2'>The quick brown fox jumps over the lazy dog</p>
    </div>
  )
}

const BodyTypoCode = {
  Code: `
export const BodyTypography = () => {
  return (
    <div className="space-y-4">
      <p className="text-body1">The quick brown fox jumps over the lazy dog</p>
      <p className="text-body2">The quick brown fox jumps over the lazy dog</p>
    </div>
  )
}
`
}

export { BodyTypo, BodyTypoCode }
