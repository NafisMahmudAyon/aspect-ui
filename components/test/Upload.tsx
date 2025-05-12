'use client'

import React from 'react'
import { Upload } from '@/app/src/components/Upload'

const FileUploadDemo = () => {
  // const handleFileSelect = (file: File) => {
  //   console.log('Selected file:', file)
  //   // Here you can implement your file upload logic
  //   // For example, you might want to send the file to a server using an API call
  // }
  return (
    <div>
      <h1 className='mb-4 text-3xl font-bold'>File Upload Example</h1>
      {/* <FileUpload
        onFileSelect={handleFileSelect}
        accept='image/*'
        multiple={true}
      /> */}
      <Upload
        onFileSelect={(files) => console.log('Selected files:', files)}
        accept=".pdf,.doc,.docx"
        multiple={true}
        maxFiles={5}
        maxFileSize={5} // 5MB
      />
    </div>
  )
}

export default FileUploadDemo
