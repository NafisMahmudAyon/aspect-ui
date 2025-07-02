import { Tabs, TabContent, TabItem, TabList } from '@/app/src'
import React from 'react'

const TabsWxample = () => {
  return (
    <div className='w-full'>
      <Tabs defaultActive='item-5' className='mx-auto max-w-xl'>
              <TabList>
                <TabItem id='item-5'>Figma</TabItem>
                <TabItem disabled={true} id='item-6'>Docs</TabItem>
                <TabItem id='item-7'>Blog</TabItem>
              </TabList>
              <TabContent id='item-5'>Figma content goes here...</TabContent>
              <TabContent id='item-6'>Docs content goes here...</TabContent>
              <TabContent id='item-7'>Blog content goes here...</TabContent>
            </Tabs>
    </div>
  )
}

export default TabsWxample