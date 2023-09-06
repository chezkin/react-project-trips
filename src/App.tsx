import React, { useState } from 'react'

import './App.css'
import Router from './routes/Router'
import { Home } from './components/pages/Home/Home'
import { BrowserRouter } from 'react-router-dom'

function App() {


  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  )
}

export default App
