import React from 'react'
import Header from '../../component/Header/Header'
import Workflow from '../../component/Workflow/Workflow'
import Footer from '../../component/Footer/Footer'
import './Contactus.css'
import 'bootstrap/dist/css/bootstrap.min.css';



function Contactus() {
  return (
    <div>

        <Header/>
        <div className="container    my-5">
      <div className="row">
        {/* Contact Info Section */}
        <div className="col-md-4">
        <div className='contact-info'>
          <h2 className="heading">Contact Us</h2>
          <p className='h-para'>Marasi Drive 51, DAMAC Business Tower 907, Business Bay, Dubai <br /> UAE</p>
          <br />
          <br />
          <button className="btn btn-message mb-3">Message Now</button>
          </div>
          <div className="contact-details">
            <p className='contact-details-para'>Email: <br /><a href="mailto:info@mediadunes.com">info@mediadunes.com</a></p>
            <p className='contact-details-para'>Phone Number: <br /> <a href="tel:+971552624815">+971 55 262 4815</a></p>
          
        </div>
        </div>
        {/* Contact Form Section */}
        <div className="col-md-8  form-container">
          <div className="p-4 bg-beige ">
            <form>
              <div className="mb-3">
                <label className="form-label">Full Name *</label>
                <input type="text" className="form-controll" placeholder="Enter your full name" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Email *</label>
                <input type="email" className="form-controll" placeholder="Enter your work email" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input type="tel" className="form-controll" placeholder="Enter your phone number" />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-controll" rows="3" placeholder="Write your message here"></textarea>
              </div>
              <button type="submit" className="btn btn-submit w-100">Submit your Message →</button>
            </form>
          </div>
        </div>
      </div>
    </div>
        <Workflow/>
        <Footer/>
    </div>
  )
}

export default Contactus