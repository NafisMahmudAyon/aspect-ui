// import ComponentList from '@/components/ComponentList'
import ExploreComponents from '@/components/ExploreComponents'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import React from 'react'
// import UserButton from '@/components/UserButton'

const page = () => {
  return (
    <div>
      <Hero />
      {/* <ComponentList /> */}
      <ExploreComponents />
      <div className="h-[300px]" />
      {/* <UserButton />/ */}
      <Footer />
    </div>
  )
}

export default page