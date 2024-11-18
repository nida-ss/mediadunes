import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";   

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <h2>Let's make something amazing together!</h2>
          <div className="footer-buttons">
            <a href="https://calendly.com/nida-ideal/call-with-media-dunes">
              <button className="demo-btn">Book a Demo</button>
            </a>
            <Link to="/Contact">
              <button className="contact-btn">Contact us</button>
            </Link>
          </div>

          <div className="footer-bottom">
            <div className="footer-logo-address">
              <img
                className="footer-logo"
                src="https://s3-alpha-sig.figma.com/img/a0a0/4db2/def094334324f294d66fc7bce2413ea7?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AUjHTTswNh8YxFodmB7yFtiinZpiyiDWGV45-OM7P~dATigS~WR3zQK6GHlGhznl4NYtnkHPvvav1o2AYwiHoIjhsXI8rhNMInl5vesrwG7FJNbjb6B0xLD3AI7AEono5zLp4qbF1bvf2ez9UmBX4trxtw-xrGsjAZn6v~gZ6e4yz0qz-eKFHNU1VD2pTFV69AsdsW6fjh9qLiXKDLhHkI-GtmYeUoDCte1pErtDy9uskcjhBo26V8a95ygcLDIW~dD1hoP48PCU6Oh-q5k7q37c~lLTOE6JUfaJInWDhz7rUsiwaOFpOGVqiAhJshuk9fjHmpn3pTFRzfX6xkBTHg__"
                width="300px"
                height="90px"
                alt=""
              />
              <p>Marasi Drive 51, DAMAC Business Tower 907, Business Bay, Dubai UAE</p>
            </div>

            <div className="footer-links" >
              <div>
                <ul>
                  <li>
                    <Link to="/ourwork.html" style={{textDecoration:'none', color: 'white'}}>Our Work</Link>
                  </li>
                  <li>
                    <Link to="/pricing.html" style={{textDecoration:'none', color: 'white'}}>Pricing</Link>
                  </li>
                  <li>
                    <Link to="/blogs.html" style={{textDecoration:'none', color: 'white'}}>Blogs</Link>
                  </li>
                  <li>
                    <Link to="/career.html" style={{textDecoration:'none', color: 'white'}}>Career</Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <Link to="/audit.html" style={{textDecoration:'none', color: 'white'}}>UI/UX Audit</Link>
                  </li>
                  <li>
                    <Link to="/audit.html" style={{textDecoration:'none', color: 'white'}}>UI/UX Audit Checklist</Link>
                  </li>
                  <li>
                    <Link to="/graphics.html" style={{textDecoration:'none', color: 'white'}}>Front End Development</Link>
                  </li>
                  <li>
                    <Link to="/audit.html" style={{textDecoration:'none', color: 'white'}}>UI/UX Design</Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <Link to="/contact.html" style={{textDecoration:'none', color: 'white'}}>Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/terms-conditions.html" style={{textDecoration:'none', color: 'white'}}>Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link to="/team.html" style={{textDecoration:'none', color: 'white'}}>Our Team</Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy.html" style={{textDecoration:'none', color: 'white'}}>Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom" style={{ backgroundColor: '', color: 'white' }}>
            <p>© Media Dunes, Inc. 2025. We love our users!</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;