import React from 'react'
import Navbar from './components/navbar'
import './App.css'
import IMG from './bg.webp'  
function App() {
  return (
    <div>
      <img className='img' src={IMG}   alt='bg'/>
      <Navbar/>
    </div>
  )
}

export default App
