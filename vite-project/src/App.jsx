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
      <nav className='bg-dark text-white d-flex justify-content-end fs-3 p-3 fixed-top'>
        <Link to="/" className='text-white text-decoration-none'>Home</Link>
        <Link to="menu" className='text-white text-decoration-none'>Menu</Link>
        <Link to="about" className='text-white text-decoration-none'>About</Link>
        <Link to="contact" className='text-white text-decoration-none'>Contact</Link> 

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
