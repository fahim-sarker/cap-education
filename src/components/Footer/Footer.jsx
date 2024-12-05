import React from 'react'
import "./Footer.css"
import Ft from "../../assets/ftr.png"
import { Col, Container, Row } from 'react-bootstrap'
import Ft1 from "../../assets/ftlogo.png"
import Ft2 from "../../assets/ftlogo1.png"
import { FaFacebook,FaLinkedin ,FaYoutube ,FaTwitter  } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsTelephonePlus } from "react-icons/bs";
import { CiMail } from "react-icons/ci";



const Footer = () => {
  return (
    <section id='footer'>
        <Container>
            <Row className='ftmain'>
                <Col lg={4}>
                    <div className="ftcol1">
                        <div className="flexdiv">
                            <img src={Ft2} alt="Ft1" className='ft2'/>
                            <img src={Ft1} alt="Ft1" />
                        </div>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                        <div className="ftr-icon">
                            <i className='fticon'><FaFacebook/></i>
                            <i className='fticon'><FaLinkedin/></i>
                            <i className='fticon'><FaYoutube/></i>
                            <i className='fticon'><FaTwitter/></i>
                        </div>
                    </div>
                </Col>
                    <Col lg={2}>
                    <div className="ftcol2">
                        <h3>Quick Links</h3>
                            <ul>
                                <li>Latest Courses</li>
                                <li>Mission & Vision</li>
                                <li>Our Approach</li>
                                <li>Exclusive Advisors</li>
                                <li>Join a Carrer</li>
                            </ul>
                    </div>
                    </Col>
                    <Col lg={2}>
                    <div className="ftcol2">
                        <h3>Explore</h3>
                            <ul>
                                <li>About Us</li>
                                <li>Upcoming Events</li>
                                <li>Blog & News</li>
                                <li>FAQ Question</li>
                                <li>Testimonial</li>
                                <li>Privacy Policy</li>
                            </ul>
                    </div>
                    </Col>
                    <Col lg={4}>
                    <div className="ftcol2">
                        <h3>Contact Us</h3>
                            <ul>
                                <li><FaLocationDot className='conicon'/>6391 Elgin St. Celina, Delaware 10299</li>
                                <li><BsTelephonePlus className='conicon'/>(303) 555-0105</li>
                                <li><CiMail className='conicon'/>michael.mitc@example.com</li>
                            </ul>
                            <input type="text" placeholder='Email Address' className='mailinpu'/>
                            <button className='ftrmailbtn'>Subscribe</button>
                    </div>
                    </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Footer
