import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import LoaderContainer from './Components/LoaderContainer'
import Footer from './Components/Footer'

function App() {
const [loader, setLoader] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 9000)
  }, [])

  return (
    <div>
      <Navbar/>
      {loader ? <LoaderContainer /> : <Home/>}
      <Footer/>
   </div>
  )
}

export default App
