import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Feature.css'

const FeatureComponent = () => {
  return (
    <div className="text-center py-5">
      {/* Title */}
      <h2 className="fw-bold freature-heading mb-3">
        Integrated Product Design and Frontend <br /> Development Solutions
      </h2>

      {/* Subtitle */}
      <p className="text-muted fs-5 mb-4" style={{fontSize:'26px', fontWeight:'700'}}>
        SaaS companies can access elite product designers and frontend <br /> engineers
        at competitive rates, on-demand.
      </p>

      {/* Button */}
      <button className="btn features-btn btn-lg px-4">
       <a href="https://calendly.com/nida-ideal/call-with-media-dunes" style={{textDecoration:'none', color:'white'}}>Book a Demo-call</a> 
      </button>
    </div>
  );
};

export default FeatureComponent;
