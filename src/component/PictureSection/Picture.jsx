import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Picture.css';
import shehran from '../../assets/videoplayback.mp4'
function VideoSection() {
  return (
    <div className="container">
      <div className="video-placeholder">
        <video controls className="video-fluid">
          <source src={shehran} type="video/mp4" />
          {/* Your browser does not support the video tag. */}
        </video>
        {/* <div className="video-overlay">
          <h1>Video Title</h1>
          <p>Your video description here.</p>
          </div> */}
      </div>
          {/* <button className="btn btn-primary">Click Me</button> */}
          <div className='video-description'>
            <p>Our unique approach has allowed us to collaborate with a diverse range of tech companies, providing them with on-demand product design and frontend engineering expertise.</p>
          </div>
    </div>
  );
}

export default VideoSection;
