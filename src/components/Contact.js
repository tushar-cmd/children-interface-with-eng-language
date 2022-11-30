import React from 'react';
import { Link } from 'react-router-dom';

function contact() {
  return (
    <>

<div className="container-xxl py-5 page-header position-relative mb-5">
            <div className="container py-5">
                <h1 className="display-2 text-white animated slideInDown mb-4">Contact Us</h1>
                <nav aria-label="breadcrumb animated slideInDown">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        {/* <!-- <li class="breadcrumb-item"><a href="#">Pages</a></li> --> */}
                        <li className="breadcrumb-item text-white active" aria-current="page">Contact Us</li>
                    </ol>
                </nav>
            </div>
</div>




<div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
                    <h1 className="mb-3">Get In Touch</h1>
                    <p> If you find any diffuculty in accessing the site or you want to give any suggestions, please contact us.</p>
                </div>
                <div className="row g-4 mb-5">
                    <div className="col-md-6 col-lg-4 text-center wow fadeInUp" data-wow-delay="0.1s">
                        <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width: '75px', height: '75px'}}>
                            <i className="fa fa-map-marker-alt fa-2x text-primary"></i>
                        </div>
                        <h6>IIIT Hyderabad, 500032</h6>
                    </div>
                    <div className="col-md-6 col-lg-4 text-center wow fadeInUp" data-wow-delay="0.3s">
                        <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width: '75px', height: '75px'}}>
                            <i className="fa fa-envelope-open fa-2x text-primary"></i>
                        </div>
                        <h6>adityabhadoriya525@gmail.com</h6>
                    </div>
                    <div className="col-md-6 col-lg-4 text-center wow fadeInUp" data-wow-delay="0.5s">
                        <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width: '75px', height: '75px'}}>
                            <i className="fa fa-phone-alt fa-2x text-primary"></i>
                        </div>
                        <h6>+917690078942</h6>
                    </div>
                </div>
                <div className="bg-light rounded">
                    <div className="row g-0">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="h-100 d-flex flex-column justify-content-center p-5">
                                <p className="mb-4">The contact form is currently inactive.
                                    </p>
                                <form>
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control border-0" id="name" placeholder="Your Name"/>
                                                <label for="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-floating">
                                                <input type="email" className="form-control border-0" id="email" placeholder="Your Email"/>
                                                <label for="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="text" className="form-control border-0" id="subject" placeholder="Subject"/>
                                                <label for="subject">Subject</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control border-0" placeholder="Leave a message here" id="message" style={{height: '100px'}}></textarea>
                                                <label for="message">Message</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s" style={{minHeight: '400px'}}>
                            <div className="position-relative h-100">
                                <iframe className="position-relative rounded w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3100113011496!2d78.34761975089785!3d17.444870005676595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bce0a03f17ff82b%3A0x9d02e89b98deb496!2sIIIT%20Hyderabad!5e0!3m2!1sen!2sin!4v1647968170472!5m2!1sen!2sin"
                                    allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default contact;
