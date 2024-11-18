import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Workflow.css'; // Importing the CSS file

const TeamAndClientSection = () => {
  return (
    <div className="container mt-5" id='workFlow'>
      {/* Title and Description */}
      <h2 className="text-center section-title">
      Our process is meticulously designed to ensure a seamless collaboration, <strong>delivering the quality and responsiveness of an in-house team. </strong>.
      </h2>

      <div className="row align-items-center justify-content-center mt-5 section-container">
        
        {/* Our Team Section */}
        <div className="col-md-5 mb-4 mb-md-0">
          <div className="workflow-card">
            <h4 className="Card-title">Our Team</h4>
            <p className="workflow-text">
              We dedicate an expert product designer who works directly with you whenever you need them.
            </p>
            <p className="workflow-text">
              We connect with you over Slack or Microsoft Teams, integrating seamlessly with your existing workflow.
            </p>
            <p className="workflow-text">
              We become part of your team, operating like your own internal design department.
            </p>
          </div>
        </div>

        {/* Arrows Section - Visible only on larger screens */}
        <div className="col-md-2 d-none d-md-flex flex-column align-items-center arrow-section">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            fill="currentColor"
            className="bi bi-arrow-right arrow-icon"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M10.293 1.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 7H1a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            />
          </svg>
          <br />
          <br />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            fill="currentColor"
            className="bi bi-arrow-left arrow-icon"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M5.707 1.293a1 1 0 00-1.414 0l-4 4a1 1 0 000 1.414l4 4a1 1 0 001.414-1.414L3.414 7H15a1 1 0 100-2H3.414l2.293-2.293a1 1 0 000-1.414z"
            />
          </svg>
        </div>

        {/* You Are Section */}
        <div className="col-md-5">
          <div className="you-are-card">
            <h4 className="Card-title">You Are</h4>
            <p className="workflow-text">
              An engineering-driven SaaS company looking for expert product designers.
            </p>
            <p className="workflow-text">
              You want to start ASAP without spending on hiring, managing, and training in-house designers.
            </p>
            <p className="workflow-text">
              You aim to improve user onboarding and revenues through intuitive product design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamAndClientSection;
