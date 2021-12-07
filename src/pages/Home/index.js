import React, { Fragment, useEffect, useRef, useState } from 'react'
import Title from '../../components/shared/Title'

import RESUME1 from '../../assets/resume1.jpg';
import RESUME2 from '../../assets/resume2.jpg';
import LOGO from '../../assets/logo.jpeg';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClientFeedback from '../../components/shared/ClientFeedback'
import PricingAndPlan from '../../components/shared/PricingAndPlan'
import About from '../../components/shared/About'
import Work from '../../components/shared/Work'
import { TOPIC } from '../../constants/constants';
import { toast } from 'react-toastify';
import { SEND_EMAIL } from '../../config/config';

export default function Home() {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
    topic: ""
  });
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
  };
  const handleSubmit = (event) => {
    debugger
    event.preventDefault();
    setLoading(true);
    fetch(SEND_EMAIL, {
      // Adding method type
      method: "POST",
      // Adding body or contents to send
      body: JSON.stringify(state),
      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })// Converting to JSON
      .then(response => {
        toast.success("We will shortly contact you!")
        setState({
          name: "",
          email: "",
          message: "",
          topic: ""
        })
      }).finally(()=>setLoading(false))

  }

  const selectPlan = (value) => {
    setState({
      ...state,
      topic: value
    })
  }

  const handleChange = (event) => {
    debugger
    const { name, value } = event.target;
    let data = { ...state };
    data[name] = value;
    setState(data)

  }

  useEffect(() => {
    counter("count1", 0, 40, 3000);
    counter("count2", 7000, 8934, 300);
  }, [])
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, step);
  }

  return (
    <Fragment>
      <header id='header'>
        <nav className="navbar navbar-expand-lg px-4">
          <a href="#" className='navbar-brand'>
            <img src={LOGO} alt="main icon" height="auto" width="50px" />
          </a>
          <button type='button' className='navbar-toggler' data-toggle='collapse' data-target='#myNavbar'>
            <span className='toggler-icon'>
              <i className="fas fa-bars"></i>
            </span>
          </button>

          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="navbar-nav text-capitalize mx-auto">
              <li className="nav-item active">
                <a href="#home" className='nav-link'>Home</a>
              </li>

              <li className="nav-item active">
                <a href="#services" className='nav-link'>services</a>
              </li>

              <li className="nav-item active">
                <a href="#plan&pricing" className='nav-link'>plan & pricing</a>
              </li>


              <li className="nav-item active">
                <a href="#about" className='nav-link'>about</a>
              </li>

              <li className="nav-item active">
                <a href="#contactus" className='nav-link'>contact us</a>
              </li>

            </ul>
            <div className="nav-info-items d-none d-lg-flex">
            </div>
          </div>
        </nav>

        <div className="container-fluid banner-parent">
          <div className="row max-height banner-parent-inner">
            <div className="row justify-content-center align-items-center banner-content">
              <div data-aos="fade-up" className="col-10 mx-auto banner text-center">
                <h1 className="text-capitalize">
                  Start landing more interviews with a professionally written resume!
                </h1>
                <div className="banner-text">
                  <ul className="home-checklist">
                    <li className="play" data-aos="fade-up">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#51cd0a"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                      <span>Instantly impress managers.
                      </span>
                    </li>
                    <li className="play" data-aos="fade-up">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#51cd0a"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                      <span>Proven to earn more call-backs. </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row  justify-content-center home-stats stats">
              <div className="col-6 ">
                <h1 className='text-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 0 24 24" width="50px" fill="#20e498"><path d="M0 0h24v24H0z" fill="none" /><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" /></svg>
                  <span id="count1"></span>%</h1>
                <h6>Increase number of interviews you sit by 40%</h6>
              </div>
              <div className="col-md-6 mx-auto col-sm-6 ">
                <h1 className='text-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 0 24 24" width="50px" fill="#20e498"><path d="M0 0h24v24H0z" fill="none" /><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" /></svg>
                  <span id="count2"></span></h1>
                <h6>people we’ve helped land more interviews and get hired</h6>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="services" className="home-what-you-get what py-5">
        <div className="container">
          <Title title="What You Get" />
          <div className="row inner">
            <div className="col-md-6 mx-auto col-sm-6 ">
              <Slider {...settings}>
                <div>
                  <img src={RESUME1} height="auto" width="400px" />
                </div>
                <div>
                  <img src={RESUME2} height="auto" width="400px" />
                </div>
              </Slider>
            </div>
            <div className="col-6 mx-auto col-sm-6 ">
              <ul className="what-uou-listing">
                <li>
                  <div className="tile"> <i className="fa fa-file-text" aria-hidden="true"></i>
                  </div>Compelling new resume with fast turnaround</li>
                <li>
                  <div className="tile"><i className="fa fa-comments" aria-hidden="true"></i></div>
                  1-on-1 collaboration with an expert in your industry</li>
                <li> <div className="tile"> <i className="fa fa-list-alt" aria-hidden="true"></i>
                </div>Keyword optimized & proven to pass ATS systems</li>
                <li>  <div className="tile"><i className="fa fa-thumbs-up" aria-hidden="true"></i></div> Satisfaction guaranteed – or your money-back!</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <hr className="w-75" />
      <Work />
      {/* <hr className="w-75" /> */}
      <ClientFeedback />
      {/* <hr className="w-75" /> */}
      <PricingAndPlan selectPlan={selectPlan} />
      <hr className="w-75" />
      <About />
      <hr className="w-75" />

      <div className="container py-5" id="contactus">
        <Title title="Get InTouch" />
        <div className="row">
          <div className="col-md-4 footer-contact text-center text-capitalize p-4">
            <p className="d-flex flex-wrap">
              <span className="mr-4 footer-icon">
                <i className="fa fa-map"></i>
              </span>
              <span>123 main street, World 901525</span>
            </p>
            <p className="d-flex flex-wrap">
              <span className="mr-4 footer-icon">
                <i className="fa fa-phone"></i>
              </span>
              <span>202-456-2121</span>
            </p>
            <p className="d-flex flex-wrap">
              <span className="mr-4 footer-icon">
                <i className="fa fa-envelope"></i>
              </span>
              <span>resumegod@gmail.com </span>
            </p>
          </div>
          <div className="col-md-8 contact-form">
            <div className="row">
            </div>
            <form onSubmit={handleSubmit} ref={form}>
              <div className="form-group">
                <label for="name">Name</label>
                <input type="text" className="form-control" id="name" name="name" value={state.name} placeholder="Please enter name" onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label for="email">Email</label>
                <input type="email" className="form-control" id="email" name="email" value={state.email} placeholder="Please enter email" onChange={handleChange} required />
              </div>
              <div className="form-group" >
                <label for="topic">Topic</label>
                <select name="topic" className="form-control" name="topic" value={state.topic} onChange={handleChange} required>
                  {TOPIC.map(({ key, value }) => {
                    return (
                      <option key={key} value={value}>{value}</option>
                    )
                  })}
                </select>
              </div>
              <div className="form-group">
                <label for="subject">Message</label>
                <textarea id="subject" className="form-control" name="message" value={state.message} placeholder="Please enter message" onChange={handleChange} required></textarea>
              </div>
              {loading ? <div class="spinner-border text-primary float-right" role="status">
                <span class="sr-only">Loading...</span>
              </div> : <button type="submit" className="btn btn-primary">Submit</button>}

            </form>
          </div>
        </div>
      </div>

    </Fragment>
  )
}
