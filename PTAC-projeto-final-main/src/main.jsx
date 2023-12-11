import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import { Destaque } from './Destaque'
import NovoVideo from './NovoVideo'
import { Detalhe } from './Detalhe'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Detalhe/:id" element={<Detalhe />} />
        <Route path="/destaque" element={<Destaque />} />
        <Route path="/novo-video" element={<NovoVideo />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
