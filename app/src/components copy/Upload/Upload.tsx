// C:\All File\React Project\aspect-ui-tsx\app\src\components\Upload\Upload.tsx

'use client'

import React, { useState, useRef, ChangeEvent } from 'react'
import { cn } from '../../utils/cn'

interface UploadProps {
  onFileSelect: (files: File[]) => void
  accept?: string
  multiple?: boolean
  maxFiles?: number
  maxFileSize?: number
  selectedFiles?: File[]
  content?: React.ReactNode
  uploadIcon?: React.ReactNode
  deleteButton?: React.ReactNode
  uploadIconClassName?: string
  deleteIconClassName?: string
}

export const Upload: React.FC<UploadProps> = ({
  onFileSelect,
  accept = '*',
  multiple = false,
  maxFiles = 1,
  maxFileSize,
  selectedFiles = [],
  content,
  uploadIcon,
  deleteButton,
  uploadIconClassName = "",
  deleteIconClassName = "",
  ...rest
}) => {
  const [dragActive, setDragActive] = useState(false)
  const [files, setFiles] = useState<File[]>(selectedFiles)
  const [error, setError] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)

  const validateFile = (file: File): boolean => {
    if (maxFileSize && file.size > maxFileSize * 1024 * 1024) { // Convert MB to bytes
      setError(`File size exceeds ${maxFileSize}MB limit`)
      return false
    }

    if (accept !== '*') {
      const acceptedTypes = accept.split(',').map(type => type.trim())
      const fileType = file.type || `/*.${file.name.split('.').pop()}`
      if (!acceptedTypes.some(type => fileType.match(new RegExp(type.replace('*', '.*'))))) {
        setError(`File type not accepted. Accepted types: ${accept}`)
        return false
      }
    }

    return true
  }

  const handleFiles = (newFiles: FileList) => {
    setError('')
    const validFiles: File[] = []

    for (let i = 0; i < newFiles.length; i++) {
      if (files.length + validFiles.length >= maxFiles) {
        setError(`Maximum ${maxFiles} files allowed`)
        break
      }

      if (validateFile(newFiles[i])) {
        validFiles.push(newFiles[i])
      }
    }

    if (validFiles.length > 0) {
      const updatedFiles = multiple ? [...files, ...validFiles] : validFiles
      setFiles(updatedFiles)
      onFileSelect(updatedFiles)
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (e.target.files) {
      handleFiles(e.target.files)
    }
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files) {
      handleFiles(e.dataTransfer.files)
    }
  }

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const removeFile = (indexToRemove: number) => {
    const updatedFiles = files.filter((_, index) => index !== indexToRemove)
    setFiles(updatedFiles)
    onFileSelect(updatedFiles)
  }

  const onButtonClick = () => {
    inputRef.current?.click()
  }

  return (
    <div className="w-full" {...rest}>
      <div
        className={`flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed ${dragActive ? 'border-blue-500 bg-primary-50 dark:bg-primary-950' : 'border-primary-300 dark:border-primary-800'
          }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={onButtonClick}
      >
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          multiple={multiple}
          accept={accept}
          onChange={handleChange}
        />
        {!content && (<>{uploadIcon && <span className={cn("", uploadIconClassName)}>{uploadIcon}</span>}
          {!uploadIcon && (<svg
            className={cn("mb-3 h-10 w-10 text-primary-800 dark:text-primary-200", uploadIconClassName)}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            ></path>
          </svg>)}
          <p className="mb-2 text-body1 text-primary-800 dark:text-primary-200">
            <span className="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs text-primary-800 dark:text-primary-200">
            {multiple ? `Upload up to ${maxFiles} files` : 'Upload a file'}
            {maxFileSize && ` (Max size: ${maxFileSize}MB)`}
          </p></>)}
        {error && <p className="mt-2 text-xs text-error-500">{error}</p>}
      </div>

      {/* Selected Files List */}
      {files.length > 0 && (
        <div className="mt-4">
          <h4 className="mb-2 text-sm font-medium text-primary-800 dark:text-primary-200">Selected Files:</h4>
          <ul className="space-y-2">
            {files.map((file, index) => (
              <li
                key={`${file.name}-${index}`}
                className="flex items-center justify-between rounded-lg bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 p-2 px-4"
              >
                <span className="text-sm">{file.name}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    removeFile(index)
                  }}
                  className="text-red-500 hover:text-red-700"
                >
                  <svg
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m7.81 1.76-.31.615H3.375C2.615 2.375 2 2.989 2 3.75c0 .76.614 1.375 1.375 1.375h16.5c.76 0 1.375-.614 1.375-1.375 0-.76-.614-1.375-1.375-1.375H15.75l-.31-.614A1.37 1.37 0 0 0 14.213 1H9.038c-.52 0-.997.292-1.229.76M19.874 6.5h-16.5l.91 14.566A2.064 2.064 0 0 0 6.346 23h10.56c1.088 0 1.99-.846 2.06-1.934z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
