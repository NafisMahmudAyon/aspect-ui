'use client'
import { useState } from 'react'
import { Input, Switch, Textarea, ToggleButton, ToggleButtonGroup } from '../src'

const page = () => {
  const [url, setUrl] = useState('/examples/components/accordion')
  const [codeTsx, setcodeTsx] = useState('')
  const [codeJsx, setcodeJsx] = useState('')
  const [id, setId] = useState(100000)
  const [pro, setPro] = useState(false)
  const [jsonTsx, setJsonTsx] = useState('')
  const [jsonJsx, setJsonJsx] = useState('')
  const [categories, setCategories] = useState<string[]>([])
  console.log(id, url, codeTsx, codeJsx, pro, jsonTsx, jsonJsx)
  const handleMultipleChange = (value: string | string[]) => {
    setCategories(Array.isArray(value) ? value : [value])
  }

  const handleUpload = async () => {
    const res = await fetch("/api/insert-example", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, url, codeTsx, codeJsx, pro, jsonTsx, jsonJsx, categories }),
    });
    console.log(res)
    const data = await res.json();
    console.log(data);
  };



  return ( 
    <div className='min-h-screen pt-10 container mx-auto'>
      <h1 className='text-h1 text-center'>Data Upload</h1>
      <Input placeholder="Example-id" type="number" value={id} onChange={(e) => setId(Number(e.target.value))} />
      <Input placeholder="Example-url" value={url} onChange={(e) => setUrl(e.target.value)} />
      <Textarea placeholder="Code TSX" value={codeTsx} onChange={(e) => setcodeTsx(e.target.value)} />
      <Textarea placeholder="Code JSX" value={codeJsx} onChange={(e) => setcodeJsx(e.target.value)} />
      <fieldset>
        <label>Pro</label>
        <Switch checked={pro} onChange={() => setPro(!pro)} />
      </fieldset>
      <Textarea placeholder="JSON TSX" value={jsonTsx} onChange={(e) => setJsonTsx(e.target.value)} />
      <Textarea placeholder="JSON JSX" value={jsonJsx} onChange={(e) => setJsonJsx(e.target.value)} />
      <ToggleButtonGroup type='multiple' defaultValue={categories} outline={true} onChange={handleMultipleChange}>
        <ToggleButton value='docs'>Docs</ToggleButton>
        <ToggleButton value='variations'>Variations</ToggleButton>
        <ToggleButton value='template'>Template</ToggleButton>
        <ToggleButton value='page'>Full page</ToggleButton>
      </ToggleButtonGroup>
      <button onClick={handleUpload}>Upload</button>
    </div>
  )
}

export default page