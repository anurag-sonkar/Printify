import React from 'react'
import Hero from '../components/Home-Sections/Hero'
import Feature from '../components/Home-Sections/Feature'
import ConnectStore from '../components/Home-Sections/ConnectStore'
import Reviews from '../components/Home-Sections/Reviews'

function Home() {
  return (
    <div className='home'>
      <Hero />
      <Feature/>
      <ConnectStore />
      <Reviews/>
    </div>
  )
}

export default Home