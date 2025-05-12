import { Upload } from '@/app/src'

const UploadExample = () => {
  return (
    <div className="w-full">
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

export default UploadExample