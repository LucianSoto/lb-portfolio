import React, {useState, useEffect} from 'react'
import './NavBar.css'
import { Link, useSearchParams } from 'react-router-dom'
import { FaEllipsisV, FaXmark } from 'react-icons/fa'


function NavBar() {
  const [navViz, setNavViz] = useState(false)
  const [dd, setDD] = useState(false)

  const changeDD = () => {
    setDD(!dd)
  }

  const params = useSearchParams()

  console.log(params)

  return (
    <nav 
    // className={navBar ? 'nav-bar active' : 'nav-bar'}
      className='nav-bar'
    >
        <Link className="menu-item lb-logo" to="/" >LB</Link>
        <div className='menu-div' id='menu-div'>
              <div className="menu-dd" onClick={changeDD}>
                <Link className='menu-item navLink' to='/'>Home</Link>
                <Link className="menu-item navLink" to="/portfolio" >Portfolio</Link>
                <Link className="menu-item navLink" to="/about" >About</Link>
                <Link className="menu-item navLink" to="/resume">Resume</Link>
                <p className='menu-item' style={{display: "none"}} id='x'>X</p>
              </div>
              {/* <svg width='0' height='0'>
                <linearGradient id='blue-gradient' x1="00%" y1="00%" x2="0%" y2="100%">
                  <stop stopColor='white' offset='0%'/> 
                  <stop stopColor='#38495a' offset='100%'/>
                </linearGradient>
              </svg>
              <FaEllipsisV className={dd? 'hidden' : 'ellipsis'} style={{ fill: "url(#blue-gradient)" }}  onClick={changeDD} /> */}
        </div >
    </nav>
  )
}

export default NavBar