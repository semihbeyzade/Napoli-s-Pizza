import React from 'react'
import '../App.css'


function Home() {
  return (
    <div >
      <div className='home d-flex flex-column justify-content-center align-items-start'>
          <h1 className='text-white ms-3'>Pedro's Pizzeria</h1>
          <p className='text-white ms-3'>PIZZA TO FIT ANY TASTE</p>
          <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-dark ms-3">ORDER NOW</button>
          </div>
      </div>

    </div>
  )
}

export default Home