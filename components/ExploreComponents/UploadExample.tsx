import { FileUpload } from '@/app/src'

const UploadExample = () => {
  return (
    <div className="w-full">
      <FileUpload
        onFileSelect={(files) => console.log('Selected files:', files)}
        accept=".pdf,.doc,.docx"
        multiple={true}
        maxFiles={5}
        maxFileSize={5} // 5MB
      />
    </div>
  )
}

export default UploadExample