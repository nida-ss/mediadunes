import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Video.css'; // Import the CSS file

function PicSection() {
    return (
        <div className="container">
          <div className="pic-placeholder">
            <img src="https://img.freepik.com/free-photo/man-experiencing-virtual-reality-with-device_23-2148864941.jpg?t=st=1730104570~exp=1730108170~hmac=be1655c45f75f09afc3dac9693bd71d001c639217b69c0a6ab8ec0c7b4268b9f&w=1060" alt="Your Description" className="img-fluid" />
            <div className="overlay-content">
         <a href="contact.html"> <button className="cta-button">Click Me</button></a>
          &nbsp;
              <h3 className='headline'>We designed Bluemark Inc’s Physical
              Marketing B2B SaaS from scratch</h3>
              {/* <p>This page demonstrates client-side routing using React Router.</p> */}
            </div>
          </div>
        </div>
      );
    }
export default PicSection;
