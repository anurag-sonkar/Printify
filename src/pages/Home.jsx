import React from 'react'
import Hero from '../components/Home-Sections/Hero'
import Feature from '../components/Home-Sections/Feature'
import ConnectStore from '../components/Home-Sections/ConnectStore'

function Home() {
  return (
    <div className='home'>
      <Hero />
      <Feature/>
      <ConnectStore />
    </div>
  )
}

export default Home