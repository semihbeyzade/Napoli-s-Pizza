import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from './components/Home'
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import ErrorPage from './components/ErrorPage';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
     <nav className='bg-danger text-white d-flex justify-content-between fixed-top'>
       <img src="../img/logo2.png" className='logo ms-2' alt="" />
     <ul class="nav d-flex justify-content-center align-items-center me-2">
        <li class="nav-item">
          <Link to="/" class="nav-link active text-white fs-3" aria-current="page">Home</Link>
        </li>
        <li class="nav-item">
          <Link to="menu" class="nav-link text-white fs-3">Menu</Link>
        </li>
        <li class="nav-item">
          <Link to="about" class="nav-link text-white fs-3">About</Link>
        </li>
        <li class="nav-item">
          <Link to="contact" class="nav-link text-white fs-3" tabindex="-1" aria-disabled="true">Contact</Link>
        </li>
     </ul>
     </nav>


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
    
    </>

    
    
  )
}

export default App
