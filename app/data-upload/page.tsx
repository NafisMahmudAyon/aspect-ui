'use client'
import { useState } from 'react';
import { Button, Card, CardContent, CardHeader, CardTitle, Divider, Input, Switch, Textarea, ToggleButton, ToggleButtonGroup, useToast } from '../src';

interface ComponentData {
  dependencies: string[];
  files: FileData[];
}

interface JsonData {
  name: string;
  type: string;
  author: string;
  title: string;
}

interface FileData {
  path: string;
  content: string;
  type: string;
  target: string;
}

const page = () => {
  const { addToast, ToastContainer } = useToast()
  const [url, setUrl] = useState('/examples/components/accordion')
  const [codeTsx, setcodeTsx] = useState('')
  const [codeJsx, setcodeJsx] = useState('')
  const [title, setTitle] = useState('')
  const [pro, setPro] = useState(false)
  const [tsxJSON, setTsxJSON] = useState<ComponentData>({
    dependencies: [],
    files: []
  })
  const [tsxFiles, setTsxFiles] = useState<FileData[]>([{
    path: 'components/aspect-ui/',
    content: '',
    type: '',
    target: ''
  }])
  const [jsonData, setJsonData] = useState<JsonData>({
    name: '',
    type: '',
    author: 'Nafis Mahmud Ayon <nafismahmudayon@gmail.com>',
    title: '',
  })
  const [jsxJSON, setJsxJSON] = useState<ComponentData>({
    dependencies: [],
    files: []
  })
  const [jsxFiles, setJsxFiles] = useState<FileData[]>([{
    path: 'components/aspect-ui/',
    content: '',
    type: '',
    target: ''
  }])
  const [categories, setCategories] = useState<string[]>([])
  const [subCategory, setSubCategory] = useState<string>('')
  const handleMultipleChange = (value: string | string[]) => {
    setCategories(Array.isArray(value) ? value : [value])
  }

  const handleUpload = async () => {
    // jsxFiles all content stringify then join with ","
    // const jsxFilesContent = jsxFiles.map((file) => file.content).join(",")
    // const tsxFilesContent = tsxFiles.map((file) => file.content).join(",")
    const finalTsxJSON = JSON.stringify({ ...jsonData, ...tsxJSON, files: tsxFiles })
    const finalJsxJSON = JSON.stringify({ ...jsonData, ...jsxJSON, files: jsxFiles })

    const subCategories = subCategory.split(", ").map((item) => item.trim())

    const res = await fetch("/api/insert-example", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, url, codeTsx, codeJsx, pro, jsonTsx: finalTsxJSON, jsonJsx: finalJsxJSON, categories, subCategories }),
    });
    const data = await res.json();
    showToaster(data.success ? 'success' : 'error', data.success ? 'Upload successful' : 'Upload failed')
  };

  const showToaster = (type: 'success' | 'error', message: string) => {
    addToast({
      className: "",
      message: message,
      messageClassName: "",
      type: type
    })
  }



  return (
    <div className='min-h-screen pt-10 container mx-auto space-y-4'>
      <h1 className='text-h1 text-center'>Data Upload</h1>
      {/* <Input placeholder="Example-id" type="number" value={id} onChange={(e) => setId(Number(e.target.value))} /> */}
      <Input placeholder="Title" label='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
      <Input placeholder="Example-url" label='Example-url' value={url} onChange={(e) => setUrl(e.target.value)} />
      <Textarea placeholder="Code TSX" label='Code TSX' value={codeTsx} onChange={(e) => setcodeTsx(e.target.value)} />
      <Textarea placeholder="Code JSX" label='Code JSX' value={codeJsx} onChange={(e) => setcodeJsx(e.target.value)} />
      <fieldset className='flex items-center gap-2'>
        <label>Pro</label>
        <Switch checked={pro} onChange={() => setPro(!pro)} />
      </fieldset>
      <Card className='bg-primary-100/50 dark:bg-primary-900/50'>
        <CardHeader>
          <CardTitle>Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <ToggleButtonGroup type='multiple' defaultValue={categories} outline={true} onChange={handleMultipleChange}>
            <ToggleButton value='docs'>Docs</ToggleButton>
            <ToggleButton value='variations'>Variations</ToggleButton>
            <ToggleButton value='template'>Template</ToggleButton>
            <ToggleButton value='page'>Full page</ToggleButton>
          </ToggleButtonGroup>
        </CardContent>
        <CardHeader>
          <CardTitle>Sub Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <Input placeholder="Sub Category" value={subCategory} onChange={(e) => setSubCategory(e.target.value)} />
        </CardContent>
      </Card>
      <Card className='border rounded-lg p-4'>
        <CardHeader>
          <CardTitle>JSON Data</CardTitle>
        </CardHeader>
        <CardContent>
          <Input placeholder="Name" value={jsonData?.name} onChange={(e) => setJsonData({ ...jsonData, name: e.target.value })} />
          <Input placeholder="Type" value={jsonData?.type} onChange={(e) => setJsonData({ ...jsonData, type: e.target.value })} />
          <Input placeholder="Author" value={jsonData?.author} onChange={(e) => setJsonData({ ...jsonData, author: e.target.value })} />
          <Input placeholder="Title" value={jsonData?.title} onChange={(e) => setJsonData({ ...jsonData, title: e.target.value })} />
          <Divider />
          <div className='mt-4 '>
            <h3>TSX JSON</h3>
            <Input
              placeholder="Dependencies (comma-separated)"
              value={tsxJSON?.dependencies.join(',')}
              onChange={(e) => setTsxJSON({
                ...tsxJSON,
                dependencies: e.target.value.split(',').map(dep => dep.trim())
              })}
            />
            {tsxFiles.map((file, index) => (
              <div key={index} className='border rounded-lg p-4'>
                <Input placeholder="Path" value={file.path} onChange={(e) => setTsxFiles(tsxFiles.map((f, i) => i === index ? { ...f, path: e.target.value } : f))} />
                <Textarea placeholder="Content" value={file.content} onChange={(e) => setTsxFiles(tsxFiles.map((f, i) => i === index ? { ...f, content: e.target.value } : f))} />
                <Input placeholder="Type" value={file.type} onChange={(e) => setTsxFiles(tsxFiles.map((f, i) => i === index ? { ...f, type: e.target.value } : f))} />
                <Input placeholder="Target" value={file.target} onChange={(e) => setTsxFiles(tsxFiles.map((f, i) => i === index ? { ...f, target: e.target.value } : f))} />
              </div>
            ))}
            <Button variant='outline' className='mt-4' onClick={() => setTsxFiles([...tsxFiles, { path: '', content: '', type: '', target: '' }])}>Add File</Button>
          </div>
          <Divider className='my-4' />
          <div>
            <h3>JSX JSON</h3>
            {/* <Input placeholder="Name" value={jsxJSON?.name} onChange={(e) => setJsxJSON({ ...jsxJSON, name: e.target.value })} />
          <Input placeholder="Type" value={jsxJSON?.type} onChange={(e) => setJsxJSON({ ...jsxJSON, type: e.target.value })} />
          <Input placeholder="Author" value={jsxJSON?.author} onChange={(e) => setJsxJSON({ ...jsxJSON, author: e.target.value })} />
          <Input placeholder="Title" value={jsxJSON?.title} onChange={(e) => setJsxJSON({ ...jsxJSON, title: e.target.value })} /> */}
            <Input
              placeholder="Dependencies (comma-separated)"
              value={jsxJSON?.dependencies.join(',')}
              onChange={(e) => setJsxJSON({
                ...jsxJSON,
                dependencies: e.target.value.split(',').map(dep => dep.trim())
              })}
            />
            <div className='mt-4 space-y-4'>
              {jsxFiles.map((file, index) => (
                <div key={index} className='border rounded-lg p-4'>
                  <Input placeholder="Path" value={file.path} onChange={(e) => setJsxFiles(jsxFiles.map((f, i) => i === index ? { ...f, path: e.target.value } : f))} />
                  <Textarea placeholder="Content" value={file.content} onChange={(e) => setJsxFiles(jsxFiles.map((f, i) => i === index ? { ...f, content: e.target.value } : f))} />
                  <Input placeholder="Type" value={file.type} onChange={(e) => setJsxFiles(jsxFiles.map((f, i) => i === index ? { ...f, type: e.target.value } : f))} />
                  <Input placeholder="Target" value={file.target} onChange={(e) => setJsxFiles(jsxFiles.map((f, i) => i === index ? { ...f, target: e.target.value } : f))} />
                </div>
              ))}
              <Button variant='outline' className='mt-4' onClick={() => setJsxFiles([...jsxFiles, { path: '', content: '', type: '', target: '' }])}>Add File</Button>
            </div>
          </div>
        </CardContent>
      </Card >

      <ToastContainer />

      <Button onClick={handleUpload}>Upload</Button>
    </div >
  )
}

export default page