import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header className="header">
        <div className="top-banner text-center py-2">
            The Ultimate UX Audit Checklist for SaaS Founders is now available. <a href="#" className="text-white fw-bold" style={{textDecoration:'none'}}>Check it out today!</a>
        </div>
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <Link to="/">
                    <img
                        src="https://s3-alpha-sig.figma.com/img/7971/ea26/cc700df9d24214de04b90f407ddd306d?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FPKrwrJTp6JeQWq9OfCkp3N9e8mFP99MwuNPxUO99TAantX78REpxP6HaYiGZFMsEZJflV9kFaEUgga2GL2CfdijFHoBqX0YHUikaJYBQGLOyo~VmlDZKzMkQ-~9owXNyXcMlf64w9sLu0-ZG3lrCWpI-vIgQF8fC8RnQTw5NtB9gJ7LiqpECCFbiNAH2rWTi91ojMIOi-o4y~XyBPc576Rq5myytwSDXcHzoTMJERM7JrgnPpC9jT~EXIXwj6zCBGDGPO5rBGJqQogOA~s8gLp171OsYlr8MOMA6UGF9KC0Iu8hziesEC8ptL5Ct72as2ZAQ6JezTUkG7YbBUx-rA__"
                        width="159px"
                        height="54px"
                        className="logo"
                        alt="Logo"
                    />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/ourwork.html">How we Deliver</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/pricing.html">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/ourwork.html">Our Work Library</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/audit.html">Free UI/UX Audit</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blogs.html">Blogs</Link>
                        </li>
                    </ul>
                    <Link to="/contact.html" className="btn btn-light ms-5">Contact Us</Link>
                </div>
            </div>
        </nav>
    </header>
    );
};

export default Header;
