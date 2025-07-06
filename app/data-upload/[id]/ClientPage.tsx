'use client'
import { Button, Card, CardContent, CardHeader, CardTitle, Input, Switch, ToggleButton, ToggleButtonGroup, useToast } from '@/app/src';
import Editor from '@monaco-editor/react';
import { useEffect, useState } from 'react';

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
  content: string | undefined;
  type: string;
  target: string;
}

const ClientPage = ({ id }: { id: string }) => {
  const [fetchedData, setFetchedData] = useState([])
  const [loading, setLoading] = useState(true)
  const { addToast, ToastContainer } = useToast()
  const [url, setUrl] = useState('/examples/components/accordion')
  const [codeTsx, setcodeTsx] = useState<string | undefined>('')
  const [codeJsx, setcodeJsx] = useState<string | undefined>('')
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
  // console.log(subCategory)
  const handleMultipleChange = (value: string | string[]) => {
    setCategories(Array.isArray(value) ? value : [value])
  }

  useEffect(() => {
    setLoading(true)
    async function getData() {
      try {
        const res = await fetch(`/api/get/${id}`)
        const json = await res.json()
        setFetchedData(json.data)
        // setTotalPages(json.totalPages)
        setTitle(json.data.title)
        setcodeTsx(json.data.codeTsx)
        setcodeJsx(json.data.codeJsx)
        setUrl(json.data.url)
        setPro(json.data.pro)
        setCategories(json.data.categories)
        // console.log(json.data.subCategories.join(", "))
        // setSubCategory(json.data.subCategories.join(", "))
        const jsonTsx = JSON.parse(json.data.jsonTsx)
        const jsonJsx = JSON.parse(json.data.jsonJsx)
        // console.log(jsonTsx)
        // console.log(jsonJsx)
        setJsonData(
          {
            name: jsonTsx.name,
            type: jsonTsx.type,
            author: jsonTsx.author,
            title: jsonTsx.title,
          }
        )
        setTsxJSON(
          {
            dependencies: jsonJsx.dependencies,
            files: jsonJsx.files
          }
        )
        setJsxJSON({
          dependencies: jsonTsx.dependencies,
          files: jsonTsx.files
        })
        setTsxFiles(jsonTsx.files)
        setJsxFiles(jsonJsx.files)
        setLoading(false)
      } catch (error) {
        console.error('Fetch failed:', error)
      }
      finally {
        setLoading(false)
      }
    }

    getData()
  }, [id])
  // useEffect(() => {
  //   if (!fetchedData.length) return

  //   const newTOC = fetchedData.map((item: any) => ({
  //     id: item.title.replace(/\s+/g, '-').toLowerCase(),
  //     title: item.title,
  //   }))
  //   setTOC(newTOC)
  // }, [fetchedData])
  // console.log(fetchedData)

  const handleUpload = async () => {
    // jsxFiles all content stringify then join with ","
    // const jsxFilesContent = jsxFiles.map((file) => file.content).join(",")
    // const tsxFilesContent = tsxFiles.map((file) => file.content).join(",")
    const finalTsxJSON = JSON.stringify({ ...jsonData, ...tsxJSON, files: tsxFiles })
    const finalJsxJSON = JSON.stringify({ ...jsonData, ...jsxJSON, files: jsxFiles })
    // console.log(typeof subCategory)
    const subCategories = subCategory.split(", ").map((item) => item.trim())

    const res = await fetch(`/api/get/${id}`, {
      method: "PATCH",
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
    <>
      {loading ? <div>Loading...</div> : <div>
        <h1 className='text-h1 text-center'>Data Upload</h1>
        <div className='space-y-4 border rounded-lg p-4'>

          <Input placeholder="Title" label='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
          <Input placeholder="Example-url" label='Example-url' value={url} onChange={(e) => setUrl(e.target.value)} />
          {/* <Textarea placeholder="Code TSX" label='Code TSX' value={codeTsx} onChange={(e) => setcodeTsx(e.target.value)} /> */}
          <div className='grid grid-cols-2 gap-4'>
            <div className='w-full h-[400px] border rounded-lg overflow-hidden'>
              <Editor
                defaultLanguage="javascript"
                defaultValue={codeTsx}
                theme="vs-dark"
                className='rounded-none'
                // onChange={(value) => {
                //   update(value);
                // }}
                onChange={(e) => setcodeTsx(e)}
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  lineNumbers: 'on',
                  roundedSelection: false,
                  scrollBeyondLastLine: false,
                  automaticLayout: true,
                  suggestOnTriggerCharacters: true,
                  tabSize: 2,
                  wordWrap: 'on',
                  folding: true,
                  lineDecorationsWidth: 0,
                  lineNumbersMinChars: 3,
                  renderValidationDecorations: 'on',
                  renderWhitespace: 'none',
                  scrollbar: {
                    verticalScrollbarSize: 10,
                    horizontalScrollbarSize: 10
                  }
                }}
              />
            </div>
            {/* <Textarea placeholder="Code JSX" label='Code JSX' value={codeJsx} onChange={(e) => setcodeJsx(e.target.value)} /> */}
            <div className='w-full h-[400px] border rounded-lg overflow-hidden'>
              <Editor
                defaultLanguage="javascript"
                defaultValue={codeJsx}
                theme="vs-dark"
                className='rounded-none'
                // onChange={(value) => {
                //   update(value);
                // }}
                onChange={(e) => setcodeJsx(e)}
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  lineNumbers: 'on',
                  roundedSelection: false,
                  scrollBeyondLastLine: false,
                  automaticLayout: true,
                  suggestOnTriggerCharacters: true,
                  tabSize: 2,
                  wordWrap: 'on',
                  folding: true,
                  lineDecorationsWidth: 0,
                  lineNumbersMinChars: 3,
                  renderValidationDecorations: 'on',
                  renderWhitespace: 'none',
                  scrollbar: {
                    verticalScrollbarSize: 10,
                    horizontalScrollbarSize: 10
                  }
                }}
              />
            </div>
          </div>
          <Card className='bg-transparent dark:bg-transparent border'>
            <CardHeader>
              <CardTitle>Pro/Free</CardTitle>
            </CardHeader>
            <CardContent className='mb-4'>
              <fieldset className='flex items-center gap-2'>
                <label>Pro</label>
                <Switch checked={pro} onChange={() => setPro(!pro)} />
              </fieldset>
            </CardContent>
            <CardHeader>
              <CardTitle>Categories</CardTitle>
            </CardHeader>
            <CardContent className='mb-4'>
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
        </div>
        <Card className='border rounded-lg p-4 bg-transparent dark:bg-transparent hover:bg-transparent dark:hover:bg-transparent'>
          <CardHeader>
            <CardTitle>JSON Data</CardTitle>
          </CardHeader>
          <CardContent>
            <Input placeholder="Name" value={jsonData?.name} onChange={(e) => setJsonData({ ...jsonData, name: e.target.value })} />
            <Input placeholder="Type" value={jsonData?.type} onChange={(e) => setJsonData({ ...jsonData, type: e.target.value })} />
            <Input placeholder="Author" value={jsonData?.author} onChange={(e) => setJsonData({ ...jsonData, author: e.target.value })} />
            <Input placeholder="Title" value={jsonData?.title} onChange={(e) => setJsonData({ ...jsonData, title: e.target.value })} />
            {/* <Divider /> */}
            <div className='grid grid-cols-2 gap-4'>
              <Card className='mt-4 border p-4 rounded-lg bg-transparent dark:bg-transparent'>
                <CardHeader>
                  <CardTitle>TSX JSON</CardTitle>
                </CardHeader>
                <CardContent>
                  <Input
                    placeholder="Dependencies (comma-separated)"
                    // value={tsxJSON?.dependencies.join(',')}
                    value={(tsxJSON?.dependencies ?? []).join(',')}
                    onChange={(e) => setTsxJSON({
                      ...tsxJSON,
                      dependencies: e.target.value.split(',').map(dep => dep.trim())
                    })}
                  />
                  <div className='space-y-4'>
                    {tsxFiles.map((file, index) => (
                      <div key={index} className='border rounded-lg p-4 mb-4'>
                        <Input placeholder="Path" value={file.path} onChange={(e) => setTsxFiles(tsxFiles.map((f, i) => i === index ? { ...f, path: e.target.value } : f))} />
                        <Input placeholder="Type" value={file.type} onChange={(e) => setTsxFiles(tsxFiles.map((f, i) => i === index ? { ...f, type: e.target.value } : f))} />
                        <Input placeholder="Target" value={file.target} onChange={(e) => setTsxFiles(tsxFiles.map((f, i) => i === index ? { ...f, target: e.target.value } : f))} />
                        {/* <Textarea placeholder="Content" value={file.content} onChange={(e) => setTsxFiles(tsxFiles.map((f, i) => i === index ? { ...f, content: e.target.value } : f))} /> */}
                        <div className='w-full h-[400px] border rounded-lg overflow-hidden'>
                          <Editor
                            defaultLanguage="javascript"
                            defaultValue={file.content}
                            theme="vs-dark"
                            className='rounded-none'
                            // onChange={(value) => {
                            //   update(value);
                            // }}
                            onChange={(e) => setTsxFiles(jsxFiles.map((f, i) => i === index ? { ...f, content: e } : f))}
                            options={{
                              minimap: { enabled: false },
                              fontSize: 14,
                              lineNumbers: 'on',
                              roundedSelection: false,
                              scrollBeyondLastLine: false,
                              automaticLayout: true,
                              suggestOnTriggerCharacters: true,
                              tabSize: 2,
                              wordWrap: 'on',
                              folding: true,
                              lineDecorationsWidth: 0,
                              lineNumbersMinChars: 3,
                              renderValidationDecorations: 'on',
                              renderWhitespace: 'none',
                              scrollbar: {
                                verticalScrollbarSize: 10,
                                horizontalScrollbarSize: 10
                              }
                            }}
                          />
                        </div>
                      </div>
                    ))}
                    <Button variant='outline' className='mt-4' onClick={() => setTsxFiles([...tsxFiles, { path: '', content: '', type: '', target: '' }])}>Add File</Button>
                  </div>
                </CardContent>
              </Card>
              {/* <Divider className='my-4' /> */}
              <Card className='mt-4 border p-4 rounded-lg '>
                <CardHeader>
                  <CardTitle>JSX JSON</CardTitle>
                </CardHeader>
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
                <CardContent>
                  <div className='space-y-4'>
                    {jsxFiles.map((file, index) => (
                      <div key={index} className='border rounded-lg p-4'>
                        <Input placeholder="Path" value={file.path} onChange={(e) => setJsxFiles(jsxFiles.map((f, i) => i === index ? { ...f, path: e.target.value } : f))} />
                        <Input placeholder="Type" value={file.type} onChange={(e) => setJsxFiles(jsxFiles.map((f, i) => i === index ? { ...f, type: e.target.value } : f))} />
                        <Input placeholder="Target" value={file.target} onChange={(e) => setJsxFiles(jsxFiles.map((f, i) => i === index ? { ...f, target: e.target.value } : f))} />
                        {/* <Textarea placeholder="Content" value={file.content} onChange={(e) => setJsxFiles(jsxFiles.map((f, i) => i === index ? { ...f, content: e.target.value } : f))} /> */}
                        <div className='w-full h-[400px] border rounded-lg overflow-hidden'>
                          <Editor
                            defaultLanguage="javascript"
                            defaultValue={file.content}
                            theme="vs-dark"
                            className='rounded-none'
                            // onChange={(value) => {
                            //   update(value);
                            // }}
                            onChange={(e) => setJsxFiles(jsxFiles.map((f, i) => i === index ? { ...f, content: e } : f))}
                            options={{
                              minimap: { enabled: false },
                              fontSize: 14,
                              lineNumbers: 'on',
                              roundedSelection: false,
                              scrollBeyondLastLine: false,
                              automaticLayout: true,
                              suggestOnTriggerCharacters: true,
                              tabSize: 2,
                              wordWrap: 'on',
                              folding: true,
                              lineDecorationsWidth: 0,
                              lineNumbersMinChars: 3,
                              renderValidationDecorations: 'on',
                              renderWhitespace: 'none',
                              scrollbar: {
                                verticalScrollbarSize: 10,
                                horizontalScrollbarSize: 10
                              }
                            }}
                          />
                        </div>
                      </div>
                    ))}
                    <Button variant='outline' className='mt-4' onClick={() => setJsxFiles([...jsxFiles, { path: '', content: '', type: '', target: '' }])}>Add File</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card >
        <ToastContainer />
        <Button onClick={handleUpload}>Upload</Button>
      </div>}
    </>
  )
}

export default ClientPage