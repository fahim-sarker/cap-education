import React from 'react'
import "./Testimonial.css"
import { Col, Container, Row } from 'react-bootstrap'
import Test1 from "../../assets/testi1.png"
import Test2 from "../../assets/testi2.png"
import Test3 from "../../assets/testi3.png"
import Slider from "react-slick";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots : false
  };
  return (
    <section id='testi'>
      <Container>
        <Row>
            <Col lg={12}>
            <div className="testimonial-text">
              <h4>Testimonial</h4>
              <h3>What Our Student Feedback</h3>
            </div>
            </Col>
        </Row>
        <Row>
            <Col lg={12}>
            <Slider {...settings}>
                <div className="testimain">
                    <p>Flexible Classes refers to the process of acquiring knowledge or skills through the use of digital technologies and the internet. Flexible Classes refers to the process  flexible Classes refers to the process</p>
                    <h4>Savannah Nguyen</h4>
                    <h5>UI/UX Designer</h5>
                    <img src={Test1} alt="Test1" className='Test1'/>
                    <img src={Test2} alt="Test2" className='Test2'/>
                    <img src={Test3} alt="Test3" className='Test3'/>
                </div>
                <div className="testimain">
                    <p>Flexible Classes refers to the process of acquiring knowledge or skills through the use of digital technologies and the internet. Flexible Classes refers to the process  flexible Classes refers to the process</p>
                    <h4>Savannah Nguyen</h4>
                    <h5>UI/UX Designer</h5>
                    <img src={Test1} alt="Test1" className='Test1'/>
                    <img src={Test2} alt="Test2" className='Test2'/>
                    <img src={Test3} alt="Test3" className='Test3'/>
                </div>
                <div className="testimain">
                    <p>Flexible Classes refers to the process of acquiring knowledge or skills through the use of digital technologies and the internet. Flexible Classes refers to the process  flexible Classes refers to the process</p>
                    <h4>Savannah Nguyen</h4>
                    <h5>UI/UX Designer</h5>
                    <img src={Test1} alt="Test1" className='Test1'/>
                    <img src={Test2} alt="Test2" className='Test2'/>
                    <img src={Test3} alt="Test3" className='Test3'/>
                </div>
                <div className="testimain">
                    <p>Flexible Classes refers to the process of acquiring knowledge or skills through the use of digital technologies and the internet. Flexible Classes refers to the process  flexible Classes refers to the process</p>
                    <h4>Savannah Nguyen</h4>
                    <h5>UI/UX Designer</h5>
                    <img src={Test1} alt="Test1" className='Test1'/>
                    <img src={Test2} alt="Test2" className='Test2'/>
                    <img src={Test3} alt="Test3" className='Test3'/>
                </div>
            </Slider>
            </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Testimonial
