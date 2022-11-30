import React from 'react';
import { Link } from 'react-router-dom';
import corousel1 from './carousel-1.jpg';
import corousel2 from './carousel-2.jpg';

function Carousel() {
  return (
    <>

     <div className="container-fluid p-0 mb-5">
            {/* <div className="owl-carousel header-carousel position-relative"> */}
                 <div className="owl-carousel-item position-relative"> 
                    <img className="img-fluid" src={corousel1} alt=""/>
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ backgroundColor: "rgba(0, 0, 0, .2)"}}> 
                        <div className="container">
                            <div className="row justify-content-start">
                                 <div className="col-10 col-lg-8">
                                    <h1 className="display-2 text-white animated slideInDown mb-4">Learn,Play and Grow</h1>
                                    <p className="fs-5 fw-medium text-white mb-4 pb-2">Teach your kids the correct pronounciation of english language.</p>
                                    <Link className="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft" to="/game">PLAY</Link>
                                    <Link className="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight" to="/words">LEARN</Link>
                                </div> 
                            </div>
                        </div>
                    </div>
                 {/*</div> */}
                {/* <div className="owl-carousel-item position-relative"> */}
                    {/* <img className="img-fluid" src={corousel2} alt=""/>
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ backgroundColor: 'rgba(0, 0, 0, .2)'}}>
                        <div className="container">
                            <div className="row justify-content-start">
                                <div className="col-10 col-lg-8">
                                    <h1 className="display-2 text-white animated slideInDown mb-4">Make A Brighter Future For Your Child</h1>
                                    <p className="fs-5 fw-medium text-white mb-4 pb-2">Learning English is now fun.</p>
                                    <Link className="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft" to="/game">PLAY</Link>
                                    <Link className="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight"  to="/words">LEARN</Link>
                                </div>
                            </div>
                        </div>
                    </div> */}
                {/* </div> */}
            </div>
        </div> 
    </>
  )
}

export default Carousel;
