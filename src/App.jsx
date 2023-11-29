import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Sidebar, Header } from './components'
import { Consumers } from './pages'

import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('Dashboard')

  return (
    <div className='flex flex-row'>
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className='flex flex-col m-8 w-full'>
        <Header />

        <div className='w-full flex flex-col'>
          <Routes>
            <Route path='/' element={<></>} />
            <Route path='/consumers' element={<Consumers />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
