import { Alert } from '@/app/src'

// https://localhost:3000/examples/data/components/alert/multiple-type-alert
export const MultipleTypeAlert = () => {
  return (
    <div className='space-y-3'>
      <Alert type='success' closeable={false}>
        Operation completed successfully!
      </Alert>
      <Alert type='info' closeable={false}>
        This is an informational message for your reference.
      </Alert>
      <Alert type='warning' closeable={false}>
        Warning: This action requires your attention!
      </Alert>
      <Alert type='error' closeable={false}>
        Error: Operation failed! Please try again.
      </Alert>
    </div>
  )
}
