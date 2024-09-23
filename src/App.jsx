import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/miscellaneous/Layout'
import Error from './pages/Error'
function App() {

  return (
    <Routes>
      <Route path='/' Component={Layout}>
        <Route index Component={Home} />
        <Route path="*" element={<Error />} />

      </Route>
    </Routes>
  )
}

export default App