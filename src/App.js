import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import CompletionStats from './pages/CompletionStats'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/code/:level' element={<Dashboard />} />
        <Route path='/completed' element={<CompletionStats />} />
      </Routes>
    </Router>
  )
}

export default App