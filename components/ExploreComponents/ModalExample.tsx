
import { Modal, ModalAction, ModalContent } from '@/app/src'

const ModalExample = () => {
  return (
    <div className='relative w-full flex justify-center items-center'>
      <Modal>
        <ModalAction>Open Modal</ModalAction>
        <ModalContent className="min-w-[360px]">
          <div className=''>
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