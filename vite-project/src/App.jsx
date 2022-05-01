import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from './components/Home'
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import ErrorPage from './components/ErrorPage';
import Data from './data/data_menus.json'




function App() {
  


  return (
    <>
    <Router>
     <nav className='bg-danger text-white d-flex justify-content-between fixed-top'>
       <img src="../img/logos.png" className='logo ms-5' alt="" />
     <ul class="nav d-flex justify-content-center align-items-center me-2">
        <li className="nav-item">
          <Link to="/" className="nav-link active text-white fs-3" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="menu" className="nav-link text-white fs-3">Menu</Link>
        </li>
        <li className="nav-item">
          <Link to="about" className="nav-link text-white fs-3">About</Link>
        </li>
        <li className="nav-item">
          <Link to="contact" className="nav-link text-white fs-3">Contact</Link>
        </li>
     </ul>
     </nav>


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu'  element={<Menu dataMenus={Data} />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
    
    </>

    
    
  )
}

export default App
