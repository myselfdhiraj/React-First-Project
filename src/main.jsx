import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './component/Navbar'
import Hero from './component/Hero'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <Navbar />
    <Hero/>
    </>
  </React.StrictMode>,
)
