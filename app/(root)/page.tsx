// import ComponentList from '@/components/ComponentList'
import ExploreComponents from '@/components/ExploreComponents'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero />
    {/* <ComponentList /> */}
    <ExploreComponents />
    <div className="h-[300px]" /> 
    <div className='text-primary-900 text-display1'>Explore Components</div>
    <Footer />
    </div>
  )
}

export default page