import React from 'react'
import ReactDOM from 'react-dom/client'
import Card from './components/Card'
import Carusel from './components/Carusel'
import Footer from './components/Footer'
import Menu from './components/Menu'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Menu />
    <Carusel />
    <div className="flex gap-10 p-10 flex-wrap justify-evenly">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>   
    <Footer />
  </React.StrictMode>
)
