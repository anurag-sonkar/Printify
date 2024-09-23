import React from 'react'
import Hero from '../components/Home-Sections/Hero'
import Feature from '../components/Home-Sections/Feature'
import ConnectStore from '../components/Home-Sections/ConnectStore'
import Reviews from '../components/Home-Sections/Reviews'
import AddDesign from '../components/Home-Sections/AddDesign'

function Home() {
  return (
    <div className='home'>
      <Hero />
      <Feature/>
      <AddDesign />
      <ConnectStore />
      <Reviews/>
    </div>
  )
}

export default Home