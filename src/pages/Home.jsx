import React from 'react'
import Button from '../components/Button'
import { FaRegCirclePlay } from 'react-icons/fa6'

function Home() {
  return (
    <div className='home'>
      <Button bgColor="red" variant="filled" icon={<FaRegCirclePlay />} style={{ padding: "20px 10px" }}>Signup</Button>
    </div>
  )
}

export default Home