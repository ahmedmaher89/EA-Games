import React, {useEffect, useState} from 'react'
//bootstrap 
import { Navbar , Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
//react-router liprary
import { BrowserRouter , Route , Routes , Link  } from 'react-router-dom'
// css file
import './App.css'
//compoants
import CONTACT from './compoants/CONTACT';
import NEWS from './compoants/NEWS';
import SERVICES from './compoants/SERVICES'
import TOURNAMENT from './compoants/TOURNAMENT';
import ABOUTUS from './compoants/ABOUTUS';
import Home from './compoants/Home';
// loader liprary
import PacmanLoader from 'react-spinners/PacmanLoader'


const App = () => {
  // loader 
  const [loading , setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 2000)
  },[]);

// Navbar active links
  const [activeLink , setActiveLink] = useState('home');
  const [scrolled , setScrolled] = useState(false);

  useEffect( () => {
      const onScroll = () => {
          if (window.scrollY > 50){
            setScrolled(true)
          } else{
            setScrolled(false)
          }
      }
      window.addEventListener('scroll', onScroll)
      return () => window.removeEventListener("scroll", onScroll)
  },[] )
  const onUpdateActiveLink = (value) => {
    setActiveLink(value)
  }


  return (
    <BrowserRouter>
    <Navbar expand="md" >
          <Navbar.Brand className="logoimg" href="/NAVBAR">
            <img src='/imgs/logo.png' alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="midnav">
              <div>
              <Link className="te-n" to="/"><Nav.Link href="#HOME" className={activeLink === 'HOME' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('HOME')}>HOME</Nav.Link></Link>
              <Link className="te-n" to="/ABOUTUS"><Nav.Link href="#ABOUT US" className={activeLink === 'ABOUT US' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('ABOUT US')}>ABOUT US</Nav.Link></Link>
              <Link className="te-n" to="/TOURNAMENT"><Nav.Link href="#TOURNAMENT" className={activeLink === 'TOURNAMENT' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('TOURNAMENT')}>TOURNAMENT</Nav.Link></Link>
              </div>
              <div>
              <Link className="te-n" to="/SERVICES"><Nav.Link href="#SERVICES" className={activeLink === 'SERVICES' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('SERVICES')}>SERVICES</Nav.Link></Link>
              <Link className="te-n md-mx-1" to="/NEWS"><Nav.Link href="#NEWS" className={activeLink === 'NEWS' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('NEWS')}>NEWS</Nav.Link></Link>
              <Link className="te-n md-mx-5" to="/CONTACT"> <Nav.Link href="#CONTACT" className={activeLink === 'CONTACT' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('CONTACT')}>CONTACT</Nav.Link></Link>
              </div>
            </Nav>
          </Navbar.Collapse>
          <Link to="/CONTACT">
          <button  className="bttn_nav">
            SIGN IN
            <div id="clip">
              <div id="leftTop" className="corner"></div>
              <div id="rightBottom" className="corner"></div>
              <div id="rightTop" className="corner"></div>
              <div id="leftBottom" className="corner"></div>
            </div>
            <span id="rightArrow" className="arrow"></span>
            <span id="leftArrow" className="arrow"></span>
          </button>
          </Link>
          
    </Navbar>
    {loading ?
    <div className='preloader'><PacmanLoader color="#36d7b7" /></div>
    :
    <>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/CONTACT' element={<CONTACT />} />
    <Route path='/NEWS' element={<NEWS />} />
    <Route path='/SERVICES' element={<SERVICES />} />
    <Route path='/TOURNAMENT' element={<TOURNAMENT />} />
    <Route path='/ABOUTUS' element={<ABOUTUS />} />
    </Routes>
    </>
    }
    </BrowserRouter>
  )
}

export default App
