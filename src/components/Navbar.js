import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <>
     <div className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
            <Link className="navbar-brand" to="/" >
                <h1 className="m-0 text-primary"><i className="fa fa-book-reader me-3"></i>BTP Project</h1>
            </Link>
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav mx-auto">
                    <Link className="nav-item nav-link active" to="/">Home</Link>
                    
                    <Link className="nav-item nav-link" to="/game">Play</Link>
                    <div className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="/words">Learn</Link>
                        <div className="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0">
                            <Link className="dropdown-item" to="/words" >Words</Link>
                            <Link to="/sentences" className="dropdown-item">Sentences</Link>
                            <Link to="/tonguetwisters" className="dropdown-item">Tongue Twisters</Link>
                        </div>
                    </div>
                    <Link className="nav-item nav-link" to="/contact">Contact Us</Link>
                </div>
                <Link /*href="login/login.html"*/ className="btn btn-primary rounded-pill px-3 d-none d-lg-block" to="/login">Join Us<i className="fa fa-arrow-right ms-3"></i></Link>
            </div>
        </div> 


    </>
  )
}

export default Navbar
