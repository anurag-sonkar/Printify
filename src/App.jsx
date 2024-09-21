import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/Layout'
function App() {
  return (
    <Routes>
      <Route path='/' Component={Layout}>
        <Route index Component={Home}/>

      </Route>
    </Routes>
  )
}

export default App