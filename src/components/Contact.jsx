import React from 'react'

function Contact() {
  return (
    <div className='d-flex w-100'>
        <div className='contact-img w-50'>
       
        </div>
        <div className='contact-page  w-50 font-monospace bg-light'>
        <div className='contact-form d-flex justify-content-center align-items-center flex-column h-100'>
            <h2 className='mb-5 fw-bold'>Contact Us</h2>
            <form className=''>
            <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Full name</label>
    <input type="password" class="form-control rounded-pill bg-transparent text-dark border border-danger" placeholder='Enter full name...' id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input type="email" class="form-control rounded-pill bg-transparent text-dark border border-danger" placeholder='Enter email...' id="exampleInputEmail1"/>
  </div>
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control rounded bg-transparent text-dark border border-danger" placeholder='Enter message...' id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
  <button type="submit" class="btn btn-danger rounded-pill">Submit</button>
</form>
        </div>
        </div>
       
    </div>
  )
}

export default Contact