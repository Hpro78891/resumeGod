import React, { Fragment } from 'react'
import LOGO from '../../assets/logo.jpeg';
import Title from './Title';

export default function About() {
    return (
        <Fragment>
            <section id="about" className="py-5">
                <div className="container">
                    <Title title="About Us" />
                    <div className="row about-content">
                        <div className="col-md-6">
                            <img src={LOGO} height="500px" width="500px" alt="aboutus" />
                        </div>
                        <div className="col-md-6">
                            <p>Located in the US, we are a team of employment experts with over 10 years of experience working in Resume Writing . With an extensive understanding of the recruitment and hiring process, our vision is to apply our knowledge to help everyday job seekers get the job they want.</p>
                            <p>Our background in the careers industry means staying up to date with hiring trends across a multitude of industries comes naturally to us. Our talented writers are focused on creating exceptional resumes proven to help you stand out, with standards based on our personal experience working in HR.</p>
                            <p>And we really do know how to catch the eye of a hiring manager: since we launched in 2011, our custom written resumes have helped thousands of clients find meaningful employment. We also proudly maintain an immaculate customer service record with over 98% of our clients saying they would recommend our service to family and friends – that’s why we now offer a 100% money-back satisfaction guarantee with each and every service.</p>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
