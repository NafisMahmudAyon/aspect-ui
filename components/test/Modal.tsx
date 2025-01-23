'use client'
import { useToast } from '@/app/src'
import { Modal, ModalAction, ModalContent } from '@/app/src/components/Modal'
import React, { useState } from 'react'

const ModalDemo = () => {
  const { addToast, ToastContainer } = useToast()

  const showToast = (type: 'success' | 'error' | 'info' | 'warning') => {
    addToast({
      message: `This is a ${type} toast message!`,
      type,
      duration: 3000
    })
  }

  const [isModalOpen, setIsModalOpen] = useState(false)
  console.log(isModalOpen)

  const toggleModal = (isOpen: boolean) => {
    setIsModalOpen(isOpen)
  }

  return (
    <div>
      <Modal>
        <ModalAction>Open Modal</ModalAction>
        <ModalContent>
          <div className='border p-4 rounded-md bg-primary-100 text-primary-800'>
            <h2 className='mb-2 text-2xl font-bold'>Modal Title</h2>
            <p className='mb-4'>This is the modal content.</p>
            <button
          onClick={() => showToast('success')}
          className='rounded-sm bg-green-500 px-4 py-2 text-white'
        >
          Show Success Toast
        </button>
            <ModalAction>Close</ModalAction>
          </div>
        </ModalContent>
      </Modal>
      <Modal>
        <ModalAction>Open Modal2</ModalAction>
        <ModalContent>
          <h2 className='mb-2 text-2xl font-bold'>Modal Title2</h2>
          <p className='mb-4'>This is the modal content 2.</p>
          <ModalAction>Close2</ModalAction>
        </ModalContent>
      </Modal>
      <button onClick={() => toggleModal(true)}>Open Modal Externally</button>

      <Modal isOpenExternal={isModalOpen} onToggle={toggleModal}>
        <ModalContent>
        <div className="aspect-ui-modal">
      <button onClick={() => toggleModal(false)}>Close Modal Externally</button>
          <h1>Modal Content</h1>
        </div></ModalContent>
      </Modal>
      <ToastContainer />
    </div>
  )
}

export default ModalDemo
