// C:\All File\React Project\aspect-ui-tsx\app\src\components\Upload\Upload.tsx

'use client'

import { Trash2 } from 'lucide-react'
import React, { ChangeEvent, useRef, useState } from 'react'
import { cn } from '../../utils/cn'

interface FileUploadProps {
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

export const FileUpload: React.FC<FileUploadProps> = ({
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
        className={`flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-border hover:bg-bg-light/50 transition-all duration-200 ${dragActive ? 'bg-bg-light/50' : ''
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
            className={cn("mb-3 h-10 w-10 text-text", uploadIconClassName)}
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
          <p className="mb-2 text-body1 text-text">
            <span className="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs text-text-muted">
            {multiple ? `Upload up to ${maxFiles} files` : 'Upload a file'}
            {maxFileSize && ` (Max size: ${maxFileSize}MB)`}
          </p></>)}
        {error && <p className="mt-2 text-xs text-error-500">{error}</p>}
      </div>

      {/* Selected Files List */}
      {files.length > 0 && (
        <div className="mt-4">
          <h4 className="mb-2 text-sm font-medium text-text">Selected Files:</h4>
          <ul className="space-y-2">
            {files.map((file, index) => (
              <li
                key={`${file.name}-${index}`}
                className="flex items-center justify-between rounded-lg bg-bg-light text-text p-2 px-4"
              >
                <span className="text-sm">{file.name}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    removeFile(index)
                  }}
                  className="text-error"
                >
                  {deleteButton ? deleteButton :
                    <Trash2 className={cn("h-4 w-4", deleteIconClassName)} />
                  }
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
