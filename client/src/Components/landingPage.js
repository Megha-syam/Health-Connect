
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Typography, Container, TextField, Button } from '@mui/material';


const LandingPage = () => {
 return(
<>

      <div className="page-wrapper p-0 overflow-hidden">
        <header className="header">
          <nav className="navbar navbar-expand-lg py-0">
            <div className="container">
            
                <img src="logo.png" alt="Logo" />  
          
          <button
            className="navbar-toggler d-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="ti ti-menu-2 fs-9" />
          </button>
          <button
            className="navbar-toggler border-0 p-0 shadow-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            
            <i className="ti ti-menu-2 fs-9" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav align-items-center mb- mb-lg-0 ms-auto">
              <li className="nav-item dropdown hover-dd mega-dropdown pages-dropdown">
                <a
                  className="nav-link dropdown-toggle"
                 
                  role="button"
                  aria-expanded="false"
                >
                  
                
                  Find Doctors
                </a>
              </li>
              <li className="nav-item dropdown hover-dd mega-dropdown pages-dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  
                  role="button"
                  aria-expanded="false"
                >
               
                  Lab Tests
                </a>
              </li>
              <li className="nav-item dropdown hover-dd mega-dropdown pages-dropdown">
                <a
                  className="nav-link dropdown-toggle"
                
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  For Providers

                </a>
                <div className="dropdown-menu dropdown-menu-animate-up py-0">
                  <div className="p-4">
                    <a
                      target="_blank"
                      href="/doctorlogin"
                      className="d-flex align-items-center pb-7 position-relative lh-base"
                    >
                      <div className="bg-light rounded me-3 p-6 d-flex align-items-center justify-content-center">
                        <img
                          src=""
                          alt=""
                          className="img-fluid"
                          width={24}
                          height={24}
                        />
                      </div>
                      <div className="d-inline-block">
                        <h6 className="mb-1 fw-semibold text-hover-primary">
                          For Doctors
                        </h6>
                        <span className="fs-2 d-block fw-normal text-muted" />
                      </div>
                    </a>
                    <a
                      target="_blank"
                    
                      className="d-flex align-items-center pb-7 position-relative lh-base"
                    >
                      <div className="bg-light rounded me-3 p-6 d-flex align-items-center justify-content-center">
                        <img
                          
                          alt=""
                          className="img-fluid"
                          width={24}
                          height={24}
                        />
                      </div>
                      <div className="d-inline-block">
                        <h6 className="mb-1 fw-semibold text-hover-primary">
                          For Hospitals
                        </h6>
                        <span className="fs-2 d-block fw-normal text-muted" />
                      </div>
                    </a>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown hover-dd mega-dropdown pages-dropdown">
                <a
                  xxx
                  href="/Components/Payments"
                  className="btn btn-primary fs-3 rounded btn-hover-shadow px-3 py-2"
            
                >
                 <Button color="inherit" component={Link} to="/PaymentsPage">Payments</Button>
                  
                </a>
              </li>
              <li className="nav-item ms-2">
                <a
                   
                  className="btn btn-primary fs-3 rounded btn-hover-shadow px-3 py-2"
                  
                
                >
                  <Button color="inherit" component={Link} to="/login">Login</Button>
                  
                  
                </a>
              </li>
              <li className="nav-item ms-2">
                <a
                   
                   
                 href="/Components/SignUp"
                  className="btn btn-primary fs-3 rounded btn-hover-shadow px-3 py-2"
            
                >
                 <Button color="inherit" component={Link} to="/SignUp">Register</Button>
                  
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  
    <div className="body-wrapper overflow-hidden">
    <section className="blackbox-overlay">
       <div className="container">
          <div className="row align-items-center">
            <div class="col-xl-6">
              
              <div className="hero-content my-11 my-xl-0">
                <h1 className="fw-bolder mb-8 fs-13" >Join the Circle of Wellness- <span class="text-primary"> Health Connect</span>
                  </h1>
                <p className="fs-5 mb-5 text-dark fw-normal" >Linking Health and Compassion – Welcome to Health Connect, Your Trusted Medical Companion.</p>
                <div className="d-sm-flex align-items-center gap-3" >
                  <a className="btn btn-primary px-5 btn-hover-shadow d-block mb-3 mb-sm-0" >
                  <Button color="inherit" component={Link} to="/AppointmentPage">Book An Appointment</Button></a>
                  <a className="btn btn-outline-primary d-block scroll-link">
                  <Button color="inherit" component={Link} to="/ViewDoctorsPage">View Doctors</Button></a>
                   
                </div>
              </div>
            </div>
       </div>    
</div>
       </section>
      <section className="hero-section position-relative overflow-hidden mb-0 mb-lg-11">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="card">
                <div className="card-body">
                  <div className="card-body text-center p-4 pt-8">
                    <h3 className="fs-7 fw-semibold pt-6">
                      Find Near By Hospitals Or Clinics
                    </h3>
                    <p className="mb-8 pb-2 text-dark">
                      Here you can find experienced Doctors
                    </p>
                  </div>
                  <form className="">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control border border-primary"
                        placeholder="Username"
                      />
                      <label>
                        <i className="ti ti-location me-2 fs-4 text-primary" />
                        <span className="border-start border-primary ps-3">
                          Location
                        </span>
                      </label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control border border-primary"
                        placeholder="Username"
                      />
                      <label>
                        <i className="ti ti-user me-2 fs-4 text-primary" />
                        <span className="border-start border-primary ps-3">
                          Hospital Or Clinic
                        </span>
                      </label>
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                      <div className="">
                        <button
                          type="submit"
                          className="btn btn-primary font-medium rounded-pill px-4"
                        >
                          <div className="">
                            <i
                              className="fa-solid fa-magnifying-glass"
                              style={{ color: "#ffffff" }}
                            />
                            Search
                          </div>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="review-section">
        <div className="container">

          <div
            className="review-slider"
            data-aos="fade-up"
            data-aos-delay={400}
            data-aos-duration={1000}
          >
            <div className="owl-carousel owl-theme">
              <div className="item">
                <div className="card">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between mb-4">
                      <div className="d-flex align-items-center">
                        <img
                          
                          alt=""
                          className="w-auto me-3 rounded-circle"
                          width={40}
                          height={40}
                        />
                        <div>
                          <h6 className="fs-4 mb-1 fw-semibold">
                            Jenny Wilson
                          </h6>
                          <p className="mb-0 text-dark">Features avaibility</p>
                        </div>
                      </div>
                      <div>
                        <ul className="list-unstyled d-flex align-items-center justify-content-end gap-1 mb-0">
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p className="fs-4 mb-0 text-dark">
                      The dashboard template from adminmart has helped me
                      provide a clean and sleek look to my dashboard and made it
                      look exactly the way I wanted it to, mainly without
                      having.
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between mb-4">
                      <div className="d-flex align-items-center">
                        <img
                         
                          alt=""
                          className="w-auto me-3 rounded-circle"
                          width={40}
                          height={40}
                        />
                        <div>
                          <h6 className="fs-4 mb-1 fw-semibold">Minshan Cui</h6>
                          <p className="mb-0 text-dark">Features avaibility</p>
                        </div>
                      </div>
                      <div>
                        <ul className="list-unstyled d-flex align-items-center justify-content-end gap-1 mb-0">
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p className="fs-4 text-dark mb-0">
                      The quality of design is excellent, customizability and
                      flexibility much better than the other products available
                      in the market. I strongly recommend the AdminMart to other
                      buyers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between mb-4">
                      <div className="d-flex align-items-center">
                        <img
                          src="{{ url_for('static', filename='landing/dist/images/profile/user-3.jpg') }}"
                          alt=""
                          className="w-auto me-3 rounded-circle"
                          width={40}
                          height={40}
                        />
                        <div>
                          <h6 className="fs-4 mb-1 fw-semibold">
                            Eminson Mendoza
                          </h6>
                          <p className="mb-0 fw-normal">Features avaibility</p>
                        </div>
                      </div>
                      <div>
                        <ul className="list-unstyled d-flex align-items-center justify-content-end gap-1 mb-0">
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p className="fs-4 text-dark mb-0">
                      This template is great, UI-rich and up-to-date. Although
                      it is pretty much complete, I suggest to improve a bit of
                      documentation. Thanks &amp; Highly recomended!
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between mb-4">
                      <div className="d-flex align-items-center">
                        <img
                          src="{{ url_for('static', filename='landing/dist/images/profile/user-1.jpg') }}"
                          alt=""
                          className="w-auto me-3 rounded-circle"
                          width={40}
                          height={40}
                        />
                        <div>
                          <h6 className="fs-4 mb-1 fw-semibold">
                            Jenny Wilson
                          </h6>
                          <p className="mb-0 text-dark">Features avaibility</p>
                        </div>
                      </div>
                      <div>
                        <ul className="list-unstyled d-flex align-items-center justify-content-end gap-1 mb-0">
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p className="fs-4 mb-0 text-dark">
                      The dashboard template from adminmart has helped me
                      provide a clean and sleek look to my dashboard and made it
                      look exactly the way I wanted it to, mainly without
                      having.
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between mb-4">
                      <div className="d-flex align-items-center">
                        <img
                          src="{{ url_for('static', filename='landing/dist/images/profile/user-2.jpg') }}"
                          alt=""
                          className="w-auto me-3 rounded-circle"
                          width={40}
                          height={40}
                        />
                        <div>
                          <h6 className="fs-4 mb-1 fw-semibold">Minshan Cui</h6>
                          <p className="mb-0 text-dark">Features avaibility</p>
                        </div>
                      </div>
                      <div>
                        <ul className="list-unstyled d-flex align-items-center justify-content-end gap-1 mb-0">
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p className="fs-4 text-dark mb-0">
                      The quality of design is excellent, customizability and
                      flexibility much better than the other products available
                      in the market. I strongly recommend the AdminMart to other
                      buyers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between mb-4">
                      <div className="d-flex align-items-center">
                        <img
                          src="{{ url_for('static', filename='landing/dist/images/profile/user-3.jpg') }}"
                          alt=""
                          className="w-auto me-3 rounded-circle"
                          width={40}
                          height={40}
                        />
                        <div>
                          <h6 className="fs-4 mb-1 fw-semibold">
                            Eminson Mendoza
                          </h6>
                          <p className="mb-0 fw-normal">Features avaibility</p>
                        </div>
                      </div>
                      <div>
                        <ul className="list-unstyled d-flex align-items-center justify-content-end gap-1 mb-0">
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p className="fs-4 text-dark mb-0">
                      This template is great, UI-rich and up-to-date. Although
                      it is pretty much complete, I suggest to improve a bit of
                      documentation. Thanks &amp; Highly recomended!
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between mb-4">
                      <div className="d-flex align-items-center">
                        <img
                 
                          alt=""
                          className="w-auto me-3 rounded-circle"
                          width={40}
                          height={40}
                        />
                        <div>
                          <h6 className="fs-4 mb-1 fw-semibold">
                            Jenny Wilson
                          </h6>
                          <p className="mb-0 text-dark">Features avaibility</p>
                        </div>
                      </div>
                      <div>
                        <ul className="list-unstyled d-flex align-items-center justify-content-end gap-1 mb-0">
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p className="fs-4 mb-0 text-dark">
                      The dashboard template from adminmart has helped me
                      provide a clean and sleek look to my dashboard and made it
                      look exactly the way I wanted it to, mainly without
                      having.
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between mb-4">
                      <div className="d-flex align-items-center">
                        <img
                          src="{{ url_for('static', filename='landing/dist/images/profile/user-2.jpg') }}"
                          alt=""
                          className="w-auto me-3 rounded-circle"
                          width={40}
                          height={40}
                        />
                        <div>
                          <h6 className="fs-4 mb-1 fw-semibold">Minshan Cui</h6>
                          <p className="mb-0 text-dark">Features avaibility</p>
                        </div>
                      </div>
                      <div>
                        <ul className="list-unstyled d-flex align-items-center justify-content-end gap-1 mb-0">
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p className="fs-4 text-dark mb-0">
                      The quality of design is excellent, customizability and
                      flexibility much better than the other products available
                      in the market. I strongly recommend the AdminMart to other
                      buyers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between mb-4">
                      <div className="d-flex align-items-center">
                        <img
                          src="{{ url_for('static', filename='landing/dist/images/profile/user-3.jpg') }}"
                          alt=""
                          className="w-auto me-3 rounded-circle"
                          width={40}
                          height={40}
                        />
                        <div>
                          <h6 className="fs-4 mb-1 fw-semibold">
                            Eminson Mendoza
                          </h6>
                          <p className="mb-0 fw-normal">Features avaibility</p>
                        </div>
                      </div>
                      <div>
                        <ul className="list-unstyled d-flex align-items-center justify-content-end gap-1 mb-0">
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p className="fs-4 text-dark mb-0">
                      This template is great, UI-rich and up-to-date. Although
                      it is pretty much complete, I suggest to improve a bit of
                      documentation. Thanks &amp; Highly recomended!
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between mb-4">
                      <div className="d-flex align-items-center">
                        <img
                          src="{{ url_for('static', filename='landing/dist/images/profile/user-1.jpg') }}"
                          alt=""
                          className="w-auto me-3 rounded-circle"
                          width={40}
                          height={40}
                        />
                        <div>
                          <h6 className="fs-4 mb-1 fw-semibold">
                            Jenny Wilson
                          </h6>
                          <p className="mb-0 text-dark">Features avaibility</p>
                        </div>
                      </div>
                      <div>
                        <ul className="list-unstyled d-flex align-items-center justify-content-end gap-1 mb-0">
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p className="fs-4 mb-0 text-dark">
                      The dashboard template from adminmart has helped me
                      provide a clean and sleek look to my dashboard and made it
                      look exactly the way I wanted it to, mainly without
                      having.
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between mb-4">
                      <div className="d-flex align-items-center">
                        <img
                          src="{{ url_for('static', filename='landing/dist/images/profile/user-2.jpg') }}"
                          alt=""
                          className="w-auto me-3 rounded-circle"
                          width={40}
                          height={40}
                        />
                        <div>
                          <h6 className="fs-4 mb-1 fw-semibold">Minshan Cui</h6>
                          <p className="mb-0 text-dark">Features avaibility</p>
                        </div>
                      </div>
                      <div>
                        <ul className="list-unstyled d-flex align-items-center justify-content-end gap-1 mb-0">
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p className="fs-4 text-dark mb-0">
                      The quality of design is excellent, customizability and
                      flexibility much better than the other products available
                      in the market. I strongly recommend the AdminMart to other
                      buyers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between mb-4">
                      <div className="d-flex align-items-center">
                        <img
                          src="{{ url_for('static', filename='landing/dist/images/profile/user-3.jpg') }}"
                          alt=""
                          className="w-auto me-3 rounded-circle"
                          width={40}
                          height={40}
                        />
                        <div>
                          <h6 className="fs-4 mb-1 fw-semibold">
                            Eminson Mendoza
                          </h6>
                          <p className="mb-0 fw-normal">Features avaibility</p>
                        </div>
                      </div>
                      <div>
                        <ul className="list-unstyled d-flex align-items-center justify-content-end gap-1 mb-0">
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p className="fs-4 text-dark mb-0">
                      This template is great, UI-rich and up-to-date. Although
                      it is pretty much complete, I suggest to improve a bit of
                      documentation. Thanks &amp; Highly recomended!
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between mb-4">
                      <div className="d-flex align-items-center">
                        <img
                          src="{{ url_for('static', filename='landing/dist/images/profile/user-1.jpg') }}"
                          alt=""
                          className="w-auto me-3 rounded-circle"
                          width={40}
                          height={40}
                        />
                        <div>
                          <h6 className="fs-4 mb-1 fw-semibold">
                            Jenny Wilson
                          </h6>
                          <p className="mb-0 text-dark">Features avaibility</p>
                        </div>
                      </div>
                      <div>
                        <ul className="list-unstyled d-flex align-items-center justify-content-end gap-1 mb-0">
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p className="fs-4 mb-0 text-dark">
                      The dashboard template from adminmart has helped me
                      provide a clean and sleek look to my dashboard and made it
                      look exactly the way I wanted it to, mainly without
                      having.
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between mb-4">
                      <div className="d-flex align-items-center">
                        <img
                          src="{{ url_for('static', filename='landing/dist/images/profile/user-2.jpg') }}"
                          alt=""
                          className="w-auto me-3 rounded-circle"
                          width={40}
                          height={40}
                        />
                        <div>
                          <h6 className="fs-4 mb-1 fw-semibold">Minshan Cui</h6>
                          <p className="mb-0 text-dark">Features avaibility</p>
                        </div>
                      </div>
                      <div>
                        <ul className="list-unstyled d-flex align-items-center justify-content-end gap-1 mb-0">
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p className="fs-4 text-dark mb-0">
                      The quality of design is excellent, customizability and
                      flexibility much better than the other products available
                      in the market. I strongly recommend the AdminMart to other
                      buyers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between mb-4">
                      <div className="d-flex align-items-center">
                        <img
                          src="{{ url_for('static', filename='landing/dist/images/profile/user-3.jpg') }}"
                          alt=""
                          className="w-auto me-3 rounded-circle"
                          width={40}
                          height={40}
                        />
                        <div>
                          <h6 className="fs-4 mb-1 fw-semibold">
                            Eminson Mendoza
                          </h6>
                          <p className="mb-0 fw-normal">Features avaibility</p>
                        </div>
                      </div>
                      <div>
                        <ul className="list-unstyled d-flex align-items-center justify-content-end gap-1 mb-0">
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p className="fs-4 text-dark mb-0">
                      This template is great, UI-rich and up-to-date. Although
                      it is pretty much complete, I suggest to improve a bit of
                      documentation. Thanks &amp; Highly recomended!
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between mb-4">
                      <div className="d-flex align-items-center">
                        <img
                          src="{{ url_for('static', filename='landing/dist/images/profile/user-1.jpg') }}"
                          alt=""
                          className="w-auto me-3 rounded-circle"
                          width={40}
                          height={40}
                        />
                        <div>
                          <h6 className="fs-4 mb-1 fw-semibold">
                            Jenny Wilson
                          </h6>
                          <p className="mb-0 text-dark">Features avaibility</p>
                        </div>
                      </div>
                      <div>
                        <ul className="list-unstyled d-flex align-items-center justify-content-end gap-1 mb-0">
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p className="fs-4 mb-0 text-dark">
                      The dashboard template from adminmart has helped me
                      provide a clean and sleek look to my dashboard and made it
                      look exactly the way I wanted it to, mainly without
                      having.
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between mb-4">
                      <div className="d-flex align-items-center">
                        <img
                          src="{{ url_for('static', filename='landing/dist/images/profile/user-2.jpg') }}"
                          alt=""
                          className="w-auto me-3 rounded-circle"
                          width={40}
                          height={40}
                        />
                        <div>
                          <h6 className="fs-4 mb-1 fw-semibold">Minshan Cui</h6>
                          <p className="mb-0 text-dark">Features avaibility</p>
                        </div>
                      </div>
                      <div>
                        <ul className="list-unstyled d-flex align-items-center justify-content-end gap-1 mb-0">
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p className="fs-4 text-dark mb-0">
                      The quality of design is excellent, customizability and
                      flexibility much better than the other products available
                      in the market. I strongly recommend the AdminMart to other
                      buyers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between mb-4">
                      <div className="d-flex align-items-center">
                        <img
                          src="{{ url_for('static', filename='landing/dist/images/profile/user-3.jpg') }}"
                          alt=""
                          className="w-auto me-3 rounded-circle"
                          width={40}
                          height={40}
                        />
                        <div>
                          <h6 className="fs-4 mb-1 fw-semibold">
                            Eminson Mendoza
                          </h6>
                          <p className="mb-0 fw-normal">Features avaibility</p>
                        </div>
                      </div>
                      <div>
                        <ul className="list-unstyled d-flex align-items-center justify-content-end gap-1 mb-0">
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <img
                               
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p className="fs-4 text-dark mb-0">
                      This template is great, UI-rich and up-to-date. Although
                      it is pretty much complete, I suggest to improve a bit of
                      documentation. Thanks &amp; Highly recomended!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
           <section className="bg-primary pt-5 pt-xl-9 pb-8">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-8 col-xl-5 pt-lg-8 mb-7 mb-lg-0">
              <h2 className="fs-12 text-white text-center text-lg-start fw-bolder mb-8">
                Elevating Lives through Connections – Discover Health Connect:
                Nurturing Your Vitality.
              </h2>
              <div className="d-sm-flex align-items-center justify-content-center justify-content-lg-start gap-3">
                <a
                 
                  className="btn bg-white text-primary fw-semibold d-block mb-3 mb-sm-0 btn-hover-shadow"
                >
                  Login
                </a>
                <a
                 
                  className="btn border-white text-white fw-semibold btn-hover-white d-block"
                >
            
                
                 <Button color="inherit" component={Link} to="/FeedbackForm">Feedback</Button>
              
                </a>
              </div>
            </div>
            <div className="col-lg-5 col-xl-5">
              <div className="text-center text-lg-end">
                <img
                  src="{{ url_for('static', filename='landing/landing/dist/images/backgrounds/business-woman-checking-her-mail.png') }}"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <footer className="footer-part pt-8 pb-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <div className="text-center">
              <a href="index1.1.html">
                <img
                  src=""
                  alt=""
                  className="img-fluid pb-3"
                />
              </a>
              <p className="mb-0 text-dark">
                All rights reserved by Health Connect.

              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div
      className="offcanvas offcanvas-start modernize-lp-offcanvas"
      tabIndex={-1}
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
    >
      <div className="offcanvas-header p-4">
        <img
          src="{{ url_for('static', filename='landing/dist/images/logos/logo-dark.svg') }}"
          alt=""
          className="img-fluid"
          width={150}
        />
      </div>
      <div className="offcanvas-body p-4">
        <ul className="navbar-nav justify-content-end flex-grow-1">
         
          <li className="nav-item mt-3">
            <a
              className="nav-link fs-3 text-dark active"
              aria-current="page"
              href="../docs/index.html"
            >
              Find Doctors
            </a>
          </li>
          <li className="nav-item mt-3">
            <a
              className="nav-link fs-3 text-dark active"
              aria-current="page"
              href="../docs/index.html"
            >
              Lab Tests
            </a>
          </li>
          <li className="nav-item mt-3 dropdown">

              For Providers 

            <div className="dropdown-menu mt-3 ps-1">
  
              <div className="row">
                <div className="col-12">
                  <div className="position-relative">
                    <a
                      href="#"
                      className="d-flex align-items-center pb-7 position-relative lh-base"
                    >
                      <div className="bg-light rounded me-3 p-6 d-flex align-items-center justify-content-center">
                        <img
                         alt=""
                          className="img-fluid"
                          width={24}
                          height={24}
                        />
                      </div>
                      <div className="d-inline-block">
                        <h6 className="mb-1 fw-semibold text-hover-primary">
                          For Doctors
                        </h6>
                        <span className="fs-2 d-block fw-normal text-muted">New messages arrived</span> 
                      </div>
                    </a>
                    <a
                      href="#"
                      className="d-flex align-items-center pb-7 position-relative lh-base"
                    >

                      <div className="d-inline-block">
                        <h6 className="mb-1 fw-semibold text-hover-primary">
                          For Hospitals
                        </h6>
                    
                      </div>
                    </a>
                    <a
                      href="#"
                      className="d-flex align-items-center pb-7 position-relative lh-base"
                    >

                      <div className="d-inline-block">
                        <h6 className="mb-1 fw-semibold text-hover-primary">
                          For Pharmacies
                        </h6>
                       
                      </div>
                    </a>
                  </div>
                </div>
                 </div>
            </div>
          </li>
          <li className="nav-item mt-3">
            <a
              className="nav-link fs-3 text-dark active"
              aria-current="page"
             
            >
              Documentation
            </a>
          </li>

        </ul>
        <form className="d-flex mt-3" role="search">
          <a
           
            className="btn btn-primary w-100 py-2"
          >
            Login
          </a>
        </form>
        <form className="d-flex mt-3" role="search">
          <a
           
            className="btn btn-primary w-100 py-2"
          >
            Sign Up
          </a>
        </form>
      </div>
      // Function to show error alert with auto-close feature
    </div>
  </div>
 
</>
 )
};

export default LandingPage;