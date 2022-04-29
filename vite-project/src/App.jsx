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
     <nav className='bg-dark text-white d-flex justify-content-end p-3 fixed-top'>
     <ul class="nav justify-content-end">
        <li class="nav-item">
          <Link to="/" class="nav-link active text-white" aria-current="page">Home</Link>
        </li>
        <li class="nav-item">
          <Link to="menu" class="nav-link text-white">Menu</Link>
        </li>
        <li class="nav-item">
          <Link to="about" class="nav-link text-white">About</Link>
        </li>
        <li class="nav-item">
          <Link to="contact" class="nav-link text-white" tabindex="-1" aria-disabled="true">Contact</Link>
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
