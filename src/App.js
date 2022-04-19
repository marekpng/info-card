// import logo from './logo.svg';
import './App.css';
import React from "react"


import Info from "./components/Info"
import About from "./components/About" 
import Footer from "./components/Footer"

export default function App() {
  return (
      <div className="container">
        <div className='upper-side'>

          <Info />
          <About />
          <div className='footer'>
            <Footer />
          </div>

        </div>
      </div>
  )
}