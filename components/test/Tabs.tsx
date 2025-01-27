'use client'
import { TabContent, TabItem, TabList, Tabs } from '@/app/src/components/Tabs'
import { useState } from 'react';

const TabsDemo = () => {
  const [tabActive, setTabActive] = useState("item-1");
  console.log(tabActive)
  return (
    <div>
      <Tabs defaultActive='item-5' className='mx-auto max-w-xl test'>
        <TabList>
          <TabItem id='item-5'>Figma</TabItem>
          <TabItem disabled={true} id='item-6'>Docs</TabItem>
          <TabItem id='item-7'>Blog</TabItem>
          <TabItem id='item-8'>Github</TabItem>
        </TabList>
        <TabContent id='item-5'>Figma content goes here...</TabContent>
        <TabContent id='item-6'>Docs content goes here...</TabContent>
        <TabContent id='item-7'>Blog content goes here...</TabContent>
        <TabContent id='item-8'>Github content goes here...</TabContent>
      </Tabs>
      <Tabs defaultActive='item-8' className='mx-auto max-w-xl'>
        <TabList>
          <TabItem id='item-5' onClick={() => setTabActive("item-5")}>Figma</TabItem>
          <TabItem id='item-6'>Docs</TabItem>
          <TabItem id='item-7'>Blog</TabItem>
          <TabItem id='item-8'>Github</TabItem>
        </TabList>
        <TabContent id='item-5'>Figma content goes here...</TabContent>
        <TabContent id='item-6'>Docs content goes here...</TabContent>
        <TabContent id='item-7'>Blog content goes here...</TabContent>
        <TabContent id='item-8'>Github content goes here...</TabContent>
      </Tabs>
    </div>
  )
}

export default TabsDemo
