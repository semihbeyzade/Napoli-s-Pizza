import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import React, { useState, useMemo } from "react";
import data from './data/data_menus.json'

function App() {

  const [searchTerm, setSearchTerm] = useState("");



  // http://localhost:3002/menus
  const onInput = (event) => {
    setSearchTerm(event.target.value);
  };

  let filteredData = useMemo( 
    () =>
    data.filter((val) => {
    console.log(val.header);
    if (searchTerm == "") {
      return val;
    } else if (val.header.toLowerCase().includes(searchTerm.toLowerCase())) {
      return val;
    }
  }),
  [searchTerm]
  );

  console.log(data);

  return (
    <>
      <Router>
        <nav className="bg-danger text-white d-flex justify-content-between fixed-top font-monospace text-decoration-underline nav-item">
          <img src="../img/logos.png" className="logo m-2" alt="" />
          <ul class="nav d-flex justify-content-center align-items-center me-2">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link active text-white"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="menu" className="nav-link text-white ">
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link to="about" className="nav-link text-white">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="contact" className="nav-link text-white">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/menu"
            element={<Menu dataMenus={filteredData} getInput={onInput} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
