import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'
import Counter from './Components/Counter'
import Header from './Components/Header'
import Footer from './Components/Footer'
const a = ReactDom.createRoot(document.getElementById('root'))

a.render(
  <div className="min-h-screen flex flex-col">
    <Header />
    <div className="flex-grow">
      <Counter />
    </div>
    <Footer />
  </div>
)