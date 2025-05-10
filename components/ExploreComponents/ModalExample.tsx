
import { Modal, ModalAction, ModalContent } from '@/app/src'

const ModalExample = () => {
  return (
    <div className='relative w-full flex justify-center items-center'>
      <Modal>
        <ModalAction>Open Modal</ModalAction>
        <ModalContent overlayClassName='absolute'>
          <div className='border p-4 rounded-md bg-primary-100 text-primary-800'>
            <h2 className='mb-2 text-2xl font-bold'>Modal Title</h2>
            <p className='mb-4'>This is the modal content.</p>
            <ModalAction>Close</ModalAction>
          </div>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default ModalExample