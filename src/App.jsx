import NavBar from "./Components/NavBar";
import './App.css'
import Welcome from "./Components/Welcome";
import Portfolio from "./Components/Portfolio";
import LoaderComponent from "./Components/LoaderComponent";
import { useState } from 'react'
import AboutMe from "./Components/AboutMe";
import Footer from "./Components/Footer";
import Email from "./Components/Email";
import { Routes, Route } from "react-router-dom"
import Blurb from "./Components/Blurb";

function App() {
  const [loader, setLoader] = useState(true)

  const stopLoader = () => {
    setLoader(false)
  }
  const loaderTimer = () => {
    setInterval(() => stopLoader(), 4000 )
  }

  loaderTimer()

  return (
   
    <div className="App"> 
      { loader? <LoaderComponent /> : null  }
      { !loader &&  <NavBar /> }
      <div className="stars" id="stars" ></div>
      <div className="twinkling" id='twinkling'></div>
      <Routes>
        <Route 
          path='/' 
          element={ !loader && <><Welcome /><Blurb/></> } 
        />
        <Route path="/email" element={<Email/>}
        />
        <Route 
          path="/portfolio" 
          element={<Portfolio/>}
        />
        <Route 
          path="/about"
          element={<AboutMe/>}
        />
      </Routes>
      { !loader && <Footer /> } 
      
    </div>
    
  )
}

export default App;
