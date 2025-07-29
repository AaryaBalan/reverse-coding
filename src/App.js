import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import SessionTerminated from './pages/SessionTerminated'
import Easy from './components/questions/Easy'
import Medium from './components/questions/Medium'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/code/:level' element={<Dashboard />} />
        <Route path='/terminated' element={<SessionTerminated />} />
      </Routes>
    </Router>
  )
}

export default App