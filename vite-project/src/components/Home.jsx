import React from 'react'
import '../App.css'


function Home() {
  return (
    <div >
      <div className='home d-flex flex-column justify-content-center align-items-start font-monospace'>
          <h1 className='text-white ms-3 fw-bold'>Napoli's Pizzeria</h1>
          <p className='text-white ms-3'>PIZZA TO FIT ANY TASTE</p>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-dark ms-3">Order Now</button>
          </div>
      </div>

    </div>
  )
}

export default Home